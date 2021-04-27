<template>
  <!-- eslint-disable max-len -->
  <AuthBox>
    <template slot="content">

      <h3 class="text-8 text-labelAndTitle cms-typo">Thông tin cho Sumi Shop</h3>

      <p class="mt-5 cms-typo text-lg text-menuItem">Thông tin này để khách hàng dễ dàng liên hệ với shop của bạn.</p>

      <InputType
        input-type="text"
        id="create-input-shopname"
        name="create-input-shopname"
        main-class="mt-30px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
        :value="shopnameVal">
        <label slot="label" for="create-input-shopname">
          Tên chủ website
        </label>
      </InputType>

      <InputType
        input-type="text"
        id="create-input-shopname"
        name="create-input-shopname"
        main-class="mt-15px cms__label-inside cms__validate"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
        :value="emailVal">
        <label slot="label" for="create-input-shopname">
          Email liên hệ chủ website
        </label>
        <template slot="under-form">
          <p class="cms__validate-message">Email không đúng định dạng</p>
        </template>
      </InputType>

      <div class="w-full mt-15px mb-30px border-b"></div>

      <InputType
        input-type="text"
        id="create-input-shopaddress"
        name="create-input-shopaddress"
        main-class="mt-15px cms__label-inside"
        input-class="pl-5"
        button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
        :value="shopAddress">
        <label slot="label" for="create-input-shopaddress">
          Địa chỉ cửa hàng
        </label>
      </InputType>

      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-1 sm:col-span-2">
          <SelectOption
          main-class="cms__label-inside mt-15px"
          select-id="create-select-webaddress"
          :option-data="this.optionDataSelect">
          <label slot="label" for="create-select-webaddress">
            Tỉnh thành
          </label>
          </SelectOption>
        </div>
        <div class="col-span-1 sm:col-span-2">
          <InputType
            input-type="text"
            id="create-input-shopphone"
            name="create-input-shopphone"
            main-class="mt-15px cms__label-inside"
            input-class="pl-5"
            button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
            :value="sdtVal">
            <label slot="label" for="create-input-shopphone">
              Số điện thoại cửa hàng
            </label>
          </InputType>
        </div>
      </div>

      <Button link="/site-manager/picker" button-class="block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px">
        <template slot="name">
          Vào website
        </template>
      </Button>

    </template>
  </AuthBox>
</template>

<script>
import AuthBox from '@/components/auth/AuthBox.vue';
import InputType from '@/components/client/InputType.vue';
import Button from '@/components/client/Button.vue';
import SelectOption from '@/components/client/SelectOption.vue';

export default {
  components: {
    AuthBox,
    InputType,
    Button,
    SelectOption,
  },
  data() {
    return {
      optionDataSelect: [
        { name: 'Sài Gòn' },
        { name: 'Vũng Tàu' },
        { name: 'Đà Nẵng' },
        { name: 'Hà Nội' },
        { name: 'Cần Thơ' },
      ],
      sdtVal: '0983483002',
      shopAddress: 'Sumi Shop, Số 1 Nguyễn Huệ, Q1, Sài Gòn',
      shopnameVal: 'Lâm Thiên Phong',
      emailVal: 'LamThienPhong@Gmail.com',
    };
  },
};
</script>

<style lang="scss"></style>
