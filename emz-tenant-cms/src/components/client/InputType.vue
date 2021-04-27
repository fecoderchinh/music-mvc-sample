<template>
  <!-- eslint-disable max-len -->
  <div
    class="cms-input relative flex-auto"
    :class="mainClass">
      <input
        :type="inputType === '' ? 'text' : inputType"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        class="bg-white cms-typo focus:outline-none border rounded w-full"
        :class="[
          inputClass,
          (isTyped || (inputMsg && inputMsg.length > 0)) ? 'typed' : ''
        ]"
        v-on:click="$emit('click')"
        :required="isRequired"
        @focus="isTyped = true"
        @blur="checkChange($event.currentTarget)"
        @input="$emit('input',$event.target.value)"
        :value="value">
        <slot name="label"></slot>
      <button
        :type="button === '' ? 'button' : button"
        :class="buttonClass">
        <slot name="button-text"></slot>
      </button>
      <slot name="under-form"></slot>
  </div>
</template>

<script>
/* eslint-disable max-len */
export default {
  props: {
    mainClass: String,
    id: String,
    name: String,
    placeholder: String,
    inputClass: {
      type: String,
      default: 'h-10 px-3 text-14px text-menuItem',
    },
    button: String,
    inputType: String,
    buttonClass: String,
    isRequired: {
      type: Boolean,
      default: false,
    },
    value: String,
  },
  data() {
    return {
      isTyped: false,
      inputMsg: '',
    };
  },
  methods: {
    checkChange(event) {
      this.inputMsg = event;
      if (this.inputMsg && this.inputMsg.value.length > 0) this.isTyped = true;
      else this.isTyped = false;
      return this.isTyped;
    },
  },
  mounted() {
    if (this.$props.value && this.$props.value.length > 0) this.isTyped = true;
  },
};
</script>

<style lang="scss">
  .cms {
    &-input {
      &.cms {
        &__label-inside {
          @apply relative;
          &.no-label {
            input {
              @apply py-0 h-10 #{!important};
              + button {
                @apply mt-2;
              }
            }
          }
          input {
            @apply pt-6 pb-5px rounded-lg h-auto text-labelAndTitle #{!important};
            &:focus, &.typed {
              + label {
                @apply top-0 mt-5px translate-y-0 text-14px;
              }
            }
          }
          label {
            @apply mt-0 ml-5 text-lg text-placeholderStyle select-none;
            @apply absolute top-0 left-0 mt-4;
            @apply transition-all duration-150 ease-in-out;
          }
        }
        &__validate {
          input {
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
        &-input {
          &__default {
            @apply h-10 px-3 text-14px text-menuItem;
            &.pr-8rem {
              padding-right: 8rem #{!important}
            }
          }
          &__with-icon {
            @apply h-10 pl-3 pr-10 text-14px text-menuItem;
            &.reverse {
              @apply pr-3 pl-10;
            }
            &.inline {
              @apply pr-12;
            }
          }
          &__with-letter {
            @apply h-10 pl-3 pr-6 text-14px text-menuItem;
          }
          &__text-13px {
            @apply text-13px #{!important};
          }
          &__text-red {
            @apply text-cmsRed #{!important};
          }
          &__text-green {
            @apply text-cmsGreen #{!important};
          }
          &__text-orange {
            @apply text-Orange #{!important};
          }
        }
        &__validate {
          &-message {
            @apply cms-typo text-cmsRed text-14px ml-5 py-10px pr-5px;
          }
        }
      }
    }
  }
</style>
