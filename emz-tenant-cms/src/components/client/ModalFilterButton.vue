<template>
  <Button @click="openModal" button-class="cms-button filter-button cms-button-white ml-5 no-py group">
    <template slot="name">
      <FilterSVG class="w-6 fill-current"/>
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';

import ModalFilterForm from '@/components/client/ModalFilterForm.vue';

import {
  FilterSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Button,
    FilterSVG,
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalFilterForm, options, style, events);
    },
  },
};
</script>

<style lang="scss">
.cms-button {
  &.filter-button {
    padding: 0 .75rem !important;
  }
}
</style>
