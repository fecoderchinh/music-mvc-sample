<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">
    <template slot="header">
      <div class="flex items-center">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Vô Ảnh Long
        </h3>
      </div>
    </template>

    <template slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <CustomerDetailModal class="no-b no-p"/>
          <CustomerLatestOrder class="no-b-l no-b-r no-b-b no-mb no-pb"/>
        </div>

      </div>

    </template>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-disabled">
          <template slot="name">
            Lưu
          </template>
        </Button>
      </li>
    </ul>
  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import CustomerDetailModal from '@/components/client/CustomerDetailModal.vue';
import CustomerLatestOrder from '@/components/client/CustomerLatestOrder.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    CustomerDetailModal,
    CustomerLatestOrder,
    Button,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Việt Nam' },
        { name: 'Lào' },
        { name: 'Campuchia' },
      ],
      optionDataSelect2: [
        { name: 'Chọn tỉnh thành' },
      ],
      optionDataSelect3: [
        { name: 'Chọn quận huyện' },
      ],
      optionDataSelect4: [
        { name: 'Chọn phường xã' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
