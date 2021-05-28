<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thanh toán chuyển khoản
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Tên phương thức thanh toán</label>
          </div>
          <div class="w-full">
            <InputType
                id="modal-payment-1"
                name="modal-payment-1"
                placeholder="Thanh toán chuyển khoản"
                input-class="cms-input__default"/>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Hướng dẫn thanh toán</label>
          </div>
          <div class="w-full">
            <InputType
                id="modal-payment-2"
                name="modal-payment-2"
                placeholder="VD: Vietcombank - Số tài khoản 302131315615545.  Ghi chú khi ck là mã đơn hàng"
                input-class="cms-input__default"/>
          </div>
        </div>

      </div>

    </div>

    <template slot="footer">

      <div class="md:flex">

        <ul class="md:text-right sm:mt-5 list-none flex-1 items-center">
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
      </div>

    </template>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import Button from '@/components/client/Button.vue';
import InputType from '@/components/client/InputType.vue';

export default {
  components: {
    Modal,
    Button,
    InputType,
  },
};
</script>

<style lang="scss"></style>
