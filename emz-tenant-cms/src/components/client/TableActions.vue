<template>
  <!-- eslint-disable max-len -->
  <ul class="cms-table-actions list-none flex items-center select-none" @click.stop>
    <li class="inline mr-5">
      <a href="#" class="inline-flex items-center text-13px text-menuItem border px-1 py-px rounded" @click="$emit('closeAction')">
        <MinusSVG class="w-15px sm:w-6 fill-buttonAndURL inline mr-3"/>
        <slot name="content">default content</slot>
      </a>
    </li>
    <li
      v-for="(data, index) in optionData"
      :key="index"
      :class="[ 'inline', index + 1 !== optionData.length ? 'mr-5' : null ]">
      <h3 @click="openModal(data.modal, data.width)">{{ data.label }}</h3>
    </li>
  </ul>
</template>

<script>
import {
  MinusSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    MinusSVG,
  },
  props: {
    optionData: Array,
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
