<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="/dashboard/categories" slot="content">Danh mục sản phẩm</a>
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

      </div>
      <!-- end column -->

      <!-- column -->
      <div class="col-span-6 xl:col-span-2">

        <WidgetRadioStatus/>
        <WidgetImageUploader @click="uploadImage" :image="imgUrl"/>

        <Widget>
          <template slot="title">
            <div class="flex items-center relative whitespace-no-wrap">
              <label class="cursor-pointer">Gắn lên menu</label>
              <ModalPicker
                  class="inline-flex ml-auto"
                  :current-modal="modalComponent[1]"
              >
                <a href="javascript:void(0)" class="font-lato font-medium text-14px text-buttonAndURL xl:text-right block">Chọn menu</a>
              </ModalPicker>
            </div>
          </template>
          <template slot="content">
            <h3 class="text-standardCMS text-menuIcon">Gắn danh mục vào Menu</h3>
            <InlineTags :option-data="this.optionDataTags" tagClass="inline-tag__button-blue"/>
          </template>
        </Widget>

        <Widget>
          <template slot="title">
            <label class="cursor-pointer">Khung giao diện</label>
          </template>
          <template slot="content">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </template>
        </Widget>

      </div>
      <!-- end column -->

      <div class="col-span-6">
        <div class="w-full no-pb md:pt-5">
          <div class="grid-cols relative">
<!--            <div class="md:absolute top-0 left-0">-->
<!--              <ul class="list-none">-->
<!--                <li class="inline mr-8 sm:mr-5 sm:mb-3">-->
<!--                  <Button button-class="cms-button bg-cmsOrange text-white">-->
<!--                    <template slot="name">-->
<!--                      Xóa something-->
<!--                    </template>-->
<!--                  </Button>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
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
import ModalPicker from "@/components/client/ModalPicker";
import InlineTags from "@/components/client/InlineTags";
import ModalMenuPickerCollapse from "@/components/client/ModalMenuPickerCollapse";
import SelectOption from "@/components/client/SelectOption";

export default {
  components: {
    SelectOption,
    InlineTags,
    ModalPicker,
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
      imgUrl: '',
      optionDataSelect: [
        { name: 'Cửa hàng chính' },
        { name: 'Cửa hàng phụ' },
        { name: 'Cửa hàng phụ phụ' },
      ],
      optionDataTags: [
        {
          name: 'Chờ lấy hàng',
          closeTag: true,
        },
      ],
      optionDataSelect2: [
        { name: 'collection' },
      ],
      modalComponent: [
        {},
        {
          id: 'pageCategoryCreate-2',
          name: ModalMenuPickerCollapse,
          width: 720,
          shiftX: 0
        }
      ]
    };
  },
  methods: {
    uploadImage() {
      if(this.imgUrl) this.imgUrl = ''
      else this.imgUrl = 'https://picsum.photos/400/300'
    },
  }
};
</script>
