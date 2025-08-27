// interface Person {
//   name: string
// }

// // 继承
// interface Employee extends Person {
//   job: string
// }

// // 类型申明
// type PersonType = {
//   name: string
// }

// type EmployeeType = PersonType & {
//   job: string
// }

// interface Animal {
//   name: string;
// }

// interface Animal {
//   age: number
// }
// const dog: Animal = {
//   name: '奶龙',
//   age: 22
// }

// type AnimalType = {
//   name: string
// }

// type AnimalType = {
//   age: number
// }

// type ID = string | number     // 联合类型 ID
// type Ponit = [number, number, string]   // 元组

// interface ID2=string|number

interface AddFn {
  (a: number, b: number): number
}
type AddType = (a: number, b: number) => number

// 类型别名
type NumberOther = number

let a: NumberOther = 222