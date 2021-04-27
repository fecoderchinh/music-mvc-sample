<template>
  <!-- eslint-disable max-len -->
  <a class="cms-typo text-14px text-buttonAndURL" href="#" @click.self.prevent="openModal">Sửa thuộc tính</a>
</template>

<script>
import ModalEditVersionContent from '@/components/client/ModalEditVersionContent.vue';

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

      this.$modal.show(ModalEditVersionContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
