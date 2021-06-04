<template>
  <!-- eslint-disable max-len -->
  <Radio class="theme-color__picker" :id="'theme-color__picker-'+id" :name="name" :label-class="pickClass" :checked="checked">
    <template slot="radio-text">
      <span class="color" :class="color"></span>
      <slot name="color"></slot>
    </template>
  </Radio>
</template>

<script>
import Radio from '~/components/common/Radio.vue';

export default {
  components: {
    Radio,
  },
  props: {
    id: Number,
    name: String,
    pickClass: String,
    color: {
      type: String,
      default: 'bg-cmsGray',
    },
    checked: Boolean,
  },
};
</script>

<style lang="scss">
  .theme-color {
    &__picker {
      @apply px-3 py-1 bg-gray-300 rounded-full;
      display: inherit;
      label {
        @apply flex items-center;
      }
      .circle {
        @apply hidden;
      }
      .color {
        @apply w-4 min-w-4 h-4 min-h-4 inline-flex rounded-full mr-2;
      }
      &.active {
        background: rgba(0, 189, 166, 0.2);
      }
    }
  }
</style>
