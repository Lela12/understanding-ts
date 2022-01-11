function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  //유형을 할당하고자 하는 값 뒤에 콜론 추가
  // if (typeof n1 === "number" && typeof n2 === "number") {
  //   throw new Error("Incorrect input!");
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const pringResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, pringResult, resultPhrase); //true로 설정되어 있으므로, console.log 없어도된다
