import {
  finalConsonants,
  initialConsonants,
  medialVowels,
} from "./koreanComponents";

/** 한글 해체 함수 */
export default function decomposeHangul(text: string): string[] {
  const decomposedText: string[] = [];

  for (const char of text) {
    isHangul(char, decomposedText);
  }

  return decomposedText;
}

function isHangul(char: string, decomposedArray: string[]): void {
  const code = char.charCodeAt(0);

  // 한글 여부 확인
  if (code >= 0xac00 && code <= 0xd7a3) {
    checkKoreanIndex(code, decomposedArray);

    return;
  }

  pushDecomposedText(decomposedArray, char);
}

function checkKoreanIndex(code: number, decomposedArray: string[]): void {
  const syllableIndex = code - 0xac00;

  const initialIndex = Math.floor(syllableIndex / (21 * 28));
  const medialIndex = Math.floor((syllableIndex % (21 * 28)) / 28);
  const finalIndex = syllableIndex % 28;

  pushDecomposedText(decomposedArray, initialConsonants[initialIndex]);
  pushDecomposedText(decomposedArray, medialVowels[medialIndex]);

  if (finalIndex > 0) {
    pushDecomposedText(decomposedArray, finalConsonants[finalIndex]);
  }
}

function pushDecomposedText(decomposedArray: string[], word: string) {
  decomposedArray.push(word);
}
