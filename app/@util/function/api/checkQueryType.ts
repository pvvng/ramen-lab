export default function checkQueryType(value: string | string[] | undefined) {
  const myParam: string = Array.isArray(value) ? value[0] || "" : value || "";

  return myParam;
}
