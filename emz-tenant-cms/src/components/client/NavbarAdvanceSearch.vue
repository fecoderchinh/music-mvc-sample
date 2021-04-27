<template>
  <!-- eslint-disable max-len -->
  <div class="p-0 navbar-search-box-content">

    <div class="grid grid-cols-6 border-b pb-3 px-5 pt-5">

      <div class="col-span-2 sm:col-span-6">
        <div class="flex items-center">
          <p class="cms-typo text-placeholderStyle text-14px">
            120 kết quả tìm kiếm
          </p>
        </div>
      </div>

      <div class="col-span-4 sm:col-span-6 sm:mt-3">
        <div class="inline-flex" v-for="(data, index) in listRadio" :key="index" :class="index + 1 !== listRadio.length ? 'mr-4' : ''">
          <Radio :id="'radio-'+index" name="radio" label-class="text-menuItem text-14px" :checked="index==0">
            <template slot="radio-text">{{ data }}</template>
          </Radio>
        </div>
      </div>

    </div>

    <div class="navbar-search-box-content-wrapper" :class="tbData.Items.length > 5 ? 'wrapper-overflow' : ''">
      <div class="-mx-5 hover:bg-gray-200 py-2 no-mb" v-for="(data, index) in tbData.Items" :key="index">
        <div class="flex px-5">
          <div class="w-36px min-w-36px max-w-36px inline-flex items-center mr-10px">
            <template v-if="data.thumb === 'thumbnail'">
              <img src="https://picsum.photos/36/36" class="w-36px h-36px mx-auto rounded-full">
            </template>
            <template v-else>
              <component v-bind:is="data.thumb" class="w-36px h-36px mx-auto fill-cmsGray" />
            </template>
          </div>
          <div class="inline-flex items-center flex-1 overflow-hidden">
            <div class="w-full">
              <h3 class="cms-typo text-14px text-menuItem max-w-full truncate"><a href="#">{{ data.DataTitle }}</a></h3>
              <ul class="list-none max-w-full truncate">
                <li class="inline-flex items-center" v-for="(value, vIndex) in data.DataValue" :key="vIndex">
                  <span class="text-standardCMS text-placeholderStyle">{{ value }}</span>
                  <component v-bind:is="component" class="w-1 h-1 mx-2 fill-cmsGray" v-if="vIndex + 1 !== data.DataValue.length" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-cols">
      <div class="w-full py-10px no-mb border-t">
        <ul class="list-none md:h-8 md:text-right px-5">
          <li class="inline mr-3">
            <Button button-class="bg-cmsGray group text-menuItem text-14px font-lato font-medium hover:text-white w-30px h-30px px-3 relative">
              <template slot="name">
                <LongArrowSVG class="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 w-4 fill-white group-hover:fill-white"/>
              </template>
            </Button>
          </li>
          <li class="inline">
            <Button button-class="bg-cmsGray group text-menuItem text-14px font-lato font-medium hover:text-white w-30px h-30px px-3 relative">
              <template slot="name">
                <LongArrowSVG class="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 w-4 fill-white group-hover:fill-white transform rotate-180"/>
              </template>
            </Button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import Radio from '@/components/client/Radio.vue';
import Button from '@/components/client/Button.vue';

import {
  EllipseSVG,
  AvatarSVG,
  CashFillSVG,
  LongArrowSVG,
} from '../SVGs.vue';

export default {
  components: {
    Radio,
    EllipseSVG,
    AvatarSVG,
    CashFillSVG,
    Button,
    LongArrowSVG,
  },
  data() {
    return {
      listRadio: [
        'Tất cả', 'Sản phẩm', 'Khách hàng', 'Đơn hàng',
      ],
      component: 'EllipseSVG',
      tbData: {
        Items: [
          {
            thumb: 'AvatarSVG',
            DataTitle: 'Mem Lang Thang',
            DataValue: ['0123 456 789', 'email@domain.com'],
          },
          {
            thumb: 'thumbnail',
            DataTitle: 'Chỉnh đẹp trai',
            DataValue: ['0123 456 789', 'Chinhdeptrai@domain.com'],
          },
          {
            thumb: 'thumbnail',
            DataTitle: 'Củ sạc Samsung Android màu trắng',
            DataValue: ['96 phiên bản', '990 sản phẩm trong kho'],
          },
          {
            thumb: 'thumbnail',
            DataTitle: 'iPhone 11 mà Gold cực phẩm',
            DataValue: ['24/12/2020 12:45'],
          },
          {
            thumb: 'CashFillSVG',
            DataTitle: 'Đơn hàng #2002',
            DataValue: ['24/12/2020 12:45'],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
  .navbar-search-box {
    &-content {
      @apply overflow-hidden;
      &-wrapper {
        @apply overflow-y-auto px-5;
        @media (pointer:coarse) {
          @apply w-full;
        }
        max-height: calc( 100vh - 110px - 5rem );
        &.wrapper-overflow {
          width: calc( 100% + 17px );
        }
        @screen sm {
          max-height: calc( 100vh - 180px - 5rem );
        }
        @media (max-width: 425px) {
          max-height: calc( 100vh - 220px - 5rem );
        }
      }
    }
  }
</style>
