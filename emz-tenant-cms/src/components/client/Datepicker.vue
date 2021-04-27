<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">
    <date-picker v-model="time3" range placeholder="Chọn ngày" range-separator=" đến "></date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      time1: null,
      time2: null,
      time3: null,
    };
  },
};
</script>

<style lang="scss">
.mx {
  &-datepicker {
    @apply w-full min-w-250px h-10 cms-typo text-13px;
  }
  &-input {
    @apply shadow-none border outline-none text-menuItem;
    border-color: inherit;
    &, &-wrapper {
      @apply h-full;
    }
  }
}
</style>
