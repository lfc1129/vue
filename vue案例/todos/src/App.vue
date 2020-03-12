<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @submitValue="submitValue"></Header>
      <List @delectItem="delectItem" :list="list"></List>
      <Footer :list="list" @clearAllSelect="clearAllSelect"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import List from "@/components/list.vue";
import Footer from "@/components/footer.vue";
import storageUtil from "@/util/storageUtil"

export default {
  name: "App",
  data() {
    return {
      // list: [{
      //     title: '学习vue',
      //     complete: true
      //   },{
      //     title: '学习react',
      //     complete: false
      //   },{
      //     title: '学习angular',
      //     complete: true
      //   }]
      list:storageUtil.readTodos()
    };
  },
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    submitValue(newList) {
      this.list.push(newList)
    
    },
    delectItem(index){
      this.list.splice(index,1);
    },
    clearAllSelect(){
         this.list = this.list.filter((item)=>{
          return !item.complete
      })
    }
  },
  watch:{
      list: {
        handler(val) {
         storageUtil.saveTodos(val)
        },
        deep: true //深度监视
      }

  }
};
</script>

<style>
</style>
