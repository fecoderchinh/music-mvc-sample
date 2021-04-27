<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thay đổi tên miền EMZ
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
              input-type="text"
              id="login-input-webaddress"
              name="login-input-webaddress"
              main-class="mt-15px cms__label-inside no-label"
              input-class="pl-5 pr-40"
              button-class="absolute right-0 top-0 mr-5 mt-4 focus:outline-none hover:shadow-none focus:shadow-none no-effect"
              placeholder="Nhập tên miền emz mới">
              <template slot="button-text">
                <h3 class="cms-typo text-labelAndTitle text-lg">
                  <span class="text-placeholderStyle">Sumi.</span>emz.vn
                </h3>
              </template>
            </InputType>
          </div>
        </div>
        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Tên miền (Error)</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="login-input-webaddress"
              name="login-input-webaddress"
              main-class="mt-15px cms__label-inside no-label cms__validate fill-validate"
              input-class="pl-5 pr-40"
              button-class="absolute right-0 top-0 mr-5 mt-4 focus:outline-none hover:shadow-none focus:shadow-none no-effect"
              placeholder="Nhập tên miền emz mới">
              <template slot="button-text">
                <h3 class="cms-typo text-labelAndTitle text-lg">
                  <span class="text-placeholderStyle">Sumi.</span>emz.vn
                </h3>
              </template>
              <template slot="under-form">
                <p class="cms__validate-message">Đây là tên miền VIP, bạn có thể thanh toán sau chỉ 20k/tháng. Hoặc bạn có thể chọn tên miền khác từ 6 ký tự trở lên.</p>
              </template>
            </InputType>
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
