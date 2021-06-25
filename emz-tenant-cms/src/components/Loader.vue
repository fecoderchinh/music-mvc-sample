<template>
  <div v-if="loading" class="cms-loader" ref="cmsLoader" :class="innerStage ? 'absolute' : 'fixed'">
    <Spinner class="w-10 h-10 border-4"/>
  </div>
</template>

<script>
import Spinner from "@/components/client/Spinner";
export default {
  name: "Loader",
  components: {Spinner},
  props: ["loading", "innerStage"],
  data() {
    return {
      height: 0,
      sidebarWidth: 0
    }
  },
  mounted() {
    this.sidebarWidth = document.getElementById("main-sidebar").offsetWidth
    this.parentHeightCalc()
  },
  created() {
    this.parentHeightCalc()
  },
  methods: {
    parentHeightCalc() {
      if(this.$refs.cmsLoader) {
        this.height = this.$refs.cmsLoader.parentElement.offsetHeight
        this.$refs.cmsLoader.style.height = this.height+"px"
        if(!this.innerStage) this.$refs.cmsLoader.style.paddingLeft = this.sidebarWidth+"px"
      }
    }
  }
}
</script>

<style lang="scss">
.cms-loader {
  //@apply absolute top-0 right-0 bottom-0 left-0 w-full flex justify-center items-center z-50 select-none;
  @apply top-0 right-0 bottom-0 left-0 w-full flex justify-center items-center z-20 select-none;
  &:before {
    content: '';
    @apply absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-50;
  }
}
</style>
