/**
 * 自定义实现 Function.prototype.call 方法
 * @param {any} context - 函数执行时的上下文对象
 * @param {...any} args - 传递给函数的参数
 * @returns {any} 函数执行的结果
 */
Function.prototype.myCall = function (context, ...args) {
  // 在严格模式下，如果 context 为 null 或 undefined，则使用全局对象
  context = context || (typeof window !== 'undefined' ? window : global)
  const props = Symbol()
  context[props] = this
  const result = context[props](...args)
  delete context[props]
  return result
}

/**
 * 自定义实现 Function.prototype.apply 方法
 * @param {any} context - 函数执行时的上下文对象
 * @param {Array} argsArray - 传递给函数的参数数组
 * @returns {any} 函数执行的结果
 */
Function.prototype.myApply = function (context, argsArray) {
  // 在严格模式下，如果 context 为 null 或 undefined，则使用全局对象
  context = context || (typeof window !== 'undefined' ? window : global)
  const props = Symbol()
  context[props] = this

  // 确保 argsArray 是数组，如果不是则设为空数组
  const args = Array.isArray(argsArray) ? argsArray : []
  const result = context[props](...args)
  delete context[props]
  return result
}

/**
 * 自定义实现 Function.prototype.bind 方法
 * @param {any} context - 函数执行时的上下文对象
 * @param {...any} args - 预设的参数
 * @returns {Function} 绑定后的新函数
 */
Function.prototype.myBind = function (context, ...args) {
  // 在严格模式下，如果 context 为 null 或 undefined，则使用全局对象
  context = context || (typeof window !== 'undefined' ? window : global)

  const self = this

  /**
   * 绑定后的函数
   * @param {...any} innerArgs - 调用时传入的参数
   * @returns {any} 函数执行的结果
   */
  const bound = function (...innerArgs) {
    const finalArgs = [...args, ...innerArgs]
    const isNew = this instanceof bound

    if (isNew) {
      // 如果使用 new 调用，则忽略绑定的 context
      return new self(...finalArgs)
    } else {
      // 普通调用，使用绑定的 context
      return self.apply(context, finalArgs)
    }
  }

  // 设置原型链，确保 instanceof 检查正确工作
  if (self.prototype) {
    bound.prototype = Object.create(self.prototype)
  }

  return bound
}