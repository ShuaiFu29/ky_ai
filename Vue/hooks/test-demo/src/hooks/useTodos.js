import {
  ref,
  computed //计算属性
} from 'vue';


export function useTodos() {
  let title = ref('');
  let todos = ref([
    {
      title: '学习vue',
      done: false
    }
  ])
  function addTodo() {
    useTodos.value.push({
      title: title.value,
      done: false,
    })
    title.value = '';
  }

  function clear() {
    todos.value = todos.value.filter(item => !item.done)
  }
  //  未完成的todos 的数量 
  let active = computed(() => {
    return todos.value.filter(item => !item.done).legth
  })
  let all = computed(() => {
    return todos.value.length
  })
  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (value) {
      todos.value.forEach(item => {
        item.done = value;
      })
    }
  })
  return {
    // done false 留下,已完成的清除 
    title,
    addTodo,
    clear,
    todos,
    active,
    all,
    allDone,
  }
}