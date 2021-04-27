<template>
  <!-- eslint-disable max-len -->
  <AuthBox>
    <template slot="content">

      <h3 class="text-8 text-labelAndTitle cms-typo text-center">Đăng nhập</h3>

      <p class="mt-5 cms-typo text-lg text-menuItem text-center">Bán hàng  . Tạo đơn  .  Thêm sản phẩm  . Làm đẹp website …</p>

      <InputType
        input-type="text"
        id="login-input-sdt"
        name="login-input-sdt"
        main-class="mt-30px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
        :value="valPhone">
        <label slot="label" for="login-input-sdt">
          Số điện thoại
        </label>
      </InputType>

      <InputType
        input-type="password"
        id="login-input-mk"
        name="login-input-mk"
        main-class="mt-30px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
        :value="valPassword">
        <label slot="label" for="login-input-mk">
          Mật khẩu
        </label>
      </InputType>

      <Button link="/auth/create" button-class="block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px">
        <template slot="name">
          Đăng nhập
        </template>
      </Button>

      <p class="text-lg cms-typo text-placeholderStyle mt-30px">Bạn quên mật khẩu? <a href="/auth/reset" class="text-buttonAndURL ml-15px">Lấy lại mật khẩu</a></p>

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
  data() {
    return {
      valPhone: '',
      valPassword: '',
    };
  },
};
</script>

<style lang="scss"></style>
