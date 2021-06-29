<template>
  <!-- eslint-disable max-len -->
  <Widget>
    <template slot="title">
      <h3 class="cursor-pointer text-labelAndTitle">Thông tin kinh doanh hôm nay</h3>
    </template>
    <template slot="content">
      <div class="flex flex-wrap">

        <ul class="none space-y-5">
          <li class="text-14px relative cms-typo flex items-center cms-typo text-cmsRed">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">135,8tr</strong> <span class="text-menuItem">Doanh thu</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-cmsGreen">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">39,6tr</strong> <span class="text-menuItem">Lợi nhuận</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-yellow-500">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">1680</strong> <span class="text-menuItem">Khách hàng</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-buttonAndURL">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">1600</strong> <span class="text-menuItem">Đơn hàng</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-pink-500">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">923</strong> <span class="text-menuItem">Đơn hoàn thành</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-purple-500">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">17</strong> <span class="text-menuItem">Đơn hoàn trả</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-menuIcon">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">4</strong> <span class="text-menuItem">Đơn bị hủy</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-cmsOrange">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">12356</strong> <span class="text-menuItem">Sản phẩm được bán</span>
          </li>
          <li class="text-14px relative cms-typo flex items-center cms-typo text-green-500">
            <CheckSVG class="w-icon inline mr-4"/> <strong class="mr-4 text-labelAndTitle">525</strong> <span class="text-menuItem">Loại sản phẩm bán ra</span>
          </li>
        </ul>

      </div>
    </template>
  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import {
  CheckSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Widget,
    CheckSVG,
  },
};
</script>

<style scoped>

</style>
