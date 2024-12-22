export default function FormTextarea() {
  return (
    <textarea
      name="explain"
      className="resize-none border border-black col-span-4 rounded p-2 w-full h-[150px] mt-3"
      placeholder="레시피에 관한 설명 (조리법, 추억 등, 1000자 제한)"
    />
  );
}
