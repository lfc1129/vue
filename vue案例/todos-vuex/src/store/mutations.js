import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO, SELECT_ALL_FUN } from './mutation-types'

export default {
  [ADD_TODO](state, { todoList }) {
    state.list.unshift(todoList)
  },
  [REMOVE_TODO](state, index) {
    state.list.splice(index, 1)
  },
  [REMOVE_ALL_TODO](state) {
    state.list = state.list.filter(todo => !todo.complete)
  },
  [SELECT_ALL_FUN](state, newVal) {
    state.list.forEach(item => {
      item.complete = newVal;
    });
  }
}