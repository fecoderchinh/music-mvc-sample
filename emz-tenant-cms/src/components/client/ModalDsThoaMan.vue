<template>
  <a href="#" class="text-standardCMS text-buttonAndURL" @click.self.prevent="openModal">Xem danh sách sản phẩm thỏa mãn</a>
</template>

<script>
import ModalDsThoaManContent from "@/components/client/ModalDsThoaManContent";

export default {
  name: "ModalDsThoaMan",
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

      this.$modal.show(ModalDsThoaManContent, options, style, events);
    },
  },
}
</script>

<style scoped>

</style>
