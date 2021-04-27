<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <template slot="header">
      <div class="flex items-center">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Sửa thông tin khách hàng
        </h3>
      </div>
    </template>

    <template slot="body">
      <div class="grid grid-cols-2 gap-5">

        <div class="col-span-1 sm:col-span-2">
          <div class="col-span-1 sm:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modal-nhaptenkhachang" class="select-none cursor-pointer">Tên khách hàng</label>
            </div>
            <div class="w-full">
              <InputType
                input-type="text"
                id="modal-nhaptenkhachang"
                name="modal-nhaptenkhachang"
                placeholder="Nhập tên khách hàng"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="col-span-1 sm:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modal-nhapsdt" class="select-none cursor-pointer">Số điện thoại</label>
            </div>
            <div class="w-full">
              <InputType
                input-type="text"
                id="modal-nhapsdt"
                name="modal-nhapsdt"
                placeholder="Nhập số điện thoại khách hàng"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="col-span-1 sm:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modal-nhapemail" class="select-none cursor-pointer">Email</label>
            </div>
            <div class="w-full">
              <InputType
                input-type="text"
                id="modal-nhapemail"
                name="modal-nhapemail"
                placeholder="Nhập email khách hàng"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="col-span-1 sm:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modal-nhapghichu" class="select-none cursor-pointer">Ghi chú khách hàng</label>
            </div>
            <div class="w-full">
              <InputType
                input-type="text"
                id="modal-nhapghichu"
                name="modal-nhapghichu"
                placeholder="Thêm ghi chú về khách hàng này"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

      </div>
    </template>

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
