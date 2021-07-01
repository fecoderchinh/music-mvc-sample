<template>
  <Button @click="openModal" :button-class="buttonClass">
    <template slot="name">
      Chọn menu
    </template>
  </Button>
</template>

<script>
import Button from '@/components/client/Button.vue';
import ModalMenuPickerCollapse from '@/components/client/ModalMenuPickerCollapse';

export default {
  components: {
    Button,
  },
  props: {
    buttonClass: {
      type: String,
      default: 'w-full cms-button cms-button-blue'
    }
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalMenuPickerCollapse, options, style, events);
    },
  },
};
</script>
