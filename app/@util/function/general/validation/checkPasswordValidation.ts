const MIN_PASSWORD_LENGTH = 4;
const MAX_PASSWORD_LENGTH = 6;

export function checkPasswordNumber(
  password: number
): string | undefined {
  if (!/^\d+$/.test(password.toString())) {
    return "비밀번호는 숫자만 가능합니다.";
  }
}

export function checkPasswordNaN(
  password: number
): string | undefined {
  if (Number.isNaN(password)) {
    return "확인되지 않은 형식의 비밀번호입니다.";
  }
}

export function checkPasswordMissing(
  password: number
): string | undefined {
  if (password === undefined) {
    return "비밀번호가 누락되었습니다.";
  }
}

export function checkPasswordLength(
  password: number
): string | undefined {
  const stringPasswordLength = password.toString().length;

  if (
    stringPasswordLength < MIN_PASSWORD_LENGTH ||
    stringPasswordLength > MAX_PASSWORD_LENGTH
  ) {
    return `비밀번호는 ${MIN_PASSWORD_LENGTH}~${MAX_PASSWORD_LENGTH} 자리만 허용됩니다.`;
  }
}
