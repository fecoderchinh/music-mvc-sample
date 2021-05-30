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
                <h3 class="font-lato text-14px font-bold text-labelAndTitle">{{ data.addressTitle }}</h3>
              </div>
              <div
                :class="[
                  'col-span-3 sm:col-span-6 flex md:justify-end',
                  index+1 !== selected ? 'opacity-50' : null
                ]">
                
                <h4 v-if="data.isDefault" class="text-red-500 text-14px">Cửa hàng chính</h4>
                

              </div>
              <div class="col-span-6">
                <p class="font-lato text-14px text-menuItem leading-6">
                  <strong class="text-labelAndTitle">{{ data.phone }}</strong>
                  <br>
                  E: {{ data.email }}
                  <br>
                  A: {{ data.fullAddress }}

                </p>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-5 py-10px px-5 border-t mt-5">
              <div
                :class="[
                  'col-span-3 sm:col-span-6 flex items-center',
                  index+1 === selected ? 'opacity-50' : null
                  ]">
                  <button class="text-cmsOrange cms-typo text-14px" 
                    type="button" 
                    @click="deleteItem(data.id,index)">
                    Xóa địa chỉ
                  </button>
               
              </div>
              <div class="col-span-3 sm:col-span-6 flex md:justify-end">
                <button type="button" @click="openModal( data )" 
                  class="cms-button cms-button-white">
                    Sửa địa chỉ
                </button>
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
import ModalAddShippingAddress from '@/components/client/settings/stores/ModalAddShippingAddress.vue';

import { getAll, remove } from '@/apis/store-address';

export default {
  components: {
    Box
  },
  data() {
    return {
      selected: 1,
      optionData: [],
    };
  },
  created() {
    this.get();
  },
  methods: {
    get(){
      getAll().then( res => this.optionData = res.items )
    },
    openModal( data ) {
      const options = {
        class: 'cms-modal',
        initData: data
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalAddShippingAddress, options, style, events);
    },
    deleteItem(id, index){
      remove(id).then( () => {
        this.optionData.splice(index,1);
      })
    }
  },
};
</script>

<style lang="scss"></style>
