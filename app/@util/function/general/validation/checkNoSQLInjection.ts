const NO_SQL_STRING = "$";

export function preventNoSQLInjection(
  input: string
): string | undefined {
  if (input.includes(NO_SQL_STRING)) {
    return NO_SQL_STRING + " 문자 사용은 허용되지 않습니다.";
  }
}
