const MAX_EXPLAIN_LENGTH = 1000;

export function checkExplainString(
  explain: string
): string | undefined {
  if (typeof explain !== "string") {
    return "입력값이 문자열이 아닙니다.";
  }
}

export function checkExplainLength(
  explain: string
): string | undefined {
  if (explain.length > MAX_EXPLAIN_LENGTH) {
    return `설명은 ${MAX_EXPLAIN_LENGTH}자로 제한됩니다.`;
  }
}
