<template>
  <!-- eslint-disable max-len -->
  <div class="cms-select" :class="mainClass">
    <div class="cms-select__wrapper">
      <select
        class="cms-select__wrapper-item"
        :class="selectClass"
        :name="name"
        :value="value"
        @input="$emit('input',$event.target.value)"
        v-on:change="$emit('change', $event)"
        :id="selectId">
        <option>Chọn</option>
        <option
          :value="data.id" v-for="(data, index) in optionData"
          :key="index">{{ data.name }}</option>
      </select>
      <slot name="label"></slot>
      <div class="pointer-events-none absolute top-50 transform -translate-y-1/2 right-0 flex items-center pr-3 text-menuIcon">
        <AngleSVG class="h-3 w-3 inline"/>
      </div>
    </div>
    <slot name="under-form"></slot>
  </div>
</template>

<script>
import {
  AngleSVG,
} from '../SVGs.vue';

export default {
  components: {
    AngleSVG,
  },
  props: {
    name: String,
    mainClass: {
      type: String,
      default: 'w-full',
    },
    selectClass: {
      type: String,
      default: 'bg-white h-10 text-14px px-4 pr-8 rounded',
    },
    selectId: String,
    selectedId: String,
    optionData: {
      type: Array,
      default: () => [],
    },
    value: {
      required: true
    },
  },
};
</script>

<style lang="scss">
  .cms {
    &-select {
      @apply w-full text-gray-600;
      &__wrapper {
        @apply inline-block relative w-full;
        &-item {
          @apply cms-typo block appearance-none w-full border;
          &:focus {
            @apply outline-none shadow-outline;
          }
        }
      }
      &.cms {
        &__label-inside {
          @apply cms-typo relative;
          select {
            @apply pt-6 pb-5px pl-5 rounded-lg h-auto text-labelAndTitle #{!important};
          }
          label {
            @apply mt-0 ml-5 text-14px text-placeholderStyle select-none;
            @apply absolute top-0 mt-5px left-0;
            @apply transition-all duration-150 ease-in-out;
          }
        }
        &__validate {
          select {
            @apply border-cmsRed;
          }
          &.fill-validate {
            @apply bg-cmsRed rounded-lg;
            .cms {
              &__validate {
                &-message {
                  @apply text-white #{!important};
                }
              }
            }
          }
        }
      }
      .cms {
        &__validate {
          &-message {
            @apply cms-typo text-cmsRed text-14px ml-5 py-5px;
          }
        }
      }
    }
  }
</style>
