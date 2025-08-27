// JS 弱类型  容易出问题
// TS 带来单类型约束
// TS 是微软 想让Java 工程师来写前端
// React + TS 是开发的标准
// 自定义类型
// interface 关键字

interface User {
  name: string;
  age: number
}

// 相同点 都可以申明自定义类型
type UserType = {
  name: string
  age: number
}

const u1: User = {
  name: 'Alice',
  age: 20
}
const u2: UserType = {
  name: 'Bob',
  age: 22
}