"use client";

import useRecommendForm from "../@util/hooks/useRecommendForm";

export default function RecommendForm() {
  const { textAreaRef, handleButtonClick } = useRecommendForm();
  
  return (
    <div className="border border-black rounded p-2 mt-3">
      <RecommendName />
      <RecommendTextArea textAreaRef={textAreaRef} />
      <RecommendButton onClick={handleButtonClick} />
    </div>
  );
}

function RecommendName() {
  return (
    <h3 className="text-xl font-bold text-start mt-2 mb-2">식재료 추천하기</h3>
  );
}

function RecommendTextArea({
  textAreaRef,
}: {
  textAreaRef: React.RefObject<HTMLTextAreaElement | null>;
}) {
  return (
    <textarea
      ref={textAreaRef}
      name="recommend"
      className="resize-none border border-black col-span-4 rounded p-2 w-full h-[150px] mt-1"
      placeholder="추가되었으면 하는 식재료를 추천해주세요. (100자 제한)"
    />
  );
}

function RecommendButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="text-end mt-1">
      <button
        className="bg-black text-white rounded w-full max-w-[180px]"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
