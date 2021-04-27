<template>
  <h3 class="cms-typo text-18px text-buttonAndURL max-w-full truncate">
    <a @click.self.prevent="openModal" href="#">Hồ sơ của tôi</a>
  </h3>
</template>

<script>
import ModalProfileContent from '@/components/auth/ModalProfileContent.vue';

export default {
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 840, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalProfileContent, options, style, events);
    },
  },
};
</script>

<style lang="scss">

</style>
