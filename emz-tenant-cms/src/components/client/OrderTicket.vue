<template>
  <!-- eslint-disable max-len -->
  <div class="cms-typo order-ticket">
    <div class="order-header">
      <label class="cursor-pointer text-14px text-labelAndTitle">Phiếu giao hàng</label>
      <a href="#" class="text-standardCMS absolute top-0 right-0 text-placeholderStyle">12/9/2020 15:45</a>
    </div>

    <div class="w-full">
      <div class="flex flex-auto items-center mb-10px">
        <h3 class="text-labelAndTitle text-standardCMS text-14px">Trạng thái giao hàng</h3>
        <SelectOptionNotify
          main-class="flex flex-auto ml-3 md:ml-8"
          select-class="h-8 border-none"
          :option-data="this.optionDataSelect1"/>
      </div>
    </div>

    <div class="flex flex-auto items-center mb-10px">
      <h3 class="text-menuItem text-standardCMS text-13px">Nhà vận chuyển:</h3>
      <h3 class="text-menuItem text-standardCMS text-13px ml-3 md:ml-8">Giao Hàng Nhanh Express</h3>
    </div>

    <div class="flex flex-auto items-center mb-5">
      <h3 class="text-labelAndTitle text-standardCMS text-13px">Mã vận đơn:</h3>
      <h3 class="text-buttonAndURL text-standardCMS text-13px ml-3 md:ml-8 flex items-center">
        802004431626
        <AngleSVG class="w-2 fill-buttonAndURL ml-2 transform -rotate-90 -mt-px"/>
      </h3>
    </div>

    <div class="w-full">
      <div class="flex flex-auto items-center mb-4">
        <h3 class="text-labelAndTitle text-standardCMS text-14px">Trạng thái thu hộ COD</h3>
        <SelectOptionNotify
          main-class="flex flex-auto ml-3 md:ml-8"
          select-class="h-8 border-none"
          :option-data="this.optionDataSelect2"/>
      </div>
    </div>

    <div class="flex flex-auto items-center mb-10px">
      <h3 class="text-menuItem text-standardCMS text-13px">Tiền thu hộ:</h3>
      <h3 class="text-menuItem text-standardCMS text-13px ml-3 md:ml-8">123,456,000đ</h3>
    </div>

    <div class="md:flex flex-auto items-center mb-5">
      <h3 class="text-labelAndTitle text-standardCMS text-14px">Khách trả phí vận chuyển:</h3>
      <h3 class="text-menuItem text-standardCMS text-14px md:ml-8">156,000đ</h3>
      <a href="#" class="text-buttonAndURL text-standardCMS text-14px md:ml-4">Cập nhật</a>
    </div>

    <div class="cms-label text-14px mb-10px">
      <label class="cursor-pointer text-14px text-labelAndTitle">
        Ghi chú giao hàng
        <a href="javascript:void(0)" @click="openModalTextarea('Sửa ghi chú đơn hàng', noteContent)" class="text-standardCMS ml-4 text-buttonAndURL">Sửa</a>
      </label>
<!--      <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>-->
    </div>

    <div class="space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Nhẹ tay, hàng dễ vỡ</h3>
    </div>

  </div>
</template>

<script>
import SelectOptionNotify from './SelectOptionNotify.vue';
import {
  AngleSVG,
} from '../SVGs.vue';
import ModalTextarea from "@/components/client/ModalTextarea";

export default {
  components: {
    SelectOptionNotify,
    AngleSVG,
  },
  data() {
    return {
      optionDataSelect1: [
        { id: 1, name: 'Chờ lấy hàng', value: 'bg-cmsGreenNotify' },
        { id: 2, name: 'Đang giao hàng', value: 'bg-cmsGreenNotify' },
        { id: 3, name: 'Đã giao hàng', value: 'bg-cmsGreenNotify' },
        { id: 4, name: 'Chờ chuyển hoàn', value: 'bg-cmsOrangeNotify' },
        { id: 5, name: 'Đã chuyển hoàn', value: 'bg-red-200' },
        { id: 6, name: 'Hủy giao hàng', value: 'bg-white' },
      ],
      optionDataSelect2: [
        { id: 1, name: 'Chưa thu tiền', value: 'bg-cmsOrangeNotify' },
        { id: 2, name: 'Đã thu tiền', value: 'bg-cmsGreenNotify' },
        { id: 3, name: 'Đã nhận tiền', value: 'bg-cmsGreenNotify' },
      ],
      noteContent: 'Nhẹ tay, hàng dễ vỡ'
    };
  },
  methods: {
    openModalTextarea (label, content, placeholder, width=720) {
      const styles = {
        classes: 'cms-modal modal-md'
      }

      const data = {
        label: label,
        content: content,
        placeholder: placeholder,
      }

      const options = {
        width: width, height: 'auto', shiftX: 0, adaptive: true
      }
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close')
      }

      this.$modal.show(ModalTextarea, { ...data }, { ...options, ...styles }, events)
    }
  }
};
</script>

<style lang="scss">
  .order {
    &-header {
      @apply font-lato font-medium text-14px mb-5 relative;
    }
  }
</style>
