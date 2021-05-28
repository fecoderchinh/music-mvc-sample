<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5 relative" slot="content">
      <div class="col-span-6">
        <Button @click="openModal(buttonAddNewModal, buttonAddNewWidth)" link="#" class="md:absolute right-0 z-10" button-class="cms-button cms-button-blue">
          <template slot="name">
            Thêm khu vực vận chuyển
          </template>
        </Button>
        <div class="cms-typo text-labelAndTitle">
          <h3 class="text-xl">Phí vận chuyển tự tạo</h3>
          <p class="text-14px text-menuItem md:pr-56">Là loại phí vận chuyển do bạn tự tạo ra dựa trên tính toán riêng của bạn. Phí này sẽ được tính vào phi vận chuyển đơn hàng.
            <a href="#" class="text-buttonAndURL">Tìm hiểu thêm</a></p>
        </div>
      </div>
      <div class="xl:col-span-2 md:col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <Box class="no-mb">
          <div class="w-full" slot="content">
            <div class="block relative mb-5">
              <label class="cursor-pointer text-lg text-labelAndTitle uppercase">{{ data.name }}</label>
              <a href="#" @click.self.prevent="openModal(data.modal, data.width)" class="cms-typo text-14px md:absolute block sm:mt-10px top-0 right-0 text-buttonAndURL">Sửa</a>
            </div>
            <ul class="block list-none mt-10px grid gap-10px" v-for="(child, index) in data.children" :key="index" :class="index !== 0 ? 'border-t pt-10px' : null">
              <li class="block relative">
                <h3 class="cms-typo text-14px text-buttonAndURL">
                  {{ child.type }}
                </h3>
              </li>
              <li class="block relative grid grid-cols-6 sm:gap-15px">
                <div
                  v-for="(dprice, iprice) in child.price"
                  :key="iprice"
                  :class="[
                    'md:col-span-3 col-span-6',
                    iprice + 1 === child.price.length ? 'md:text-right' : null
                ]">
                  <h3 class="cms-typo text-14px text-menuItem">
                    {{ dprice }}
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </Box>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Button from '@/components/client/Button.vue';

import ModalEditShippingFee from '@/components/client/ModalEditShippingFee.vue';
import ModalEditOtherFee from '@/components/client/ModalEditOtherFee.vue';

import ModalAddShippingArea from '@/components/client/ModalAddShippingArea.vue'

export default {
  components: {
    Box,
    Button
  },
  data() {
    return {
      optionData: [
        {
          name: 'Các tỉnh thành khác',
          modal: ModalEditOtherFee,
          width: 720,
          children: [
            {
              type: 'Giao hàng tận nơi',
              price: ['—', '40,000đ'],
            }
          ]
        },
        {
          name: 'Hà nội',
          price: ['0kg đến 10kg', '40,000đ'],
          weight: ['1,00 - 2,00 Kg', '50,000đ'],
          modal: ModalEditShippingFee,
          width: 720,
          children: [
            {
              type: 'Giao hàng tận nơi',
              price: ['0kg đến 10kg', '40,000đ'],
            },
            {
              type: 'Đơn hàng',
              price: ['1.000.000đ trở lên', '50,000đ'],
            },
            {
              type: 'Đơn hàng nặng',
              price: ['10kg trở lên', '150,000đ'],
            }
          ]
        },
        {
          name: 'sài gòn',
          modal: ModalEditShippingFee,
          width: 720,
          children: [
            {
              type: 'Giao hàng tận nơi',
              price: ['0đ trở lên', '40,000đ'],
            }
          ]
        },
      ],
      buttonAddNewModal: ModalAddShippingArea,
      buttonAddNewWidth: 500
    };
  },
  methods: {
    openModal(m, w = 1200) {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: w, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(m, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
