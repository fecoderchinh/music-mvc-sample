<template>
  <!-- eslint-disable max-len -->
  <AuthBox>
    <template slot="content">

      <h3 class="text-8 text-labelAndTitle cms-typo text-center">Lấy lại mật khẩu</h3>

      <InputType
        input-type="text"
        id="create-input-sdt"
        name="create-input-sdt"
        main-class="mt-30px cms__label-inside"
        input-class="pl-5 pr-40"
        button-class="absolute right-0 top-50 transform h-full px-6 bg-cmsLightGreen text-white text-lg rounded-r-lg -translate-y-1/2 focus:outline-none hover:shadow-none focus:shadow-none">
        <label slot="label" for="create-input-sdt">
          Số điện thoại
        </label>
        <template slot="button-text">
          Gửi mã SMS
        </template>
      </InputType>

      <InputType
        input-type="text"
        id="create-input-maxacthuc"
        name="create-input-maxacthuc"
        main-class="mt-15px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
        <label slot="label" for="create-input-maxacthuc">
          Nhập mã xác thực được gửi qua tin nhắn SMS
        </label>
      </InputType>

      <Button link="/auth/new-password" button-class="block leading-50px cms-typo text-lg text-white h-50px bg-gray-400 hover:bg-gray-600 w-full rounded-lg mt-30px">
        <template slot="name">
          Xác thực
        </template>
      </Button>

      <p class="text-lg cms-typo text-placeholderStyle mt-30px"><a href="/auth/login" class="text-buttonAndURL">Quay lại đăng nhập</a></p>

    </template>
  </AuthBox>
</template>

<script>
import AuthBox from '@/components/auth/AuthBox.vue';
import InputType from '@/components/client/InputType.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    AuthBox,
    InputType,
    Button,
  },
};
</script>

<style lang="scss"></style>
