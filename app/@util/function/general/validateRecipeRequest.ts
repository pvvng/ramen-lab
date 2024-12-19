import { AWSImageItmeType } from "@/types/aws-image";

export function validateRequest(name: string, password: number, explain: string): string| null {
    if (!/^\d+$/.test(password.toString())) {
        return "비밀번호는 숫자만 가능합니다.";
    }

    if(Number.isNaN(password)){
        return "확인되지 않은 형식의 비밀번호입니다.";
    }

    if (!name || !password) {
        return "레시피 이름 혹은 비밀번호가 누락되었습니다.";
    }

    if (name.length > 20) {
        return "레시피 이름은 20자를 초과할 수 없습니다.";
    }

    if (password.toString().length < 4 || password.toString().length > 6) {
        return "비밀번호는 4~6 자리만 허용됩니다.";
    }

    if(typeof explain !== "string"){
        return "입력값이 문자열이 아닙니다.";
    }

    // MongoDB 연산자($로 시작하는 키워드) 필터링
    // NoSQL injection 방어코드
    if (explain.includes("$")) {
        return "$ 문자 사용은 허용되지 않습니다.";
    }
    
    if(explain.length > 100){
        return "설명은 100자로 제한됩니다.";
    }

    // 유효성 검사가 통과되면 null 반환
    return null;
}

export function validateIngredient(ingredient : AWSImageItmeType[]): string|null{
    if(!ingredient){
        return "재료가 확인되지 않습니다.";
    }

    if(ingredient.length > 10 || ingredient.length < 1){
        return "1 ~ 10개의 재료를 등록해야 합니다.";
    }

    // 배열 검증 실패 조건
    const invalidItem = ingredient.some(
        (item) =>
            !item.url || typeof item.url !== "string" || !item.name || typeof item.name !== "string"
    );

    if (invalidItem) {
        return "재료의 URL 또는 이름이 유효하지 않은 항목이 포함되어 있습니다.";
    }

    return null;
}