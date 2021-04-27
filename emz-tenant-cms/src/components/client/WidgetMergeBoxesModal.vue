<template>
  <!-- eslint-disable max-len -->
  <div>
    <Widget classes="no-mb no-pb no-rounded-b">
      <div class="flex flex-auto mb-4" slot="title">
        <div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle">
          <label for="add-tag" class="inline-flex items-center cursor-pointer">
            Phân loại
          </label>
        </div>
        <div class="flex relative whitespace-no-wrap">
          <a href="#" class="font-lato font-medium text-14px text-buttonAndURL xl:text-right block">Xem tất cả</a>
        </div>
      </div>

      <div class="grid-cols" slot="content">
        <div class="w-full">
          <InputType
            id="add-tag"
            name="add-tag"
            placeholder="Nhập phân loại, vi dụ: Áo phông"
            button="reset"/>
        </div>
      </div>
    </Widget>

    <Widget classes="no-mb no-pb no-rounded-t no-b-t">
      <template slot="title">
        <label for="dm-website" class="inline-flex items-center cursor-pointer">
          Danh mục website
          <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
        </label>
      </template>
      <template slot="content">

        <div class="grid-cols">
          <div class="w-full">
            <InputType
              id="dm-website"
              name="dm-website"
              placeholder="Tìm kiếm danh mục"
              button="reset"
              input-class="cms-input__with-icon"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon"/></template>
            </InputType>
          </div>
        </div>

        <div class="cms-label text-14px mb-4">
          <label for="dm-hethong" class="inline-flex items-center cursor-pointer">
            Danh mục hệ thống
            <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
          </label>
        </div>

        <div class="grid-cols">
          <div class="w-full">
            <InputType
              id="dm-hethong"
              name="dm-hethong"
              placeholder="Tìm kiếm danh mục"
              button="reset"
              input-class="cms-input__with-icon"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon"/></template>
            </InputType>
          </div>
        </div>

      </template>
    </Widget>
  </div>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import InputType from '@/components/client/InputType.vue';

import {
  InformationSVG,
  SearchSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Widget,
    InformationSVG,
    SearchSVG,
    InputType,
  },
};
</script>

<style lang="scss"></style>
