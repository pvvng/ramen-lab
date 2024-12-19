import { AWSImageItmeType, AWSImageStoreType } from "@/types/aws-image";
import { create } from "zustand";
import decomposeHangul from "./@util/function/general/deComposeHangul";
import isSimilar from "./@util/function/general/isSimilar";

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

interface AWSImageStore {
    images : AWSImageStoreType[]; // 원본 배열
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
            const filtered = state.images.filter((item) =>
                isSimilar(item.decomposed, input) // images를 기반으로 필터링
            );
            return { filteredImages: filtered };
        }),

    // 필터 초기화
    clearFilter: () =>
        set((state) => ({
            filteredImages: state.images, // 원본 데이터로 초기화
        })),
}));