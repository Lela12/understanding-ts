// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian", //value의 type이 name에 저장될 것
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1]=10; //string이어야 하므로

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase());
  //   console.log(hobby.map()); //배열에서는 사용가능하지만 string에서는 map사용불가!!
}

if (person.role === Role.AUTHOR) {
  console.log("id author");
}
