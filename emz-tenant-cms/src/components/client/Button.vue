<template>
  <!-- eslint-disable max-len -->
  <div class="cms-button-wrapper">
    <template v-if="link !== undefined">
      <template v-if="link && link !== '#'">
        <a :href="link" :class="'text-center inline-block '+buttonClass">
          <slot name="name">default name</slot>
        </a>
      </template>
      <template v-else>
        <a @click.self.prevent="$emit('click')" :class="'text-center inline-block '+buttonClass">
          <slot name="name">default name</slot>
        </a>
      </template>
    </template>
    <template v-else>
      <button @click="$emit('click')" :class="buttonClass">
        <slot name="name">default name</slot>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    buttonClass: {
      type: String,
      default: 'cms-button',
    },
  },
};
</script>

<style lang="scss">
  .cms {
    &-button {
      @apply text-14px font-lato font-medium py-2 px-4 rounded-sm;
      &-rounded {
        @apply rounded-full;
      }
      &-wrapper {
        display: inherit;
      }
      &-white {
        @apply bg-white border text-menuItem;
      }
      &-blue {
        @apply bg-buttonAndURL text-white;
      }
      &-gray {
        @apply bg-cmsGray;
      }
      &-orange {
        @apply bg-cmsOrange text-white;
      }
      &-green {
        @apply bg-cmsLightGreen border-cmsLightGreen text-white;
        &.outline {
          @apply bg-white border-cmsLightGreen border text-labelAndTitle;
        }
      }
      &-disabled {
        @apply bg-cmsGray text-white cursor-not-allowed;
      }
      &-lg {
        @apply font-normal px-5;
        @media (min-width: 1025px) {
          @apply text-lg;
        }
        @media (max-width: 1024px) {
          @apply text-base;
        }
      }
    }
  }
</style>
