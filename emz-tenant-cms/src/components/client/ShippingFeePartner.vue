<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <div class="cms-typo text-labelAndTitle">
          <h3 class="text-xl">Thiết lập từ phí vận chuyển của đối tác</h3>
          <p class="text-14px text-menuItem">Cửa hàng của bạn muốn áp dụng mức phí tạm tính của các đối tác vận chuyển ở trang thanh toán, để tìm hiểu thêm về cách sử dụng vui lòng <a href="#" class="text-buttonAndURL">xem tại đây</a></p>
        </div>
      </div>
      <div class="xl:col-span-2 md:col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <Box class="no-mb">
          <div class="grid grid-cols-6 gap-5" slot="content">
            <div class="lg:col-span-2 md:col-span-2 sm:col-span-6" v-if="data.imgPath">
              <img :src="data.imgPath" alt="">
            </div>
            <div class="col-span-4 md:col-span-4 sm:col-span-6 flex items-end">
              <h3 class="font-lato text-14px font-bold text-labelAndTitle">{{ data.name }}</h3>
            </div>
            <div class="col-span-3 sm:col-span-6 flex items-center">
              <h3 class="font-lato text-14px font-normal text-buttonAndURL"><a href="#">{{ data.namePackage }}</a></h3>
            </div>
            <div class="col-span-3 sm:col-span-6 md:text-right">
              <Button @click="openModal" button-class="cms-button cms-button-white">
                  <template slot="name">
                    Áp dụng phí
                  </template>
                </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Button from '@/components/client/Button.vue';

import ModalShippingFeeSetting from '@/components/client/ModalShippingFeeSetting.vue';

export default {
  components: {
    Box,
    Button,
  },
  data() {
    return {
      optionData: [
        {
          imgPath: 'https://picsum.photos/80/45',
          name: 'Giao hàng nhanh EMZ',
          namePackage: 'Kết nối ngay',
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

      this.$modal.show(ModalShippingFeeSetting, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
