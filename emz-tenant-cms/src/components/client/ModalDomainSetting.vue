<template>
  <a href="#" class="inline text-buttonAndURL" @click.self.prevent="openModal">Cài đặt</a>
</template>

<script>
import ModalDomainSettingContent from '@/components/client/ModalDomainSettingContent.vue';

export default {
  name: 'ModalDomainChange',
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 600, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalDomainSettingContent, options, style, events);
    },
  },
};
</script>

<style scoped>

</style>
