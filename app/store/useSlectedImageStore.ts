import { AWSImageItmeType } from "@/types/aws-image";
import { create } from "zustand";

// Zustand 스토어 타입
interface SelectedImageStore {
  images: AWSImageItmeType[]; // 이미지 목록
  addImage: (image: AWSImageItmeType) => void; // 이미지 추가
  removeImage: (name: string) => void; // 이름으로 이미지 삭제
  clearImages: () => void; // 모든 이미지 제거
  hasImage: (name: string) => boolean; // 이미지 존재 여부 확인
}

// Zustand 스토어 생성
export const useSlectedImageStore = create<SelectedImageStore>((set, get) => ({
  images: [], // 초기 이미지 배열

  // 이미지 추가
  addImage: (image) =>
    set((state) => {
      if (state.images.length >= 10) {
        alert("재료는 최대 10개까지만 추가할 수 있습니다.");
        return state; // 상태를 변경하지 않음
      }
      return {
        images: [...state.images, image],
      };
    }),

  // 이름으로 이미지 삭제
  removeImage: (name) =>
    set((state) => ({
      images: state.images.filter((img) => img.name !== name),
    })),

  // 모든 이미지 제거
  clearImages: () =>
    set(() => ({
      images: [],
    })),

  // 이미지 존재 여부 확인
  hasImage: (name) => {
    const { images } = get();
    return images.some((img) => img.name === name);
  },
}));
