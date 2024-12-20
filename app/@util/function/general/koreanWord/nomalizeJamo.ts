import { jamoMap } from "./jamoMap";

export default function normalizeJamo(jamo: string): string {
  return jamoMap[jamo] || jamo; // 초성/중성/종성이 매핑에 없으면 원래 값 반환
}
