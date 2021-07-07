<template>
  <ul class="cms-nested">
    <Nested v-bind:nested="nested"/>
  </ul>
</template>

<script>
import Nested from "@/components/client/Nested";
export default {
  name: "MenuNested",
  props: {
    nested: Object
  },
  components: {
    Nested
  }
}
</script>

<style scoped>

</style>
