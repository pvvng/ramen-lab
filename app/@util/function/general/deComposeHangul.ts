/** 한글 해체 함수 */
export default function decomposeHangul(text : string) {
    const initialConsonants = [
        "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ",
        "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
    ];
    const medialVowels = [
        "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ",
        "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"
    ];
    const finalConsonants = [
        "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ",
        "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ",
        "ㅋ", "ㅌ", "ㅍ", "ㅎ"
    ];

    const result = [];

    for (const char of text) {
        const code = char.charCodeAt(0);

        // 한글 여부 확인
        if (code >= 0xac00 && code <= 0xd7a3) {
            const syllableIndex = code - 0xac00;

            const initialIndex = Math.floor(syllableIndex / (21 * 28));
            const medialIndex = Math.floor((syllableIndex % (21 * 28)) / 28);
            const finalIndex = syllableIndex % 28;

            result.push(initialConsonants[initialIndex]);
            result.push(medialVowels[medialIndex]);
            if (finalIndex > 0) {
                result.push(finalConsonants[finalIndex]);
            }
        } else {
            result.push(char); // 한글이 아니면 그대로 추가
        }
    }

    return result;
}