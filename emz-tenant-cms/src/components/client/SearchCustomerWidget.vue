<template>
  <!-- eslint-disable max-len -->
  <div class="grid-box">
    <div class="cms-label text-14px mb-4">
      <label for="search-customer" class="cursor-pointer">Tìm kiếm khách hàng</label>
    </div>

    <div class="grid-cols">
      <div class="w-full no-mb">
        <InputType
          id="search-customer"
          name="search-customer"
          placeholder="Tìm kiếm khách hàng"
          button="reset"
          input-class="pr-10"
          button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon"/></template>
        </InputType>
        <a href="#" class="font-lato font-medium text-14px text-buttonAndURL mt-3 xl:text-right block">Thêm mới khách hàng</a>
      </div>
    </div>
  </div>
</template>

<script>
import InputType from './InputType.vue';
import {
  SearchSVG,
} from '../SVGs.vue';

export default {
  components: {
    SearchSVG,
    InputType,
  },
};
</script>
