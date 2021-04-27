<template>
  <!-- eslint-disable max-len -->
  <div class="flex items-center md:justify-end relative w-full">
    <h3 class="whitespace-no-wrap mr-3 items-center flex font-lato font-medium text-14px text-menuItem">Nguồn đơn</h3>
    <CustomSelectOption class="no-decor" labelClass="sm:border sm:bg-white m-0 p-1" :option-data="this.optionData" />
  </div>
</template>

<script>
import CustomSelectOption from '@/components/client/CustomSelectOption.vue';

export default {
  components: {
    CustomSelectOption,
  },
  data() {
    return {
      optionData: [
        {
          id: 1,
          name: 'Mạng xã hội',
        },
        {
          id: 2,
          name: 'Quảng cáo',
        },
        {
          id: 3,
          name: 'Google',
        },
        {
          id: 4,
          name: 'Khách giới thiệu',
          default: 1,
        },
        {
          id: 5,
          name: 'Facebook',
        },
        {
          id: 6,
          name: 'Shopee',
        },
        {
          id: 7,
          name: 'Lazada',
        },
        {
          id: 8,
          name: 'Tiki',
        },
        {
          id: 9,
          name: 'Nguồn khác',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
