<template>
  <!-- eslint-disable max-len -->
  <div>
    <h3 @click.self.prevent="openModal" class="cursor-pointer font-lato font-medium text-14px text-buttonAndURL">Thêm khuyến mãi</h3>
  </div>
</template>

<script>
import ModalAddPromoContent from '@/components/client/ModalAddPromoContent.vue';

export default {
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal modal-md',
      };
      const style = {
        width: 400, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalAddPromoContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
