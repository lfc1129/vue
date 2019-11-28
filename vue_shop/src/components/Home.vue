<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <!-- <img src="../assets/heima.png" alt=""> -->
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
 <!-- 页面主体区域 -->
    <el-container>
       <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
         <div class="toggle-button" @click="toggleCollapse">|||</div>
         <!-- 侧边栏菜单区域 -->
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#333744"
          router :default-active="activePath"
          unique-opened :collapse="isCollapse" :collapse-transition="false"
          text-color="#fff">
       <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="'/'+subItem.path+''" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/'+subItem.path)"> <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subItem.authName}}</span>
              </template></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menulist: [],
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse: false,
       activePath: ''
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 获取所有的菜单
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      // console.log(res);
    },
     // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(activePath){
      window.sessionStorage.setItem("activePath",activePath)
      this.activePath=activePath;
    }
  },
  created() {
     this.getMenuList();
     window.sessionStorage.getItem("activePath")
  }
};
</script>


<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  padding: 0;
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    > span {
      margin-left: 20px;
      font-weight: bold;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border: 0;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin: 10px;
}

.toggle-btn {
  line-height: 30px;
  color: #fff;
  background-color: #4a5064;
  text-align: center;
  cursor: pointer;
}

.avator {
  border-radius: 50%;
}
.toggle-button{
      line-height: 30px;
    color: #fff;
    background-color: #4a5064;
    text-align: center;
    cursor: pointer;
}
</style>

