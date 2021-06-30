<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm 6 sản phẩm vào danh mục
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="w-full">
            <Select2 :optionData="myOptions" placeholder="Tìm kiếm danh mục"/>
          </div>
        </div>

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-blue">
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
import Button from '@/components/client/Button.vue';
import Select2 from '@/components/client/Select2.vue';

export default {
  components: {
    Modal,
    Button,
    Select2
  },
  data() {
    return {
      myOptions: [
        'Sản phẩm mới',
        'Trang chủ',
        'Sản phẩm khuyến mãi',
        'Sản phẩm nỗi bật',
      ],
    };
  },
};
</script>

<style lang="scss"></style>
