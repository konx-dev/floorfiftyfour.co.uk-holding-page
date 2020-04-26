<template>
  <div class="">
    <hero></hero>
    <tile></tile>
    <tiles></tiles>
  </div>
</template>

<script>

import Hero from "../components/Hero.vue"
import Tiles from "../components/Tiles.vue"
import Tile from "../components/Tile.vue"

export default {
  name: "Home",
  components: {
    Hero,
    Tiles,
    Tile
  }
};
</script>