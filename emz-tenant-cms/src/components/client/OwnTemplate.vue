<template>
  <!-- eslint-disable max-len -->
  <div class="grid grid-cols-4 gap-5">

    <template v-for="(data, index) in optionDataTable">
      <div class="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4" :key="index">
        <h3
          :class="[
            'cms-typo',
            data.default ? 'text-lg' : 'text-14px'
          ]">{{ data.name }}</h3>

        <div
          :class="[
            'w-full mt-5 mb-10px',
            !data.default ? 'pt-5px' : null
          ]">
          <img :src="data.img" alt="" class="w-full">
        </div>

        <div class="w-full flex" v-if="data.default">
          <div class="flex-1">
            <Button button-class="cms-button cms-button-blue w-full">
              <template slot="name">
                Xem kho giao diện
              </template>
            </Button>
          </div>
        </div>

        <div class="w-full flex" v-else>
          <div class="flex-auto">
            <Button button-class="cms-button cms-button-blue">
              <template slot="name">
                Chỉnh sửa
              </template>
            </Button>
          </div>
          <div class="flex-auto flex justify-end">
            <Button button-class="cms-button cms-button-white">
              <template slot="name">
                Đặt làm mặc định
              </template>
            </Button>
          </div>
        </div>

      </div>
    </template>

  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Button,
  },
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
