<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <SquareSVG class="fill-menuIcon"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  SquareSVG,
} from '@/components/SVGs.vue';

export default {
  name: 'Home',
  components: {
    SquareSVG,
  },
};
</script>
