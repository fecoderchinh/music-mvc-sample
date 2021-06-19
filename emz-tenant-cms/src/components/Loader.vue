<template>
  <div class="cms-loader" ref="cmsLoader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    this.parentHeightCalc()
  },
  created() {
    this.parentHeightCalc()
  },
  methods: {
    parentHeightCalc() {
      this.height = this.$refs.cmsLoader.parentElement.offsetHeight
      this.$refs.cmsLoader.style.height = this.height+"px"
    }
  }
}
</script>

<style lang="scss">
.cms-loader {
  @apply absolute w-full flex justify-center items-center z-50 select-none;
  &:before {
    content: '';
    @apply absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-50;
  }
  .spinner {
    @apply w-10 h-10 border-solid;
    border-width: 5px;
    border-color: rgba(255,255,255,.1);
    border-right-color: orange;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
      }
  }
}
</style>
