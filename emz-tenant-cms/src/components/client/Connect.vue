<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Các dịch vụ thanh toán online</h3>
        <p class="cms-typo text-14px text-menuItem mt-2">Các dịch vụ thanh giúp khách hàng có thể dễ dành thanh toán trước cho bạn.</p>
      </div>
      <div class="col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <BoxPartner :connectButton="data.connectURL">
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
          connectName: 'VNPAYQR',
          content: 'Cửa hàng của bạn chưa cấu hình thanh toán qua VNPAY-QR. Để tìm hiểu cách thức kết nối và sử dụng vui lòng xem',
          helpURL: '#',
        },
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'Cổng thanh toán VNPAY',
          content: 'Cửa hàng của bạn chưa cấu hình thanh toán qua VNPAY. Để tìm hiểu cách thức kết nối và sử dụng vui lòng xem',
          helpURL: '#',
        },
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'Thanh toán thẻ nội địa ONEPAY',
          content: 'Cửa hàng của bạn chưa cấu hình thanh toán online bằng thẻ nội địa (ATM). Để tìm hiểu thêm về OnePay và các thông tin khác vui lòng xem',
          helpURL: '#',
        },
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'Thanh toán thẻ nội địa ONEPAY',
          content: 'Cửa hàng của bạn chưa cấu hình thanh toán online bằng thẻ nội địa (ATM). Để tìm hiểu thêm về OnePay và các thông tin khác vui lòng xem',
          helpURL: '#',
        },
        {
          connectURL: '#',
          imgPath: 'https://picsum.photos/80/45',
          connectName: 'Ví điện tử MOMO',
          content: 'Cửa hàng của bạn chưa cấu hình thanh toán qua MoMo.Để tìm hiểu thêm về MoMo và các thông tin khác vui lòng xem',
          helpURL: '#',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
