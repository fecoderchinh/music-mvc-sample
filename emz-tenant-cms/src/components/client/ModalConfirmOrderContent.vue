<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Xác nhận thanh toán
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <p class="cms-typo text-15px text-menuItem">Xác nhận khách hàng đã thanh toán số tiền 1,039,000₫ qua phương thức thanh toán Thanh toán khi giao hàng (COD) cho đơn hàng này.</p>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Chọn hình thức thanh toán</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
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
            Xác nhận
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    SelectOption,
    Button,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Chuyển khoản ngân hàng' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
