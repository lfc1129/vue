import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {ADD_TODO,REMOVE_TODO} from "./mutation-types"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
    type:'All',
  },
  mutations: {
    initList(state,list){
      state.info=list
    },
    addListValue(state,val){
      state.info.unshift(val)
    },
    removeItem(state,index){
      state.info.splice(index,1)
    },
    allSelect(state,newVal){
      if(newVal){
        state.info.map(item=>{
          item.bool=true
        })
      }else{
        state.info.map(item=>{
          item.bool=false
        })
      }
    },
    tab(state,typeName){
      state.type=typeName
    },
    clearAllList(state){
      state.info=state.info.filter(item=>
        item.bool==false
      )
    }
  },
  actions: {
    getList(context){
      axios
      .get('./list.json')
      .then(
        ({data})=>{
          context.commit('initList',data)
        }
      )
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
    },
    // addList({commit},val){
    //   commit("addListValue",val)
    // }
  },
  getters: {
    tabList:(state)=>{
      if(state.type=='All'){
       return state.info;
      }else if(state.type=='Active'){
        return state.info.filter(todo => todo.bool==true)
      }else if(state.type=='Completed'){
        return state.info.filter(todo => todo.bool==false)
      }
      return state.info;
    },
    count:(state)=>{
      return state.info.filter(item=>
        item.bool==false
      ).length
    },
    activeTab:(state) => {
      return state.info.filter(todo => todo.bool==true);
    },
    completedTab: (state) => {
      return state.info.filter(todo => todo.bool==false);
    },
  },
  modules: {
  }
})
