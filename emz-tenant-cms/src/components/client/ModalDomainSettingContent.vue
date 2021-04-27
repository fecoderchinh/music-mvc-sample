<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Cài đặt Tên miền riêng
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Tên miền</label>
          </div>
          <div class="w-full">
            <InputType
              id="add-product-name-combo"
              name="add-product-name-combo"
              placeholder="Ví dụ : Giaydep.vn"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
          <div class="w-full mt-2">
            <a href="#" class="cms-typo text-14px text-buttonAndURL">Hướng dẫn cấu hình tên miền</a>
          </div>
        </div>

      </div>

    </div>

    <template slot="footer">

      <div class="md:flex">

        <ul class="md:text-right list-none flex-1 items-center">
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
