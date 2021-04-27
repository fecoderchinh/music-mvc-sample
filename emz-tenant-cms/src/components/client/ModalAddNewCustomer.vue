<template>
  <!-- eslint-disable max-len -->
  <div class="w-full xl:text-right">
    <a href="#" @click.self.prevent="openModal" class="font-lato font-medium text-14px text-buttonAndURL mt-3 inline-block">Thêm mới khách hàng</a>
  </div>
</template>

<script>
import ModalAddNewCustomerContent from '@/components/client/ModalAddNewCustomerContent.vue';

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

      this.$modal.show(ModalAddNewCustomerContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
