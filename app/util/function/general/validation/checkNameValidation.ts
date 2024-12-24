const MIN_RECIPE_LENGTH = 2;
const MAX_RECIPE_LENGTH = 20;

export function checkNameMissing(
  name: string
): string | undefined {
  if (!name) {
    return "레시피 이름이 누락되었습니다.";
  }
}

export function checkNameLength(
  name: string
): string | undefined {
  if (name.length < MIN_RECIPE_LENGTH || name.length > MAX_RECIPE_LENGTH) {
    return `레시피 이름은 ${MIN_RECIPE_LENGTH}~${MAX_RECIPE_LENGTH}자로 제한됩니다.`;
  }
}
