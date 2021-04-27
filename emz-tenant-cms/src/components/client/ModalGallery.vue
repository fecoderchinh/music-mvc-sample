<template>
  <a href="#" @click.self.prevent="openModal">Thư viện ảnh đại diện</a>
</template>

<script>
import ModalGalleryContent from '@/components/client/ModalGalleryContent.vue';

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

      this.$modal.show(ModalGalleryContent, options, style, events);
    },
  },
};
</script>
