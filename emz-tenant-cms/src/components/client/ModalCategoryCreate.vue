<template>
  <!-- eslint-disable max-len -->
  <Button @click="openModal" button-class="cms-button cms-button-blue">
    <template slot="name">
      Thêm danh mục
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';
import ModalCategoryCreateContent from '@/components/client/ModalCategoryCreateContent.vue';

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
        width: 1200, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalCategoryCreateContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
