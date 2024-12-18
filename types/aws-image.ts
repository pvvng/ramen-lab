export interface AWSImageItmeType {
    url : string;
    name : string;
}

export interface AWSImageStoreType {
    name: string;
    url: string;
    decomposed: string[]; // 분리된 자모 필드 추가
}