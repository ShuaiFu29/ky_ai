// let that = this
let obj = {
  count: 0,
  inc: debounce(function (val) {
    console.log(this === obj)
    this.count += val
  }, 1000)
}
function debounce(fn, delay) {
  return function (args) {
    let that = this
    clearTimeout(fn.id)
    fn.id = setTimeout(() => {
      // this 丢失
      fn.call(that, args)
    }, delay)
  }
}
obj.inc(2)