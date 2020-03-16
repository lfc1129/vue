export default {
    ListLength: state => {
        return state.list.length
    },
    finishNum: state => {
        return state.list.reduce(
            (preTotal, item) => preTotal + (item.complete ? 1 : 0),
            0
        );
    },
    isAllSelect:(state, getters)=>{
        return getters.ListLength===getters.finishNum
    }
}