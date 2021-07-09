<template>
  <div class="cms__input-group">
    <slot name="group"></slot>
  </div>
</template>

<script>
export default {
  name: 'InputGroup',
};
</script>

<style lang="scss">
  .cms__input-group {
    > * {
      @apply flex flex-wrap items-center w-full;
      > .control, > input, > select, > button, > .cms-input {
        @apply block flex-auto;
        width: 1%;
        input {
          @apply rounded-none;
        }
        &:first-child {
          input {
            @apply rounded-l;
          }
        }
        &:last-child {
          input {
            @apply rounded-r;
          }
        }
      }
    }
    &.switcher {
      > * > * {
        @apply w-auto;
        input {
          @apply text-left;
        }
        label {
          @apply rounded-none text-center;
        }
        &:first-child {
          label {
            @apply rounded-l;
          }
        }
        &:last-child {
          label {
            @apply rounded-r;
          }
        }
      }
      .cms-radio {
        input {
          &:checked {
            + label {
              @apply border-buttonAndURL text-labelAndTitle;
            }
          }
        }
        label {
          @apply text-center justify-center h-full border text-placeholderStyle;
        }
        .circle {
          @apply hidden;
        }
      }
    }
  }
</style>
