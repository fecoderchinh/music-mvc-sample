<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="/dashboard/categories" slot="content">Danh sách sản phẩm</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Thêm mới danh mục</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">

        <CategoryContent />
        <CategoryConditions />
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

        <WidgetImageUploader/>

        <Widget>
          <template slot="title">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Gắn vào Menu
            </label>
            <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Chọn Menu</a>
          </template>
          <template slot="content">
            <div class="w-full">
              <p class="text-standardCMS text-menuItem">Gắn Danh mục vào Menu</p>
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
import WidgetImageUploader from '@/components/client/WidgetImageUploader.vue';
import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import CategoryContent from '@/components/client/CategoryContent.vue';
import CategoryConditions from '@/components/client/CategoryConditions.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import Button from '@/components/client/Button.vue';
import Footer from '@/components/client/Footer.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    Widget,
    WidgetImageUploader,
    WidgetRadioStatus,
    CategoryContent,
    CategoryConditions,
    ProductSearchDisplay,
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
