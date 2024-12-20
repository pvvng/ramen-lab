import { AWSImageItmeType, AWSImageStoreType } from "@/types/aws-image";
import { create } from "zustand";
import decomposeHangul from "../@util/function/general/koreanWord/deComposeHangul";
import isSimilar from "../@util/function/general/koreanWord/isSimilar";

interface AWSImageStore {
  images: AWSImageStoreType[]; // 원본 배열
  filteredImages: AWSImageStoreType[]; // 필터링된 이미지 목록
  setImages: (data: AWSImageItmeType[]) => void; // 전체 이미지 설정
  filterImages: (input: string[]) => void; // 필터링 로직
  clearFilter: () => void; // 필터 초기화
}

export const useAWSImageStore = create<AWSImageStore>((set) => ({
  images: [], // 전체 데이터
  filteredImages: [], // 필터링된 데이터

  // 전체 이미지 설정
  setImages: (data) => {
    const processedData = data.map((item) => ({
      ...item,
      decomposed: decomposeHangul(item.name), // 이름을 자모로 분리
    }));
    set(() => ({
      images: processedData,
      filteredImages: processedData, // 초기 상태를 전체 데이터로 설정
    }));
  },

  // 필터링 함수
  filterImages: (input) =>
    set((state) => {
      const filtered = state.images.filter(
        (item) => isSimilar(item.decomposed, input) // images를 기반으로 필터링
      );
      return { filteredImages: filtered };
    }),

  // 필터 초기화
  clearFilter: () =>
    set((state) => ({
      filteredImages: state.images, // 원본 데이터로 초기화
    })),
}));
