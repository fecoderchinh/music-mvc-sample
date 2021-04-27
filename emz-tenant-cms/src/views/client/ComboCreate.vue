<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="/dashboard/product-list" slot="content">Danh sách sản phẩm</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Tạo Combo</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">

        <ProductContentCombo />
        <ProductDescription />
        <ProductImages />
        <ProductSearchDisplay />

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

        <WidgetRadioStatus/>

        <WidgetMergeBoxes/>

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import ProductContentCombo from '@/components/client/ProductContentCombo.vue';
import ProductImages from '@/components/client/ProductImages.vue';
import ProductDescription from '@/components/client/ProductDescription.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import Button from '@/components/client/Button.vue';
import Footer from '@/components/client/Footer.vue';

import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetMergeBoxes from '@/components/client/WidgetMergeBoxes.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    ProductContentCombo,
    ProductImages,
    ProductDescription,
    ProductSearchDisplay,
    Button,
    Footer,
    WidgetRadioStatus,
    WidgetMergeBoxes,
  },
};
</script>
