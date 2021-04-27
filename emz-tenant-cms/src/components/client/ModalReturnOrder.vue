<template>
  <Button @click="openModal" button-class="cms-button cms-button-white">
    <template slot="name">
      Đơn bị hoàn
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';
import ModalReturnOrderContent from '@/components/client/ModalReturnOrderContent.vue';

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
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalReturnOrderContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
