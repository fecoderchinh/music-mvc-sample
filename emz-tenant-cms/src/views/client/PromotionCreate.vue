<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="/dashboard/promotions" slot="content">Danh sách khuyến mãi</a>
    </Breadcrumb>

    <!-- box title -->
    <Header>
      <h1 slot="title">Tạo khuyến mãi</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">

        <PromotionForm />
        <PromotionRadio />
        <PromotionRadio2 />
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

        <WidgetBlockList/>

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import WidgetBlockList from '@/components/client/WidgetBlockList.vue';
import PromotionForm from '@/components/client/PromotionForm.vue';
import PromotionRadio from '@/components/client/PromotionRadio.vue';
import PromotionRadio2 from '@/components/client/PromotionRadio2.vue';
import PromotionSchedule from '@/components/client/PromotionSchedule.vue';
import Button from '@/components/client/Button.vue';
import Footer from '@/components/client/Footer.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    WidgetBlockList,
    PromotionForm,
    PromotionRadio,
    PromotionRadio2,
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
