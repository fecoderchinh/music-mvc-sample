<template>
  <!-- eslint-disable max-len -->
  <ul class="cms-table-actions flex flex-wrap items-center list-none select-none" @click.stop>
    <li class="inline-flex mr-5 my-1" :class="firstItemCss">
      <a href="#" class="inline-flex items-center text-13px text-menuItem border px-1 py-px rounded" @click.prevent="$emit('closeAction')">
        <div class="cms-checkbox mr-3 mt-px">
          <input type="checkbox">
          <label class="text-standardCMS text-menuItem text-14px">
            <span class="square checked" :class="!isFull ? 'minus' : null"><span class="square-inner"></span></span>
            <slot name="text"></slot>
          </label>
        </div>
        <slot name="content">default content</slot>
      </a>
    </li>
    <li
      v-for="(data, index) in optionData"
      :key="index"
      :class="[
          'inline-flex my-1',
          index + 1 !== optionData.length ? 'mr-5' : null,
          data.reduceAttention ? 'opacity-25' : null
           ]">
      <h3 @click="openModal(data.modal, data.width)">{{ data.label }}</h3>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    optionData: Array,
    isFull: Boolean,
    firstItemCss: {
      type: String,
      default: 'ml-2'
    }
  },
  methods: {
    openModal(data, w) {
      if (!data) return;
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: !w ? 720 : w, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(data, options, style, events);
    },
  },
};
</script>

<style lang="scss">
  .cms-table {
    &-actions {
      li {
        @apply cms-typo text-14px text-buttonAndURL cursor-pointer;
      }
    }
  }
</style>
