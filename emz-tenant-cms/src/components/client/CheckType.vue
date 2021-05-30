<template>
  <!-- eslint-disable max-len -->
  <div class="cms-checkbox" :class="mainClass">
    <input 
      :id="id" 
      type="checkbox"
      :name="name"
      :value="value"
      @change="$emit('input', $event.target.value)"
      />
    <label :for="id" class="text-standardCMS text-menuItem text-14px" :class="labelClass">
    <span class="square"><span class="square-inner"></span></span>
    <slot name="text"></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    checked: Boolean,
    mainClass: {
      type: String,
      default: 'mr-2',
    },
    labelClass: String,
    value: {
      required: true
    },
  },
};
</script>

<style lang="scss">
  .cms-checkbox {
    @apply select-none;
    @apply rounded-none;
    input[type="checkbox"] {
      @apply hidden;
      &+ label {
        span {
          // @apply transition duration-200;
        }
      }
      &:checked {
        &+ label {
          > span {
            @apply bg-buttonAndURL border-buttonAndURL;
            & > span {
              @apply block border transform rotate-45;
              border-width: 0 2px 2px 0;
            }
          }
        }
      }
    }
    label {
      @apply flex items-center cursor-pointer;
      &.bg-cmsGreenNotify {
        .square {
          @apply border-cmsGreen;
        }
      }
      &.bg-cmsOrangeNotify {
        .square {
          @apply border-cmsOrange;
        }
      }
    }
    .square {
      @apply w-4 max-w-4 min-w-4 h-4 max-h-4 min-h-4 inline-block border-2 border-gray-500 relative;
      top: -1px;
      &-inner {
        @apply w-1 h-2 bg-transparent absolute hidden;
        top: 2px;
        left: 4px;
      }
    }
    &.rounded-checkbox {
      input[type="checkbox"] {
        &+ label {
          @apply select-none;
          .square {
            @apply rounded-full;
          }
        }
      }
      &.notify-checkbox {
        input[type="checkbox"] {
          &+ label {
            @apply py-1 px-3 rounded-full bg-cmsOrangeNotify;
            .square {
              @apply border-cmsOrange;
            }
          }
          &:checked {
            &+ label {
              @apply bg-cmsGreenNotify;
              > span {
                @apply bg-cmsGreen border-cmsGreen #{!important};
              }
            }
          }
        }
      }
      &.checkbox-red {
        input[type="checkbox"] {
          &:checked {
            &+ label {
              > span {
                @apply bg-cmsRed border-cmsRed #{!important};
              }
            }
          }
        }
      }
    }
    &.disabled {
      * {
        @apply text-menuItem select-none;
        .square {
          @apply bg-menuIcon border-menuIcon #{!important};
        }
      }
    }
  }

</style>
