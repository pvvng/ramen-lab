export default function normalizeJamo(jamo: string): string {
    const jamoMap: { [key: string]: string } = {
        // 초성 매핑
        "ᄀ": "ㄱ", "ᄁ": "ㄲ", "ᄂ": "ㄴ", "ᄃ": "ㄷ", "ᄄ": "ㄸ", "ᄅ": "ㄹ",
        "ᄆ": "ㅁ", "ᄇ": "ㅂ", "ᄈ": "ㅃ", "ᄉ": "ㅅ", "ᄊ": "ㅆ", "ᄋ": "ㅇ",
        "ᄌ": "ㅈ", "ᄍ": "ㅉ", "ᄎ": "ㅊ", "ᄏ": "ㅋ", "ᄐ": "ㅌ", "ᄑ": "ㅍ", "ᄒ": "ㅎ",

        // 중성(모음) 매핑
        "ᅡ": "ㅏ", "ᅢ": "ㅐ", "ᅣ": "ㅑ", "ᅤ": "ㅒ", "ᅥ": "ㅓ", "ᅦ": "ㅔ",
        "ᅧ": "ㅕ", "ᅨ": "ㅖ", "ᅩ": "ㅗ", "ᅪ": "ㅘ", "ᅫ": "ㅙ", "ᅬ": "ㅚ",
        "ᅭ": "ㅛ", "ᅮ": "ㅜ", "ᅯ": "ㅝ", "ᅰ": "ㅞ", "ᅱ": "ㅟ", "ᅲ": "ㅠ",
        "ᅳ": "ㅡ", "ᅴ": "ㅢ", "ᅵ": "ㅣ",

        // 종성 매핑
        "ᆨ": "ㄱ", "ᆩ": "ㄲ", "ᆪ": "ㄳ", "ᆫ": "ㄴ", "ᆬ": "ㄵ", "ᆭ": "ㄶ",
        "ᆮ": "ㄷ", "ᆯ": "ㄹ", "ᆰ": "ㄺ", "ᆱ": "ㄻ", "ᆲ": "ㄼ", "ᆳ": "ㄽ",
        "ᆴ": "ㄾ", "ᆵ": "ㄿ", "ᆶ": "ㅀ", "ᆷ": "ㅁ", "ᆸ": "ㅂ", "ᆹ": "ㅄ",
        "ᆺ": "ㅅ", "ᆻ": "ㅆ", "ᆼ": "ㅇ", "ᆽ": "ㅈ", "ᆾ": "ㅊ", "ᆿ": "ㅋ",
        "ᇀ": "ㅌ", "ᇁ": "ㅍ", "ᇂ": "ㅎ"
    };
    return jamoMap[jamo] || jamo; // 초성/중성/종성이 매핑에 없으면 원래 값 반환
}