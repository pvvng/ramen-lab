import normalizeJamo from "./nomalizeJamo";

export default function isSimilar(target: string[], input: string[]): boolean {
    const normalizedTarget = target.map(normalizeJamo);
    const normalizedInput = input.map(normalizeJamo);

    // 입력값 길이만큼 대상 데이터를 자르고 비교
    const slicedTarget = normalizedTarget.slice(0, normalizedInput.length);

    return JSON.stringify(slicedTarget) === JSON.stringify(normalizedInput);
}