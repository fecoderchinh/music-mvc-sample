<template>
  <!--            <FilterSVG class="w-8 sm:w-6 fill-current hover:fill-buttonAndURL"/>-->
  <div class="cms-checkbox mr-3 mt-px">
    <label class="text-standardCMS text-menuItem text-14px">
      <span class="square checked"><span class="square-inner"></span></span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "ActionCheckbox"
}
</script>

<style scoped>

</style>
