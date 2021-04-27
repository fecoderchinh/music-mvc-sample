<template>
  <!-- eslint-disable max-len -->
  <a href="#" @click.self.prevent="openModal" class="inline text-buttonAndURL">Đổi số điện thoại</a>
</template>

<script>
import ModalChangePhoneNumberContent from '@/components/auth/ModalChangePhoneNumberContent.vue';

export default {
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 440, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalChangePhoneNumberContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
