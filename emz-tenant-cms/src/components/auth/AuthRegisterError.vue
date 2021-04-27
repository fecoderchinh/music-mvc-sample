<template>
  <!-- eslint-disable max-len -->
  <AuthBox>
    <template slot="content">

      <h3 class="text-8 text-labelAndTitle cms-typo text-center">Bắt đầu 15 ngày hoàn toàn miễm phí</h3>

      <p class="mt-5 cms-typo text-lg text-buttonAndURL text-center">Hoặc đăng ký ngay - Khuyến mãi đến 50% chào mừng khai trương!</p>

      <InputType
        input-type="text"
        id="login-input-sdt"
        name="login-input-sdt"
        main-class="mt-30px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
        :value="sdtVal">
        <label slot="label" for="login-input-sdt">
          Số điện thoại
        </label>
      </InputType>

      <InputType
        input-type="password"
        id="login-input-mk"
        name="login-input-mk"
        main-class="mt-15px cms__label-inside cms__validate"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none group hover:shadow-none focus:shadow-none"
        :value="mkVal">
        <label slot="label" for="login-input-mk">
          Mật khẩu
        </label>
        <template slot="under-form">
          <p class="cms__validate-message">Mật khẩu tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số, và ký tự đặc biệt</p>
        </template>
      </InputType>

      <InputType
        input-type="text"
        id="login-input-shopname"
        name="login-input-shopname"
        main-class="mt-15px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
        :value="shopnameVal">
        <label slot="label" for="login-input-shopname">
          Tên cửa hàng
        </label>
      </InputType>

      <InputType
        input-type="text"
        id="login-input-webaddress"
        name="login-input-webaddress"
        main-class="mt-15px cms__label-inside cms__validate fill-validate"
        input-class="pl-5 pr-40"
        button-class="absolute right-0 top-0 mr-5 mt-4 focus:outline-none hover:shadow-none focus:shadow-none"
        :value="webaddressVal">
        <label slot="label" for="login-input-webaddress">
          Địa chỉ web
        </label>
        <template slot="button-text">
          <h3 class="cms-typo text-labelAndTitle text-lg">
            <span class="text-placeholderStyle">TenShop.</span>emz.vn
          </h3>
        </template>
        <template slot="under-form">
          <p class="cms__validate-message">Đây là tên miền VIP, bạn có thể thanh toán sau chỉ 20k/tháng. Hoặc bạn có thể chọn tên miền khác từ 6 ký tự trở lên.</p>
        </template>
      </InputType>

      <Button link="/auth/create" button-class="block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px">
        <template slot="name">
          Tạo website
        </template>
      </Button>

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
      sdtVal: '0989782159',
      mkVal: '123456',
      shopnameVal: 'Sumi Shop',
      webaddressVal: 'Sumi',
    };
  },
};
</script>

<style lang="scss"></style>
