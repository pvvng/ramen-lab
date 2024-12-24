export default async function copyToClipboard(name: string, explain: string) {
  const shareText = `*${name}*\n-레시피 설명-\n${explain === "" ? "X" : explain}`;

  try {
    await navigator.clipboard.writeText(shareText); // 클립보드에 텍스트 쓰기
    alert("레시피가 클립보드에 저장되었습니다.");
  } catch (error) {
    console.error("클립보드에 텍스트를 저장하는 데 실패했습니다:", error);
  }
}
