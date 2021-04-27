<template>
  <!-- eslint-disable max-len -->
  <a href="#" @click.self.prevent="openModal" class="font-lato font-medium text-14px text-buttonAndURL xl:text-right block">Xem tags</a>
</template>

<script>
import ModalEditTagContent from '@/components/client/ModalEditTagContent.vue';

export default {
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal modal-md',
      };
      const style = {
        width: 500, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalEditTagContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
