<template>
  <div id="app">
   <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>




<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app{
  width:80%;
  margin:auto;
  overflow:hidden;

}

@media screen and (min-width: 1020px) {
  width:100%;
  margin:auto;
  overflow:hidden;
}


</style>