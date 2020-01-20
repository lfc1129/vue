const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const INIT = 'INIT'
const TIMER = 'TIMER'

export default{
    //点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
    },
    //记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id);
		
	},
	//初始化
	[INIT](state) {
		state.allTime=0;
		state.answerid=[];
		state.itemNum=1;
	},
	//时间
	[TIMER](state) {
		state.timer=setInterval(()=>
		  state.allTime++
		,1000)
	},
}