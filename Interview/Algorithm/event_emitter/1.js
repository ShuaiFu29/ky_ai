class EventEmitter {
  constructor() {
    // 维护一个callbacks 订阅者
    this.events = {} // type  []

  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
  }
  // 手动触发 
  emitter(event, ...args) {
    if (!this.events[event]) return
    this.events[event].forEach(listener => {
      listener.apply(this, args)
    })
  }

  off(event, listener) {
    // removerEventListener type + callback 具体的定义者
    if (!this.events[event]) return
    this.events[event] = this.events[event].filter(l => l !== listener)
  }
  once() {

  }
}

const ws = new EventEmitter()
ws.on('offer', () => {
  console.log('万达走一波')
})
ws.on('byteoffer', () => {
  console.log('牛逼666')
})

ws.emitter('offer')

setTimeout(() => {
  ws.emitter('byteoffer')
}, 1000)