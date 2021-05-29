<template>
  <!-- eslint-disable max-len -->
  <div class="cms-radio" :class="mainClass">
    <input :id="id" type="radio" :name="name" :checked="checked ? 'checked' : ''" />
    <label
      :for="id"
      :class="[
        'cms-typo text-menuItem',
        labelClass
      ]"
      @click="$emit('change')">
    <span class="circle -mt-1"><span class="circle-inner"></span></span>
    <slot name="radio-text"></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    checked: Boolean,
    mainClass: String,
    labelClass: {
      tyle: String,
      default: 'text-14px',
    },
  },
};
</script>

<style lang="scss">
  .cms-radio {
    @apply flex items-center;
    input[type="radio"] {
      @apply hidden;
      + label {
        span {
          @apply transition duration-200;
          &:hover {
            > span {
              @apply bg-buttonAndURL;
            }
          }
        }
        &:hover {
          span > span {
            @apply bg-buttonAndURL;
          }
        }
      }
      &:checked {
        + label {
          span {
            @apply border-buttonAndURL;
            > span {
              @apply bg-buttonAndURL;
            }
          }
        }
      }
    }
    label {
      @apply cursor-pointer select-none;
      @screen md {
        @apply flex items-center;
      }
    }
    .circle {
      @apply w-4 h-4 inline-block mr-2 rounded-full border-2 border-gray-500 relative;
      @screen sm {
        @apply float-left mt-px;
      }
      &-inner {
        @apply w-2 h-2 bg-transparent rounded-full absolute;
        top: 2px;
        left: 2px;
      }
    }
  }
</style>
