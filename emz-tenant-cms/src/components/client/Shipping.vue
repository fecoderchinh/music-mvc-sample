<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Các dịch vụ vận chuyển</h3>
        <p class="cms-typo text-14px text-menuItem mt-2">Các dịch vụ vận chuyển giúp bạn chuyển hàng tới khách hàng một cách nhanh chóng, hiệu quả.</p>
      </div>
      <div class="col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <BoxPartner :connectButton="data.connectURL" @onClickButton="openModal">
          <template slot="label">Kết nối</template>
          <div class="grid grid-cols-6 gap-5" slot="content">
            <div class="lg:col-span-1 md:col-span-2 sm:col-span-6" v-if="data.imgPath">
              <img :src="data.imgPath" alt="">
            </div>
            <div class="col-span-5 md:col-span-4 sm:col-span-6 flex items-end">
              <h3 class="font-lato text-14px font-bold text-labelAndTitle">{{ data.connectName }}</h3>
            </div>
            <div class="col-span-6">
              <p class="cms-typo text-14px text-menuItem">
                {{ data.content }}
                <a :href="data.helpURL" class="text-buttonAndURL sm:block">tại đây</a>
              </p>
            </div>
          </div>
        </BoxPartner>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import BoxPartner from '@/components/client/BoxPartner.vue';

import ModalShipping from '@/components/client/ModalShipping.vue';

export default {
  components: {
    Box,
    BoxPartner,
  },
  data() {
    return {
      optionData: [
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'Vietnam post',
          content: 'Cửa hàng của bạn chưa sử dụng dịch vụ vận chuyển của VNPost. Để tìm hiểu thêm về cách kết nối và giao hàng với hệ thống mới của VNPost, vui lòng xem',
          helpURL: '#',
        },
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'boxme',
          content: 'Cửa hàng của bạn chưa sử dụng dịch vụ vận chuyển Boxme. Để tìm hiểu thêm về Boxme và các thông tin khác vui lòng xem',
          helpURL: '#',
        },
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'giao hàng nhanh',
          content: 'Cửa hàng của bạn chưa sử dụng dịch vụ vận chuyển Giao hàng nhanh 2020. Thông tin của bạn sẽ được chúng tôi mã hóa trước khi lưu trữ. Để tìm hiểu thêm về Giao hàng nhanh và các thông tin khác vui lòng xem',
          helpURL: '#',
        },
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'DHL',
          content: 'Cửa hàng của bạn chưa sử dụng dịch vụ vận chuyển DHL. Để tìm hiểu thêm về DHL và các thông tin khác vui lòng xem',
          helpURL: '#',
        },
      ],
    };
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 600, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalShipping, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
