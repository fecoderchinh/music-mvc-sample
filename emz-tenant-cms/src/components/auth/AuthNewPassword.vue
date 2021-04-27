<template>
  <!-- eslint-disable max-len -->
  <AuthBox>
    <template slot="content">

      <h3 class="text-8 text-labelAndTitle cms-typo text-center">Mật khẩu mới</h3>

      <InputType
        input-type="password"
        id="create-input-mkmoi"
        name="create-input-mkmoi"
        main-class="mt-15px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
        <label slot="label" for="create-input-mkmoi">
          Nhập mật khẩu mới
        </label>
      </InputType>

      <InputType
        input-type="password"
        id="create-input-mkmoi-re"
        name="create-input-mkmoi-re"
        main-class="mt-15px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
        <label slot="label" for="create-input-mkmoi-re">
          Nhập lại mật khẩu mới
        </label>
      </InputType>

      <Button link="/auth/login" button-class="block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px">
        <template slot="name">
          Đăng nhập
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
