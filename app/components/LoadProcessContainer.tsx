export default function LoadProcessContainer({
  isLoading,
  isError,
}: {
  isLoading: boolean;
  isError: boolean;
}) {
  if (isLoading) {
    <div className="min-h-[200px] mt-3 flex justify-center place-items-center">
      로딩중입니다.
    </div>;
  }

  return (
    <div className="min-h-[200px] mt-3 flex justify-center place-items-center">
      에러가 발생했습니다.
    </div>
  );
}
