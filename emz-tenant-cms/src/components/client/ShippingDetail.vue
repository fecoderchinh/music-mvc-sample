<template>
  <!-- eslint-disable max-len -->
  <div class="shipping-detail">
    <div class="shipping-header">
      <label class="cursor-pointer text-14px text-labelAndTitle">Địa chỉ giao hàng</label>
      <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>
    </div>
    <div class="mb-5 space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Nguyễn Ngọc Duy Anh</h3>
      <h3 class="cms-typo text-buttonAndURL text-13px">0969 786 519</h3>
      <p class="cms-typo text-menuItem text-13px">122 Thuong Dinh, Thanh Xuan, Ha Noi</p>
      <p class="cms-typo text-menuItem text-13px">Phường Nguyễn Du - Quận Thanh Xuân - Hà Nội</p>
    </div>

    <div class="cms-label text-14px mb-10px">
      <label class="cursor-pointer text-14px text-labelAndTitle">Nguồn đơn</label>
      <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>
    </div>
    <div class="mb-5 space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Lazada Tobias Shop</h3>
    </div>

    <div class="cms-label text-14px mb-10px">
      <label class="cursor-pointer text-14px text-labelAndTitle">Chi nhánh</label>
      <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>
    </div>
    <div class="mb-5 space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Chi nhánh mặc định</h3>
    </div>

    <div class="cms-label text-14px mb-10px">
      <label class="cursor-pointer text-14px text-labelAndTitle">Ghi chú đơn hàng</label>
      <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>
    </div>
    <div class="space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Yêu cầu giao đúng màu và kiểm trả kỹ trước khi giao tránh đổi trả</h3>
    </div>
    <InlineTags :option-data="this.optionDataTags"/>
  </div>
</template>

<script>
import InlineTags from '@/components/client/InlineTags.vue';

export default {
  components: {
    InlineTags,
  },
  data() {
    return {
      optionDataTags: [
        {
          name: 'Sale 30/4',
          closeTag: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .shipping {
    &-header {
      @apply font-lato font-medium text-13px mb-5 relative;
    }
  }
</style>
