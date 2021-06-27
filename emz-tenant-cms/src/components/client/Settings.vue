<template>
  <!-- eslint-disable max-len -->
  <Box :boxFixed="true" class="no-p">
    <div class="grid grid-cols-6 gap-5 p-50px" slot="content">
      <div class="col-span-2 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <div class="grid grid-cols-4 gap-5 p-10px group hover:bg-sidebarHover">
          <div class="col-span-1">
            <div class="w-50px h-50px flex items-center bg-gray-400 justify-center text-menuIcon group-hover:text-buttonAndURL" v-if="data.component">
              <component v-bind:is="data.component" class="w-8 h-8" />
            </div>
          </div>
          <div class="col-span-3">
            <h3 class="cms-typo text-14px text-buttonAndURL">
              <router-link :to="data.url">{{ data.title }}</router-link>
            </h3>
            <p class="cms-typo text-14px text-menuItem">
              {{ data.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';

import {
  TruckFillSVG,
  TruckSVG,
  PaymentSVG,
  GlobeWWWSVG,
  LocationSVG,
  AccountCircleSVG,
  SettingSVG,
  CheckedFileSVG
} from '@/components/SVGs.vue';

export default {
  components: {
    Box
  },
  data() {
    return {
      optionData: [
        {
          component: TruckFillSVG,
          title: 'Kết nối vận chuyển',
          content: 'Kết nối và quản lý các phương thức vận chuyển đơn hàng',
          url: '/dashboard/shipping',
        },
        {
          component: TruckSVG,
          title: 'Phí vận chuyển trên website',
          content: 'Quản lý các mức phí vận chuyển trên website',
          url: '/dashboard/shipping-fee-settings',
        },
        {
          component: PaymentSVG,
          title: 'Kết nối thanh toán',
          content: 'Kết nối và quản lý các phương thức thanh toán trên website',
          url: '/dashboard/connect-payment',
        },
        {
          component: GlobeWWWSVG,
          title: 'Tên miền riêng',
          content: 'Kết nối tên miền riêng cho website',
          url: '/dashboard/domain',
        },
        {
          component: LocationSVG,
          title: 'Chi nhánh & Kho hàng',
          content: 'Quản lý địa chỉ cửa hàng, chi nhánh, kho hàng',
          url: '/dashboard/warehouse',
        },
        {
          component: AccountCircleSVG,
          title: 'Tài khoản & Phân quyền',
          content: 'Quản lý các tài khoản nhân viên và phân quyền',
          url: '/dashboard/user-roles',
        },
        {
          component: SettingSVG,
          title: 'Cài đặt chung',
          content: 'Thông tin cửa hàng, cài đặt quảng cáo, tùy chọn…',
          url: '/dashboard/settings-general',
        },
        {
          component: CheckedFileSVG,
          title: 'Gói dịch vụ',
          content: 'Các gói đang sử dụng, cung cấp các tuỳ chọn nâng cấp…',
          url: '/dashboard/package',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
