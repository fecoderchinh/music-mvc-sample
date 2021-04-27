<template>
  <Button @click="openModal" button-class="cms-button cms-button-white">
    <template slot="name">
      Tạo Combo
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';
import ModalCreateComboProductContent from '@/components/client/ModalCreateComboProductContent.vue';

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

      this.$modal.show(ModalCreateComboProductContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
