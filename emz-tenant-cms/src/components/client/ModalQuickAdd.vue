<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">
    <h3 class="cms-typo text-14px text-buttonAndURL max-w-full truncate"><a @click.self.prevent="openModal" href="#">Thêm nhanh sản phẩm hoặc dịch vụ</a></h3>
  </div>
</template>

<script>
import ModalQuickAddContent from '@/components/client/ModalQuickAddContent.vue';

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

      this.$modal.show(ModalQuickAddContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
