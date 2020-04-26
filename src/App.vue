<template>
  <div id="app">
    <global-header></global-header>
    <router-view />
    <global-footer></global-footer>
  </div>
</template>

<script>

import Header from './components/Globals/Header.vue'
import Footer from './components/Globals/Footer.vue'

export default {
  components: {
    'global-header': Header,
    'global-footer': Footer
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap');


</style>
