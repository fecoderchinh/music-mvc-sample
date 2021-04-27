<template>
  <!-- eslint-disable max-len -->
  <div class="advance-search-box" :class="mainClass">
    <div class="advance-search-box-inner">
      <slot name="content">
        default content
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainClass: String,
  },
};
</script>

<style lang="scss">
  .advance-search {
    &-box {
      @apply absolute inset-x-0 top-100 bg-white border rounded shadow overflow-hidden z-30;
      &.navbar-search-box {
        @apply w-full;
        @screen md {
          width: 624px;
          max-width: 624px;
        }
      }
      &.widget-box {
        @screen sm {
          @apply relative;
        }
      }
      &-inner {
        @apply relative z-30;
        overflow-y: scroll;
        width: calc( 100% + 20px );
        @media (pointer:coarse) {
          @apply w-full;
        }
      }
    }
  }
</style>
