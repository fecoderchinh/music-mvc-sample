<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <div class="cms-typo text-labelAndTitle">
          <h3 class="text-xl">Phí vận chuyển tự tạo</h3>
          <p class="text-14px text-menuItem">Thêm phí vận chuyển mới cho các khu vực vận chuyển khác nhau.</p>
        </div>
      </div>
      <div class="xl:col-span-2 md:col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <Box class="no-mb">
          <div class="w-full" slot="content">
            <div class="block relative">
              <label class="cursor-pointer text-lg text-labelAndTitle uppercase">{{ data.name }}</label>
              <a href="#" @click.self.prevent="openModal(data.modal, data.width)" class="cms-typo text-14px md:absolute block sm:mt-10px top-0 right-0 text-buttonAndURL">Sửa</a>
            </div>
            <ul class="block list-none mt-5 grid gap-15px">
              <li class="block relative">
                <h3 class="cms-typo text-14px text-buttonAndURL">
                  Giao hàng tận nơi
                </h3>
              </li>
              <li class="block relative grid grid-cols-6 sm:gap-15px">
                <div
                  v-for="(dprice, iprice) in data.price"
                  :key="iprice"
                  :class="[
                    'md:col-span-3 col-span-6',
                    iprice + 1 === data.price.length ? 'md:text-right' : null
                ]">
                  <h3 class="cms-typo text-14px text-menuItem">
                    {{ dprice }}
                  </h3>
                </div>
              </li>
              <li class="block relative grid grid-cols-6 sm:gap-15px">
                <div
                  v-for="(dweight, iweight) in data.weight"
                  :key="iweight"
                  :class="[
                    'md:col-span-3 col-span-6',
                    iweight + 1 === data.weight.length ? 'md:text-right' : null
                ]">
                  <h3 class="cms-typo text-14px text-menuItem">
                    {{ dweight }}
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

import ModalEditShippingFee from '@/components/client/ModalEditShippingFee.vue';
import ModalEditOtherFee from '@/components/client/ModalEditOtherFee.vue';

export default {
  components: {
    Box,
  },
  data() {
    return {
      optionData: [
        {
          name: 'Các tỉnh thành khác',
          price: ['0đ trở lên', '40,000đ'],
          weight: ['Kg', '—'],
          modal: ModalEditOtherFee,
          width: 720,
        },
        {
          name: 'Hà nội',
          price: ['0đ trở lên', '40,000đ'],
          weight: ['1,00 - 2,00 Kg', '50,000đ'],
          modal: ModalEditShippingFee,
          width: 720,
        },
        {
          name: 'sài gòn',
          price: ['0đ trở lên', '40,000đ'],
          weight: ['Kg', '—'],
          modal: ModalEditShippingFee,
          width: 720,
        },
      ],
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
