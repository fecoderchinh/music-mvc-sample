<template>
  <Button @click="openModal" button-class="cms-button cms-button-white ml-5 group">
    <template slot="name">
      <EllipseSVG class="w-4 h-4 fill-menuIcon group-hover:fill-buttonAndURL transform rotate-180"/>
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';

import ModalFilterForm from '@/components/client/ModalFilterForm.vue';

import {
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Button,
    EllipseSVG,
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

<style lang="scss"></style>
