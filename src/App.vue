<template>
  <div id="app">

    <div id="navbarArea">
      <Navbar/>
    </div>
    
    <div id="viewArea">
      <router-view/>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
@import "./assets/all";
</style>
