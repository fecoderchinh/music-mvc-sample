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
          <OrderNote/>
        </div>
        <div class="col-span-3 sm:col-span-6">
          <OrderData/>
        </div>
      </div>

      <div class="grid-cols text-left md:text-right py-2 border-t">
        <div class="w-full no-mb">
          <ul class="list-none">
            <li class="inline sm:block mr-8 sm:mr-0 sm:mb-3">
              <Button button-class="cms-button cms-button-white">
                <template slot="name">
                  Hủy
                </template>
              </Button>
            </li>
            <li class="inline sm:block mr-8 sm:mr-0 sm:mb-3">
              <Button button-class="cms-button cms-button-white">
                <template slot="name">
                  Bán tại shop
                </template>
              </Button>
            </li>
            <li class="inline sm:block">
              <Button link="/dashboard/order-message" button-class="inline-block cms-button cms-button-blue">
                <template slot="name">
                  Tạo đơn hàng
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
import TableWithForm from './TableWithForm.vue';
import ProductAdvanceSearch from './ProductAdvanceSearch.vue';
import OrderNote from './OrderNote.vue';
import OrderData from './OrderData.vue';
import Footer from './Footer.vue';
import Button from './Button.vue';

export default {
  components: {
    Footer,
    TableWithForm,
    ProductAdvanceSearch,
    OrderNote,
    OrderData,
    Button,
  },
};
</script>
