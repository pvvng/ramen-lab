import { AWSImageItmeType } from "@/types/aws-image";

const MIN_INGREDIENT_LENGTH = 1;
const MAX_INGREDIENT_LENGTH = 10;

export function checkIngredientMissing(
  ingredient: AWSImageItmeType[]
): string | undefined {
  if (!ingredient) {
    return "재료가 확인되지 않습니다.";
  }
}

export function checkIngredientLength(
  ingredient: AWSImageItmeType[]
): string | undefined {
  if (
    ingredient.length < MIN_INGREDIENT_LENGTH ||
    ingredient.length > MAX_INGREDIENT_LENGTH
  ) {
    return `${MIN_INGREDIENT_LENGTH}~${MAX_INGREDIENT_LENGTH} 개의 재료를 등록해야 합니다.`;
  }
}

export function checkIngredientItems(
  ingredient: AWSImageItmeType[]
): string | undefined {
  // 배열 검증 실패 조건
  const invalidItem = ingredient.some(
    (item) =>
      !item.url ||
      typeof item.url !== "string" ||
      !item.name ||
      typeof item.name !== "string"
  );

  if (invalidItem) {
    return "재료의 URL 또는 이름이 유효하지 않은 항목이 포함되어 있습니다.";
  }
}
