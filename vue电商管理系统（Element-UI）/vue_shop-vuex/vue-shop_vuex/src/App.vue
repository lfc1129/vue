<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          :value="inputValue"
          @change="changeValue($event)"
        />
        <a-button type="primary" class="primary" @click="add()">添加</a-button>
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="selectAllBtn" @click="allSelectFun()"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li v-for="site in tabList" :key="site.id">
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
                :checked="site.bool"
                @click="changeCheck($event,site.id)"
              />
              <label>{{ site.skill }}</label>
              <button class="destroy" @click="delect(site.id)"></button>
            </div>
            <input class="edit" value="Rule the web" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{count}}</strong> item left
        </span>
        <ul class="filters">
          <li>
            <a href="#/" :class="{'selected':type=='All'}" @click="typeFun('All')">All</a>
          </li>
          <li>
            <a href="#/active" :class="{'selected':type=='Active'}" @click="typeFun('Active')">Active</a>
          </li>
          <li>
            <a href="#/completed" :class="{'selected':type=='Completed'}" @click="typeFun('Completed')">Completed</a>
          </li>
        </ul>
        <button class="clear-completed" @click="clear()">Clear completed</button>
      </footer>
    </section>
  </div>
</template>

<script>
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import { mapState, mapGetters } from "vuex";
export default {
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getList");
    },
    changeValue(e) {
      this.$store.commit("changeVal", e.target.value);
    },
    add() {
      if (this.inputValue) {
        this.$store.dispatch("addList");
      }
    },
    delect(id) {
      this.$store.commit("removeList", id);
    },
    changeCheck(e, id) {
      this.$store.commit("checkedState", {
        id: id,
        checkedState: e.target.checked
      });
	},
	clear(){
		 this.$store.commit("clearcompleted");
	},
	typeFun(typeName) {
		 this.$store.commit("tab",typeName);
	},
	allSelectFun(val){
      this.$store.commit("allSelect",val);
	}
  },
  computed: {
    ...mapState(["inputValue","type","checked"]),
  ...mapGetters(["count",'tabList',"activeTab"]),
  selectAllBtn: {
      get: function() {
        return this.activeTab.length === this.tabList.length;
      },
      set: function(newVal) {
        this.allSelectFun(newVal);
      }
    }
  }
};
</script>

<style>
.header {
  position: relative;
}
.primary {
  position: absolute !important;
  right: 0;
  top: 0;
  height: 65px !important;
}
.footer {
  height: 50px;
}
</style>
