import {ADD_TODO,REMOVE_TODO,REMOVE_ALL_TODO,SELECT_ALL_FUN} from './mutation-types'
export default {
    addTodo ({commit}, todoList) {
        commit(ADD_TODO,{todoList})
    },
    delectItem({commit},index){
        commit(REMOVE_TODO,index)
    },
    clearAllSelect({commit}){
        commit(REMOVE_ALL_TODO)
    },
    selectAllFun({commit},newVal){
        commit(SELECT_ALL_FUN,newVal)
    }
}