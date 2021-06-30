<template>
  <!-- eslint-disable max-len -->
  <div class="cms-checkbox" :class="mainClass">
    <label class="text-standardCMS text-menuItem text-14px" :class="labelClass">
      <input type="checkbox" :value="val" v-model="checked" @change="onChange" />
      <span class="square"><span class="square-inner"></span></span>
      <slot name="text"></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'val', 'labelClass', 'mainClass'],
  data () {
    return {
      checkedProxy: false
    }
  },
  computed: {
    checked: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onChange: function(e) {
      this.$emit('input', this.checkedProxy)
    },
  }
};
</script>

<style lang="scss">
.cms-checkbox {
  @apply select-none;
  @apply rounded-none;
  input[type="checkbox"] {
    @apply hidden;
    &+ label {
      > span {
        // @apply transition duration-200;
        &.checked {
          @apply bg-buttonAndURL border-buttonAndURL;
          & > span {
            @apply block border transform rotate-45;
            border-width: 0 2px 2px 0;
          }
        }
        &.minus {
          > span {
            @apply transform rotate-90;
            left: 5px;
            width: .1rem;
            border-width: 0;
            background: #fff;
          }
        }
      }
    }
    &+ span.square {
      // @apply transition duration-200;
      &.checked {
        @apply bg-buttonAndURL border-buttonAndURL;
        & > span {
          @apply block border transform rotate-45;
          border-width: 0 2px 2px 0;
        }
      }
      &.minus {
        > span {
          @apply transform rotate-90;
          left: 5px;
          width: .1rem;
          border-width: 0;
          background: #fff;
        }
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
      &+ span {
        @apply bg-buttonAndURL border-buttonAndURL;
        & > span {
          @apply block border transform rotate-45;
          border-width: 0 2px 2px 0;
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
