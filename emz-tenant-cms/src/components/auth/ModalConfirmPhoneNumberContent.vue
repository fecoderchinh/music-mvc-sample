<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Xác nhận đổi số điện thoại
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <p class="cms-typo text-15px text-menuItem">Số điện thoại được dùng làm tài khoản đăng nhập và lấy lại tài khoản khi bạn bị hack hoặc bạn quên mật khẩu.
          </p>
          <p class="mt-10px cms-typo text-15px text-menuItem">Bạn đổi số điện thoại là đổi luôn những thông tin này!
          </p>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Nhập mã xác nhận đã được gửi đến số 0983453005
            </label>
          </div>
          <div class="w-full">
            <InputType
              placeholder="Nhập mã xác nhận"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

      </div>

    </div>

    <ul class="text-center sm:mt-5 list-none flex-1 items-center" slot="footer">
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
import InputType from '@/components/client/InputType.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    InputType,
    Button,
  },
};
</script>

<style lang="scss"></style>
