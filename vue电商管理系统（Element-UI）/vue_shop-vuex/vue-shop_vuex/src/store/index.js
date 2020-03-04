import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
    inputValue:'',
    nextId:4,
    type:'All',
    checked:false, //是否全选
  },
  mutations: {
    initList(state,list){
      state.info=list
    },
    changeVal(state,val){
      state.inputValue=val
    },
    increment (state,addItem) {
      state.nextId++;
      state.info.push(addItem)
      state.inputValue='';
    },
    removeList(state,id){
      var index = state.info.findIndex(function(item){
        //根据item中的id属性来判断这个item是否是上面id中
        //对应的数据，如果是返回一个true ,否返回false,继续下面的一条数据的遍历，以此类推
        return item.id ==id; //如果返回true，那么findIndex方法会将这个item对应的id返回到外面接受
        });
      state.info.splice(index,1);
    },
    checkedState(state,obj){
      var index = state.info.findIndex(function(item){
        //根据item中的id属性来判断这个item是否是上面id中
        //对应的数据，如果是返回一个true ,否返回false,继续下面的一条数据的遍历，以此类推
        return item.id ==obj.id; //如果返回true，那么findIndex方法会将这个item对应的id返回到外面接受
        });
        state.info[index].bool=obj.checkedState
    },
    clearcompleted(state){
      state.info= state.info.filter(todo => todo.bool==false)
    },
    tab(state,typeName){
      state.type=typeName
    },
    allSelect(state,allSelectState){
      if(allSelectState){
        state.info.forEach((item)=>{
          item.bool=true
        })
      }else{
        state.info.forEach((item)=>{
          item.bool=false
        })
      }

      
    }
  },
  actions: {
    getList(context){
      axios
      .get('./list.json')
      .then(
        ({data})=>{
          // console.log(data)
          context.commit('initList',data)
        }
      )
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
    },
    addList(context){
      context.commit('increment',{
				"id": this.state.nextId,
				"skill": this.state.inputValue,
				"bool": false
			})
    },
    
  },
  getters:{
    count: (state) => {
      return state.info.filter(todo => todo.bool==false).length;
    },
    activeTab:(state) => {
      return state.info.filter(todo => todo.bool==true);
    },
    completedTab: (state) => {
      return state.info.filter(todo => todo.bool==false);
    },
    tabList:(state)=>{
      if(state.type=='All'){
       return state.info;
      }else if(state.type=='Active'){
        return state.info.filter(todo => todo.bool==true)
      }else if(state.type=='Completed'){
        return state.info.filter(todo => todo.bool==false)
      }
      return state.info;
    }
  },
  modules: {
  }
})
