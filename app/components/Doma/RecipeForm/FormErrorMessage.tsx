export default function FormErrorMessage({
  errorMessage,
}: {
  errorMessage: string | null;
}) {
  if (errorMessage) {
    return <div className="col-span-12 text-red-500 mb-2">{errorMessage}</div>;
  }

  return null;
}
