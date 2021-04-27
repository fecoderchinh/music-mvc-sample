<template>
  <!-- eslint-disable max-len -->
  <div class="grid-box no-pb disabled">

    <div class="cms-label flex flex-auto items-center text-18px mb-4">
      <h2>P1002</h2>
      <span class="cms-typo text-14px text-menuIcon md:ml-6 sm:block">12/03/2020 15:45</span>
      <label class="text-standardCMS text-menuItem font-medium text-13px md:ml-6 bg-red-200 rounded-full px-4">Đã hủy giao hàng</label>
    </div>

    <div class="grid-cols">
      <div class="w-1/2 sm:w-full">
        <div class="flex flex-auto items-center mb-4">
          <h3 class="text-labelAndTitle text-standardCMS text-14px">Trạng thái giao hàng</h3>
          <SelectOptionNotify
            main-class="w-1/2 ml-3 md:ml-8"
            select-class="h-8 border-none"
            :option-data="this.optionDataSelect"/>
        </div>
        <div class="flex flex-auto items-center mb-4">
          <h3 class="text-labelAndTitle text-standardCMS text-14px">Nhà vận chuyển</h3>
          <h3 class="text-menuItem text-standardCMS text-14px ml-3 md:ml-8">Giao Hàng Nhanh Express</h3>
        </div>
        <div class="flex flex-auto items-center">
          <h3 class="text-labelAndTitle text-standardCMS text-14px">Mã vận đơn</h3>
          <h3 class="text-menuItem text-standardCMS text-14px ml-3 md:ml-8">Không có mã</h3>
        </div>
      </div>
      <div class="w-1/2 sm:w-full">
        <div class="flex flex-auto items-center mb-4">
          <h3 class="text-labelAndTitle text-standardCMS text-14px">Trạng thái thu hộ</h3>
          <SelectOptionNotify
            main-class="w-1/2 ml-3 md:ml-8"
            select-class="h-8 border-none"
            :option-data="this.optionDataSelect"/>
        </div>
        <div class="flex flex-auto items-center mb-4">
          <h3 class="text-labelAndTitle text-standardCMS text-14px">Tiền thu hộ COD:</h3>
          <h3 class="text-menuItem text-standardCMS text-14px ml-3 md:ml-8">123,456,000đ</h3>
        </div>
        <div class="md:flex flex-auto items-center">
          <h3 class="text-labelAndTitle text-standardCMS text-14px">Khách trả phí vận chuyển:</h3>
          <h3 class="text-menuItem text-standardCMS text-14px md:ml-8">156,000đ</h3>
          <a href="#" class="text-buttonAndURL text-standardCMS text-14px md:ml-4">Cập nhật</a>
        </div>
      </div>
    </div>

    <div class="grid-cols text-left md:text-right py-2 border-t">
      <div class="w-full no-mb md:flex items-center">
        <ListItemWithIcon :option-data="this.listItemData" />
        <ul class="ml-auto list-none">
          <li class="inline sm:block">
            <Button button-class="cms-button cms-button-white">
              <template slot="name">
                Hủy giao hàng
              </template>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SelectOptionNotify from './SelectOptionNotify.vue';
import ListItemWithIcon from './ListItemWithIcon.vue';
import Button from './Button.vue';

export default {
  components: {
    SelectOptionNotify,
    ListItemWithIcon,
    Button,
  },
  data() {
    return {
      optionDataSelect: [
        { id: 1, name: 'Chờ lấy hàng', value: 'bg-cmsGreenNotify' },
        { id: 2, name: 'Chưa thu tiền', value: 'bg-cmsOrangeNotify' },
        { id: 3, name: 'Đã hủy đơn hàng', value: 'bg-red-200' },
        { id: 4, name: 'Chưa chọn gì', value: 'bg-white' },
      ],
      listItemData: [
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'In đơn',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Lưu trữ',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Hủy đơn',
        },
      ],
    };
  },
};
</script>
