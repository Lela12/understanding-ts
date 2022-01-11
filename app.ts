function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" //두개의 string을 특정 type만 허용
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number" //리터럴 타입기반으로 유니언을 작성하는 것이므로 오타 x
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  const combinedAges = combine(30, 26, "as-number");
  console.log(combinedAges);

  const combinedStringAges = combine("30", "26", "as-number");

  const combinedNames = combine("Max", "Anna", "as-text");
}
