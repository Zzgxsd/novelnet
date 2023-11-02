<template>
  <div id="app">
    <Header v-show="$route.meta.tshow"></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
}
</script>

<style scoped>
  #app{
    min-width: 1024px;
    min-height: 600px;
    width: 100%;
    height: 100%;
  }
</style>
