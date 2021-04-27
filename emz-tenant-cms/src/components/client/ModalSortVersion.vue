<template>
  <!-- eslint-disable max-len -->
  <a class="cms-typo text-14px text-buttonAndURL" href="#" @click.self.prevent="openModal">Sắp xếp phiên bản</a>
</template>

<script>
import ModalSortVersionContent from '@/components/client/ModalSortVersionContent.vue';

export default {
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

      this.$modal.show(ModalSortVersionContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
