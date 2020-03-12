<template>
   <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputValue" @keyup.enter="submit"/>
      </div>
</template>

<script>
export default {
  data(){
    return{
      inputValue:''
    }
  },
  methods:{
    submit(){
      let inputValue=this.inputValue.trim();
      if(inputValue){
         this.$emit("submitValue",{
          title: inputValue,
          complete: false
        })
      }else{
        alert("请输入内容")
      }
      this.inputValue=''
     
    }
  }
}
</script>

<style>

</style>