<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 fill-labelAndTitle mr-3 inline"/>
            Chọn menu
          </template>
        </Button>

      </h3>
    </div>

    <div class="grid gap-5" slot="body">

      <CardBlockListMenuPicker :listMenu="this.listMenu1">
        <template slot="header">Danh mục chính</template>
      </CardBlockListMenuPicker>

      <CardBlockListMenuPicker :listMenu="this.listMenu2">
        <template slot="header">Trang chủ</template>
      </CardBlockListMenuPicker>

      <h3 class="cms-typo text-14px text-labelAndTitle">
        Kéo <SixDotsSVG class="w-3 h-3 fill-placeholderStyle stroke-placeholderStyle inline"/> để thay đổi vị trí
      </h3>

    </div>

    <ul class="md:text-right list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
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

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import Button from '@/components/client/Button.vue';
import CardBlockListMenuPicker from '@/components/client/CardBlockListMenuPicker.vue';

import {
  LongArrowSVG,
  SixDotsSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    Button,
    LongArrowSVG,
    CardBlockListMenuPicker,
    SixDotsSVG,
  },
  data() {
    return {
      listMenu1: [
        {
          levelZeroItem: 'Trang chủ',
          levelZeroUrl: '#',
        },
        {
          levelZeroItem: 'Sản phẩm',
          levelZeroUrl: '#',
          addon: true,
          levelOne: [
            {
              levelOneItem: 'Sản phẩm khuyến mại',
              levelOneUrl: '#',
              addon: true,
            },
            {
              levelOneItem: 'Sản phẩm mới nhất',
              levelOneUrl: '#',
              addon: true,
            },
            {
              levelOneItem: 'Sản phẩm nỗi bật',
              levelOneUrl: '#',
              levelTwo: [
                {
                  levelTwoItem: 'Sản phẩm mới nhất',
                  levelTwoUrl: '#',
                },
              ],
            },
            {
              levelOneItem: 'Điện thoại',
              levelOneUrl: '#',
              addon: true,
            },
            {
              levelOneItem: 'Máy tính bảng',
              levelOneUrl: '#',
              addon: true,
            },
          ],
        },
        {
          levelZeroItem: 'Tin tức',
          levelZeroUrl: '#',
        },
        {
          levelZeroItem: 'Giới thiệu',
          levelZeroUrl: '#',
        },
        {
          levelZeroItem: 'Liên hệ',
          levelZeroUrl: '#',
        },
      ],
      listMenu2: [
        {
          levelZeroItem: 'Sản phẩm khuyến mại',
          levelZeroUrl: '#',
          addon: true,
          levelOne: [
            {
              levelOneItem: 'Điện thoại',
              levelOneUrl: '#',
              addon: true,
            },
            {
              levelOneItem: 'Máy tính bảng',
              levelOneUrl: '#',
              addon: true,
            },
            {
              levelOneItem: 'Phụ kiện',
              levelOneUrl: '#',
              levelTwo: [
                {
                  levelTwoItem: 'Pin dự phòng',
                  levelTwoUrl: '#',
                },
              ],
            },
            {
              levelOneItem: 'Ốp lưng',
              levelOneUrl: '#',
              addon: true,
            },
            {
              levelOneItem: 'Bao da',
              levelOneUrl: '#',
              addon: true,
            },
          ],
        },
        {
          levelZeroItem: 'Sản phẩm nổi bật',
          levelZeroUrl: '#',
          addon: true,
        },
        {
          levelZeroItem: 'Sản phẩm mới',
          levelZeroUrl: '#',
          addon: true,
        },
        {
          levelZeroItem: 'Sản phẩm bán chạy nhất',
          levelZeroUrl: '#',
          addon: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
