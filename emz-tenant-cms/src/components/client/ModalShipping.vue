<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Kết nối GIAO HÀNG NHANH
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Token giao hàng nhanh</label>
          </div>
          <div class="w-full">
            <InputType
              id="update-multi-price"
              name="update-multi-price"
              placeholder="Token giao hàng nhanh"
              input-class="cms-input__default"/>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Tài khoản lấy hàng</label>
          </div>
          <div class="w-full">
            <InputType
              id="update-multi-price"
              name="update-multi-price"
              placeholder="Tài khoản lấy hàng"
              input-class="cms-input__default"/>
          </div>
        </div>

      </div>

    </div>

    <template slot="footer">

      <div class="md:flex">
        <div class="p-0 flex-1 md:flex items-center">
          <h3 class="ml-2 cms-typo text-14px text-buttonAndURL"><a href="#">Hướng dẫn kết nối Giao hàng nhanh 2020</a></h3>
        </div>

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
