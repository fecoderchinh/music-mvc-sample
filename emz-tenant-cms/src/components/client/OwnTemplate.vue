<template>
  <!-- eslint-disable max-len -->
  <div class="grid grid-cols-4 gap-x-5 gap-y-6">

    <template v-for="(data, index) in optionDataTable">
      <div class="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4" :key="index">
        <h3
          :class="[
            'cms-typo',
            data.default ? 'text-lg' : 'text-14px'
          ]">{{ data.name }}</h3>

        <div
          :class="[
            'w-full mt-3 mb-15px',
            !data.default ? 'pt-5px' : null
          ]">
          <img :src="data.img" alt="" class="w-full">
        </div>

        <div class="w-full flex" v-if="data.default">
          <div class="flex-1 text-center">
            <a href="javascript:void(0)" class="text-buttonAndURL cms-typo text-14px">Xem kho giao diện</a>
          </div>
        </div>

        <div class="w-full flex flex-wrap items-center" v-else>
          <div class="flex-auto mr-3">
            <a href="javascript:void(0)" class="text-buttonAndURL cms-typo text-14px">Chỉnh sửa</a>
          </div>
          <div class="flex-auto mr-3">
            <a href="javascript:void(0)" class="text-buttonAndURL cms-typo text-14px">Nhân bản</a>
          </div>
          <div class="flex-auto mr-3">
            <a href="javascript:void(0)" class="text-buttonAndURL cms-typo text-14px">Đặt mặc định</a>
          </div>
        </div>

      </div>
    </template>

  </div>
</template>

<script>
export default {
  data() {
    return {
      optionDataTable: [
        {
          default: true,
          name: 'Giao diện đã cài đặt',
          img: 'https://picsum.photos/260/150',
        },
        {
          name: 'Giao diện mặc định',
          img: 'https://picsum.photos/260/150',
        },
        {
          name: 'Shop cafe Family',
          img: 'https://picsum.photos/260/150',
        },
        {
          name: 'Tiki Shop',
          img: 'https://picsum.photos/260/150',
        },
        {
          name: 'Shopee Bue',
          img: 'https://picsum.photos/260/150',
        },
        {
          name: 'Giao diện mặc định',
          img: 'https://picsum.photos/260/150',
        },
        {
          name: 'Shop cafe Family',
          img: 'https://picsum.photos/260/150',
        },
        {
          name: 'Tiki Shop',
          img: 'https://picsum.photos/260/150',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
