
// zustand react 状态管理框架

import {
  create    // 创建一共store 存状态的地方
} from 'zustand'

// count  store  use 开头
export const useCountStore = create((set) => ({
  // 对象  状态  修改状态的方法
  count: 0,
  // reducer  函数  规定状态怎么改变
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

