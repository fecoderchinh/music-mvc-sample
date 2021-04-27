<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" :showFooter="false">
    <template slot="header">
      <div class="flex items-center mx-auto">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Tạo khuyến mãi
        </h3>
      </div>
    </template>

    <template slot="body">
      <PromotionListModal/>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import PromotionListModal from '@/components/client/PromotionListModal.vue';

export default {
  components: {
    Modal,
    PromotionListModal,
  },
};
</script>

<style lang="scss"></style>
