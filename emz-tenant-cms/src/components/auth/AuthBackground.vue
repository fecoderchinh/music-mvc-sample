<template>
  <!-- eslint-disable max-len -->
  <div class="w-full px-5">
    <div class="bg-white bg-cover w-full h-515px bg-center p-30px rounded-lg relative"
      :style="{ backgroundImage: this.imgPath }">
      <div class="absolute bottom-50px left-50 transform -translate-x-1/2 w-full text-center">
        <h3 class="cms-typo text-white text-6">
          You are best!
        </h3>
        <p class="cms-typo text-white text-lg">Simple  .  Fast   .  Amazing</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* eslint-disable global-require */
    imgPath: {
      type: String,
      default: `url(${require('@/assets/bond.png')})`,
    },
  },
};
</script>

<style lang="scss"></style>
