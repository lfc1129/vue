<template>
  <div>
    <div>
      {{treeDate.label}}
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      treeDate:{
       type:Object,
       required:true,
      }
    }
  };
</script>

<style>

</style>