<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">card header</slot>
    </div>
    <div class="card-body">
      <slot name="body">card body</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .card {
    @apply bg-white border;
    &-header {
      @apply px-5 py-3 bg-sidebarHover border-b;
    }
    &-body {
      @apply p-5;
    }
  }
</style>
