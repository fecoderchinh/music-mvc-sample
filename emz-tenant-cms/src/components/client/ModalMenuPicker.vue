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
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openModal() {
      this.$modal.hideAll()
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
        'before-open': this.beforeOpen,
        'before-close': this.beforeClose,
      };

      this.$modal.show(ModalMenuPickerCollapse, options, style, events);
    },
    beforeOpen () {
      // this.$modal.hide(this.$parent)
    },
    beforeClose () {
      // console.log('Closing...')
      // // What a gamble... 50% chance to cancel closing
      // if (Math.random() < 0.5) {
      //   event.cancel()
      // }
    }
  },
};
</script>
