<template>
  <Button @click="openModal" button-class="cms-button cms-button-blue">
    <template slot="name">
      Xác nhận thanh toán
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';
import ModalConfirmOrderContent from '@/components/client/ModalConfirmOrderContent.vue';

export default {
  components: {
    Button,
  },
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

      this.$modal.show(ModalConfirmOrderContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
