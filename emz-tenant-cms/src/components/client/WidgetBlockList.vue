<template>
  <Widget>
    <template slot="title">
      <h3 class="cursor-pointer uppercase text-labelAndTitle">Mùa Thu Vàng</h3>
    </template>
    <template slot="content">
      <div class="flex flex-wrap">

        <ul class="list-disc space-y-1 ml-5">
          <li class="text-menuItem text-14px relative cms-typo">
            Loại: CTKM
          </li>
          <li class="text-menuItem text-14px relative cms-typo">
            Giảm 3% áp dụng cho 3 sản phẩm
          </li>
          <li class="text-menuItem text-14px relative cms-typo">
            Tổng giá trị đơn hàng được khuyến mãi tối thiểu 199,000₫
          </li>
          <li class="text-menuItem text-14px relative cms-typo">
            Áp dụng từ 10:15 16/09/2020 đến 23:59 20/9/2020
          </li>
        </ul>

      </div>
    </template>
  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';

export default {
  components: {
    Widget,
  },
};
</script>
