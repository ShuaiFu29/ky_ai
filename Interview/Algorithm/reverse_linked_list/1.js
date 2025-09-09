
// function reverseList(head) {
//   let pre = null
//   let cur = head
//   // 空 跳出
//   while (cur) {
//     const next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// }

function reverseListRecursive(head) {
  // 递归结束条件
  if (!head || !head.next) return head
  // 递归调用 交给下一个
  // 回溯？
  const newHead = reverseListRecursive(head.next)
  head.next.next = head
  head.next = null
  return newHead
}