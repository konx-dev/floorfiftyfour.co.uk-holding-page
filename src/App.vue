<template>
  <div id="app">
    <router-view />
    <global-footer></global-footer>
  </div>
</template>

<script>

import Footer from './components/Globals/Footer.vue'

export default {
  components: {
    'global-footer': Footer
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.img--responsive {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>
