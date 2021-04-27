<template>
  <Button @click="openModal" button-class="w-full cms-button cms-button-blue">
    <template slot="name">
      Chọn menu
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';
import ModalMenuPickerContent from '@/components/client/ModalMenuPickerContent.vue';

export default {
  components: {
    Button,
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

      this.$modal.show(ModalMenuPickerContent, options, style, events);
    },
  },
};
</script>
