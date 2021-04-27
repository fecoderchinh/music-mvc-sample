<template>
  <!-- eslint-disable max-len -->
  <div>
    <a href="#" @click.self.prevent="openModal" class="font-lato font-medium text-14px text-buttonAndURL">Phí vận chuyển</a>
    <p class="font-lato font-medium text-13px text-menuItem">Chưa tính phí vận chuyển</p>
  </div>
</template>

<script>
import ModalAddTransportFeeContent from '@/components/client/ModalAddTransportFeeContent.vue';

export default {
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

      this.$modal.show(ModalAddTransportFeeContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
