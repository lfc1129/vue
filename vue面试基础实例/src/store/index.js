import Vue from 'vue'
import Vuex from 'vuex'
import storageUtil from "@/util/storageUtil"
import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO, SELECT_ALL_FUN } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:storageUtil.readTodos(),
    num:null,
  },
  mutations: {
    [ADD_TODO](state,{todoList}){
      state.list.unshift(todoList);
      console.log(todoList)
    },
    [REMOVE_TODO](state,index){
      state.list.splice(index,1)
    },
    [REMOVE_ALL_TODO](state){
      state.list = state.list.filter(item => {
        return !item.complete;
      });
    },
    [SELECT_ALL_FUN](state,val){
      state.list.forEach(item => {
          item.complete = val;
      });
    }
  },
  actions: {
    addTodo ({ commit },todoList) {
      commit(ADD_TODO,{todoList})
    },
    delect({commit},index){
      commit(REMOVE_TODO,index)
    },
    clearAllCheck({commit}){
      commit(REMOVE_ALL_TODO)
    },
    changeCheck({commit},val){
      commit(SELECT_ALL_FUN,val)
    }
  },
  getters: {
    ListLength: state => {
      return state.list.length
    },
    num:state=>{
      return state.list.reduce(
        (pre, item) => pre + (item.complete == true ? 1 : 0),
        0
      );
    }
  },
  modules: {
  }
})
