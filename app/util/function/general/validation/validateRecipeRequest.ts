// type
import { AWSImageItmeType } from "@/types/aws-image";

// validation
import {
  checkIngredientItems,
  checkIngredientLength,
  checkIngredientMissing,
} from "./checkIngredientValidation";
import { checkNameLength, checkNameMissing } from "./checkNameValidation";
import { preventNoSQLInjection } from "./checkNoSQLInjection";
import {
  checkPasswordLength,
  checkPasswordMissing,
  checkPasswordNaN,
  checkPasswordNumber,
} from "./checkPasswordValidation";
import {
  checkExplainLength,
  checkExplainString,
} from "./checkExplainValidation";

export function validateRequest(
  name: string,
  password: number,
  explain: string
): string | null {
  const nameError = validateName(name);
  if (nameError) return nameError;

  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;

  const explainError = validateExplain(explain);
  if (explainError) return explainError;

  return null;
}

export function validateIngredient(
  ingredient: AWSImageItmeType[]
): string | null {
  const missingError = checkIngredientMissing(ingredient);
  if (missingError) return missingError;

  const lengthError = checkIngredientLength(ingredient);
  if (lengthError) return lengthError;

  const itemError = checkIngredientItems(ingredient);
  if (itemError) return itemError;

  return null;
}

function validateName(name: string): string | null {
  const missingError = checkNameMissing(name);
  if (missingError) return missingError;

  const lengthError = checkNameLength(name);
  if (lengthError) return lengthError;

  const injectionError = preventNoSQLInjection(name);
  if (injectionError) return injectionError;

  return null;
}

function validatePassword(password: number): string | null {
  const missingError = checkPasswordMissing(password);
  if (missingError) return missingError;

  const numberError = checkPasswordNumber(password);
  if (numberError) return numberError;

  const nanError = checkPasswordNaN(password);
  if (nanError) return nanError;

  const lengthError = checkPasswordLength(password);
  if (lengthError) return lengthError;

  return null;
}

function validateExplain(explain: string): string | null {
  const stringError = checkExplainString(explain);
  if (stringError) return stringError;

  const lengthError = checkExplainLength(explain);
  if (lengthError) return lengthError;

  const injectionError = preventNoSQLInjection(explain);
  if (injectionError) return injectionError;

  return null;
}
