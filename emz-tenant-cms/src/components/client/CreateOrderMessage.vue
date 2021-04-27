<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-pb">
      <div class="cms-label text-18px mb-4">
        <h2>Chi tiết đơn hàng</h2>
      </div>

      <TableWithForm class="mb-5"/>

      <div class="grid-cols">
        <ProductAdvanceSearch/>
      </div>

      <div class="grid grid-cols-6 gap-5">
        <div class="col-span-3 sm:col-span-6">
          <OrderNoteAdded/>
        </div>
        <div class="col-span-3 sm:col-span-6">
          <OrderDataAdded/>
        </div>
      </div>

      <div class="grid-cols text-left md:text-right py-2 border-t">
        <div class="w-full no-mb md:flex items-center">
          <ListItemWithIcon :option-data="this.listItemData" />
          <ul class="ml-auto list-none">
            <li class="inline sm:block">
              <Button link="/dashboard/order-note" button-class="cms-button cms-button-blue">
                <template slot="name">
                  Giao hàng
                </template>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end box content -->
    <Footer/>
  </div>
</template>

<script>
import ProductAdvanceSearch from './ProductAdvanceSearch.vue';
import OrderNoteAdded from './OrderNoteAdded.vue';
import OrderDataAdded from './OrderDataAdded.vue';
import TableWithForm from './TableWithForm.vue';
import ListItemWithIcon from './ListItemWithIcon.vue';
import Footer from './Footer.vue';
import Button from './Button.vue';

export default {
  components: {
    ProductAdvanceSearch,
    OrderNoteAdded,
    OrderDataAdded,
    Footer,
    TableWithForm,
    ListItemWithIcon,
    Button,
  },
  data() {
    return {
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
