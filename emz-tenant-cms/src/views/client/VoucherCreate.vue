<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="/dashboard/promotions" slot="content">Danh sách khuyến mãi</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Thêm mới danh mục</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">

        <VoucherForm />
        <VoucherRadio />
        <VoucherRadio2 />
        <PromotionSchedule />

        <div class="w-full no-pb md:pt-5">
          <div class="grid-cols relative">
            <div class="md:absolute top-0 left-0">
              <ul class="list-none">
                <li class="inline mr-8 sm:mr-5 sm:mb-3">
                  <Button button-class="cms-button bg-cmsOrange text-white">
                    <template slot="name">
                      Xóa something
                    </template>
                  </Button>
                </li>
              </ul>
            </div>
            <div class="md:absolute top-0 right-0">
              <ul class="list-none">
                <li class="inline mr-5 sm:mb-3">
                  <Button button-class="cms-button cms-button-white">
                    <template slot="name">
                      Hủy
                    </template>
                  </Button>
                </li>
                <li class="inline">
                  <Button button-class="cms-button cms-button-blue">
                    <template slot="name">
                      Lưu
                    </template>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer class="text-center"/>
      </div>
      <!-- end column -->

      <!-- column -->
      <div class="col-span-6 xl:col-span-2">

        <Widget>
          <template slot="title">
            <h3 class="cursor-pointer uppercase text-labelAndTitle">trian30%</h3>
          </template>
          <template slot="content">
            <div class="flex flex-wrap">

              <ul class="list-disc space-y-1 ml-5">
                <li class="text-menuItem text-14px relative cms-typo">
                  Loại: Voucher
                </li>
                <li class="text-menuItem text-14px relative cms-typo">
                  Mã giảm giá: TRIAN30%
                </li>
                <li class="text-menuItem text-14px relative cms-typo">
                  Giảm 99,000₫ cho toàn bộ đơn hàng
                </li>
                <li class="text-menuItem text-14px relative cms-typo">
                  Áp dụng từ 1:46 hôm nay đến 11:59 PM 27/09
                </li>
                <li class="text-menuItem text-14px relative cms-typo">
                  Mã được phép sử dụng 1000 lần, mỗi khách hàng được sử dụng 1 lần
                </li>
              </ul>

            </div>
          </template>
        </Widget>

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import Widget from '@/components/client/Widget.vue';
import VoucherForm from '@/components/client/VoucherForm.vue';
import VoucherRadio from '@/components/client/VoucherRadio.vue';
import VoucherRadio2 from '@/components/client/VoucherRadio2.vue';
import PromotionSchedule from '@/components/client/PromotionSchedule.vue';
import Button from '@/components/client/Button.vue';
import Footer from '@/components/client/Footer.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    Widget,
    VoucherForm,
    VoucherRadio,
    VoucherRadio2,
    PromotionSchedule,
    Button,
    Footer,
  },
  data() {
    return {
      optionDataSelect: [
        { name: 'Cửa hàng chính' },
        { name: 'Cửa hàng phụ' },
        { name: 'Cửa hàng phụ phụ' },
      ],
    };
  },
};
</script>
