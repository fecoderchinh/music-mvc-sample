<template>
  <!-- eslint-disable max-len -->
  <div class="w-full text-center">
    <input id="pricing-radio-1" class="radio-inline__input" type="radio" name="pricing-radio" value="pricing-radio-1"/>
    <label class="radio-inline__label first-child" for="pricing-radio-1">
      12 tháng - Khuyến mãi
    </label>
    <input id="pricing-radio-2" class="radio-inline__input" type="radio" name="pricing-radio" value="pricing-radio-2" checked/>
    <label class="radio-inline__label" for="pricing-radio-2">
      24 tháng - Giảm sâu
    </label>
    <input id="pricing-radio-3" class="radio-inline__input" type="radio" name="pricing-radio" value="pricing-radio-3"/>
    <label class="radio-inline__label last-child" for="pricing-radio-3">
      36 tháng - Giảm rất sâu
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.radio {
  &-inline {
    &__input {
      @apply hidden;
      &:checked {
        + label {
          @apply bg-buttonAndURL text-white;
        }
      }
    }
    &__label {
      @apply text-14px text-menuItem border-t border-b border-buttonAndURL px-5 py-5px select-none;
      & {
        &.first-child {
          @apply border-l rounded-l-full;
        }
        &.last-child {
          @apply border-r rounded-r-full;
        }
      }
    }
  }
}
</style>
