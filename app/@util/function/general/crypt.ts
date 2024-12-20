import bcrypt from "bcrypt";

/** 숫자 문자열로 변환하는 함수 */
function stringifyPassword(password: number) {
  return password.toString();
}

/** 비밀번호 해싱 함수 */
export async function hashPassword(password: number) {
  const saltRounds = 10; // 해시 강도
  const hashedPassword = await bcrypt.hash(
    stringifyPassword(password),
    saltRounds
  );
  return hashedPassword;
}

/** 비밀번호 검증 함수 */
export async function verifyPassword(
  inputPassword: number,
  hashedPassword: number
) {
  const isMatch = await bcrypt.compare(
    stringifyPassword(inputPassword),
    stringifyPassword(hashedPassword)
  );
  return isMatch;
}
