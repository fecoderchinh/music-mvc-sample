<template>
  <Button @click="openModal" button-class="cms-button cms-button-blue">
    <template slot="name">
      Thêm khuyến mãi
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';
import ModalPromoPickerContent from '@/components/client/ModalPromoPickerContent.vue';

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
        width: 700, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalPromoPickerContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
