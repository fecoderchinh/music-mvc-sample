<template>
  <!-- eslint-disable max-len -->
  <div>
    <Widget classes="no-mb no-pb no-rounded-b">
      <div class="flex flex-auto mb-4" slot="title">
        <div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle">
          <h3>Phân loại</h3>
        </div>
        <div class="flex relative whitespace-no-wrap">
          <a href="#" class="font-lato font-medium text-14px text-buttonAndURL xl:text-right block">Xem tất cả</a>
        </div>
      </div>
      <template slot="content">
        <div class="grid-cols">
          <div class="w-full">
            <InputType
              id="add-tag"
              name="add-tag"
              placeholder="Nhập phân loại, vi dụ: Áo phông"
              button="reset"/>
          </div>
        </div>

        <div class="cms-label text-14px mb-4">
          <h3>Thương hiệu</h3>
        </div>

        <div class="grid-cols">
          <div class="w-full">
            <TreeSelect :option-data="optionDataTree" placeholder="Tìm kiếm thương hiệu"/>
          </div>
        </div>

      </template>
    </Widget>

    <Widget classes="no-mb no-pb no-rounded-t no-b-t">
      <template slot="title">
        <label for="dm-website" class="inline-flex items-center cursor-pointer">
          Danh mục website <span class="text-cmsRed">*</span>
          <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
        </label>
      </template>
      <template slot="content">

        <div class="grid-cols">
          <div class="w-full">
            <TreeSelect :option-data="optionDataTree" placeholder="Tìm kiếm danh mục"/>
          </div>
        </div>

        <div class="cms-label text-14px mb-4">
          <label for="dm-hethong" class="inline-flex items-center cursor-pointer">
            Danh mục hệ thống <span class="text-cmsRed">*</span>
            <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
          </label>
        </div>

        <div class="grid-cols">
          <div class="w-full">
            <TreeSelect :option-data="optionDataTree" placeholder="Tìm kiếm danh mục"/>
          </div>
        </div>

      </template>
    </Widget>
    </div>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import InputType from '@/components/client/InputType.vue';
import TreeSelect from '@/components/client/TreeSelect.vue';

import {
  InformationSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Widget,
    InformationSVG,
    TreeSelect,
    InputType,
  },
  data() {
    return {
      optionDataSelect: [
        { name: 'Cửa hàng chính' },
        { name: 'Cửa hàng phụ' },
        { name: 'Cửa hàng phụ phụ' },
      ],
      optionDataTree: [
        {
          id: '1',
          label: 'Giày thời trang nữ',
          children: [
            {
              id: '11',
              label: 'Giày thời trang nam',
            },
            {
              id: '12',
              label: 'Giày thời trang nữ',
            },
            {
              id: '13',
              label: 'Giày công sở',
            },
            {
              id: '14',
              label: 'Giày chạy bộ',
            },
            {
              id: '15',
              label: 'Giày mùa Đông',
            },
            {
              id: '16',
              label: 'Giày mùa Xuân',
            },
          ],
        },
        {
          id: '2',
          label: 'Giày công sở 2',
          children: [
            {
              id: '21',
              label: 'Giày thời trang nam 2',
            },
            {
              id: '22',
              label: 'Giày thời trang nữ 2',
            },
            {
              id: '23',
              label: 'Giày công sở 2',
            },
            {
              id: '24',
              label: 'Giày chạy bộ 2',
            },
            {
              id: '25',
              label: 'Giày mùa Đông 2',
            },
            {
              id: '26',
              label: 'Giày mùa Xuân 2',
            },
          ],
        },
        {
          id: '3',
          label: 'Giày mùa Đông 3',
          children: [
            {
              id: '31',
              label: 'Giày thời trang nam 3',
            },
            {
              id: '32',
              label: 'Giày thời trang nữ 3',
            },
            {
              id: '33',
              label: 'Giày công sở 3',
            },
            {
              id: '34',
              label: 'Giày chạy bộ 3',
            },
            {
              id: '35',
              label: 'Giày mùa Đông 3',
            },
            {
              id: '36',
              label: 'Giày mùa Xuân 3',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
