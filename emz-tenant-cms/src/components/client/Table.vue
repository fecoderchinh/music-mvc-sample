<template>
  <!-- eslint-disable max-len -->
  <div class="box-table">
    <div class="overflow-hidden">
      <div class="overflow-x-auto cms-scrollbar">
        <table>
          <slot name="header"></slot>
          <slot name="body"></slot>
          <slot name="footer"></slot>
        </table>
      </div>
    </div>
    <slot name="outside"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .box-table {
    table {
      @apply mx-auto;
    }
    &-header {
      th {
        @apply cms-typo text-14px text-menuItem;
      }
    }
    &-body {
      @apply relative;
      th {
        @apply cms-typo text-13px text-menuItem;
      }
    }
    &-header, &-body, &-footer {
      @apply flex flex-col;
      &.block {
        @apply block #{!important};
      }
    }
  }
</style>
