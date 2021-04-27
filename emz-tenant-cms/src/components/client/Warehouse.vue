<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <div class="cms-typo text-labelAndTitle">
          <h3 class="text-xl">Địa chỉ cửa hàng, chi nhánh, kho hàng</h3>
          <p class="text-14px text-menuItem">
            Quản lý địa chỉ cửa hàng, chi nhánh, kho hàng giúp hệ thống tính toán chi phí giao hàng chính xác hơn, giúp gửi đơn hàng đến nhà vận chuyển nhanh hơn.
          </p>
        </div>
      </div>
      <div class="md:col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <Box class="no-mb no-p">
          <div class="w-full" slot="content">
            <div class="grid grid-cols-6 gap-5 px-5 pt-5">
              <div class="col-span-3 sm:col-span-6">
                <h3 class="font-lato text-14px font-bold text-labelAndTitle">{{ data.name }}</h3>
              </div>
              <div
                :class="[
                  'col-span-3 sm:col-span-6 flex md:justify-end',
                  index+1 !== selected ? 'opacity-50' : null
                ]">
                <CheckType
                  :id="'warehouse-checkbox-'+index"
                  main-class="ml-0 no-mr rounded-checkbox"
                  :checked="index+1 === selected">
                  <h3 class="ml-2" slot="text">Cửa hàng chính</h3>
                </CheckType>
              </div>
              <div class="col-span-6">
                <p class="font-lato text-14px text-menuItem leading-6" v-html="data.content">
                  {{ data.content }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-5 py-10px px-5 border-t mt-5">
              <div
                :class="[
                  'col-span-3 sm:col-span-6 flex items-center',
                  index+1 === selected ? 'opacity-50' : null
                  ]">
                <a href="#" class="text-cmsOrange cms-typo text-14px">Xóa địa chỉ</a>
              </div>
              <div class="col-span-3 sm:col-span-6 flex md:justify-end">
                <Button button-class="cms-button cms-button-white">
                  <template slot="name">
                    Sửa địa chỉ
                  </template>
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import CheckType from '@/components/client/CheckType.vue';
import Button from '@/components/client/Button.vue';

import ModalEditShippingFee from '@/components/client/ModalEditShippingFee.vue';

export default {
  components: {
    Box,
    CheckType,
    Button,
  },
  data() {
    return {
      selected: 1,
      optionData: [
        {
          id: 1,
          name: 'Tổng kho',
          content: `<strong class="text-labelAndTitle">0983 453 005</strong>
                  <br>
                  Ngocptn@Gmail.com
                  <br>
                  100, Hoàng Quốc Việt, Cầu Giấy, Hà Nội
                  <br>
                  Phường Nghĩa Tân - Quận Cầu Giấy - Hà Nội - Việt Nam`,
        },
        {
          id: 2,
          name: 'Kho Sài Gòn',
          content: `<strong class="text-labelAndTitle">0983 453 005</strong>
                  <br>
                  Nhienphan@Gmail.com
                  <br>
                  15, Tuệ Tĩnh, Q1, Sài Gòn
                  <br>
                  Phường Lão Gia - Quận 1 - TP Hồ Chí Minh- Việt Nam`,
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
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalEditShippingFee, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
