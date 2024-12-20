import usePostRecipe from "@/app/@util/hooks/usePostRecipe";

interface PropsType {
  name: string;
  placeholder: string;
}

export default function RecipeInputContainer() {
  const inputData = [
    { name: "name", placeholder: "레시피 이름" },
    { name: "stringPassword", placeholder: "4~6자리 숫자 비밀번호" },
  ];

  return (
    <>
      {inputData.map((input) => (
        <RecipeInput key={input.placeholder} {...input} />
      ))}
      <HiddenInput />
    </>
  );
}

function RecipeInput({ name, placeholder }: PropsType) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="border border-black h-8 flex-1 rounded p-2"
    />
  );
}

function HiddenInput() {
  const { stringIngredient } = usePostRecipe();

  return (
    <input
      type="hidden"
      className="w-0 h-0"
      name="stringIngredient"
      value={stringIngredient}
    />
  );
}
