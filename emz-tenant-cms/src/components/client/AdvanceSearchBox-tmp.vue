<template>
  <!-- eslint-disable max-len -->
  <div class="grid-cols advance-search-has-mask">
    <div class="grid-box no-mb shadow no-pl no-pr no-pb overflow-hidden">
      <div class="grid-cols mb-4 px-5">

        <div class="md:w-full xl:w-1/4 flex no-mb">
          <div class="flex items-center">
            <p class="font-lato font-medium text-14px text-placeholderStyle">120 kết quả tìm kiếm</p>
          </div>
        </div>

        <div class="md:w-full xl:w-2/3 flex no-mb sm:mt-4 xl:pl-0">
          <div class="flex items-center">

            <div class="flex flex-wrap">

              <Radio id="radio1" name="radio" label-class="text-menuItem" checked>
                <template slot="radio-text">Tất cả</template>
              </Radio>

              <Radio id="radio2" name="radio" label-class="text-menuItem">
                <template slot="radio-text">Sản phẩm</template>
              </Radio>

              <Radio id="radio3" name="radio" label-class="text-menuItem">
                <template slot="radio-text">Khách hàng</template>
              </Radio>

              <Radio id="radio4" name="radio" label-class="text-menuItem">
                <template slot="radio-text">Đơn hàng</template>
              </Radio>

             </div>

          </div>

        </div>
      </div> <!-- end grid-cols -->
      <div class="grid-cols px-5">
        <div class="w-full no-mb">
          <div class="w-full border-t"></div>
        </div>
      </div>

      <div class="w-full h-advanceSearchHeightCalculated overflow-hidden relative">
        <div class="advanceSearchList">
          <!-- ITEM -->
          <div class="grid-cols px-5" v-for="(data, index) in tbData.Items" :key="index">
            <div class="w-full xs:max-w-xs sm:max-w-sm hover:bg-sidebarHover no-mb">
              <div class="advance-search-item py-2 inline-flex items-center">
                <div class="flex-1 w-10 max-w-10 h-10 max-h-10 sm:hidden mr-3">
                  <template v-if="data.thumb === 'thumbnail'">
                    <img src="https://picsum.photos/36/36" class="w-full h-full rounded-full">
                  </template>
                  <template v-else>
                    <component v-bind:is="data.thumb" class="w-36px h-36px fill-menuIcon" />
                  </template>
                </div>
                <div class="flex-1">
                  <h3 class="text-standardCMS w-advanceSearchWidthMaximum widthCalculated widthInside truncate">{{ data.DataTitle }}</h3>
                  <div class="w-advanceSearchWidthMaximum widthCalculated widthInside truncate">
                    <ul class="list-none w-full truncate hidden-last-dot">
                      <li class="inline-flex items-center" v-for="(value, vIndex) in data.DataValue" :key="vIndex">
                        <span class="text-standardCMS text-placeholderStyle">{{ value }}</span>
                        <component v-bind:is="component" class="w-1 h-1 mx-2 fill-menuIcon" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END ITEM -->
          </div>
      </div>

      <!-- NAVIGATION -->
      <div class="grid-cols text-left md:text-right border-t px-5 h-50px items-center">
        <div class="w-full no-mb">
          <ul class="list-none md:h-8">
            <li class="inline mr-3">
              <Button button-class="bg-menuIcon hover:bg-buttonAndURL text-menuItem text-14px font-lato font-medium hover:text-white h-8 px-3">
                <template slot="name">
                  <LongArrowSVG class="w-4 h-8 fill-white"/>
                </template>
              </Button>
            </li>
            <li class="inline">
              <Button button-class="bg-menuIcon hover:bg-buttonAndURL text-menuItem text-14px font-lato font-medium hover:text-white h-8 px-3">
                <template slot="name">
                  <LongArrowSVG class="w-4 h-8 fill-white transform rotate-180"/>
                </template>
              </Button>
            </li>
          </ul>
        </div>
      </div>

    </div><!-- end grid-box -->
    <a href="#" class="advance-search-mask" @click.self.prevent="$emit('onClose')"></a>
  </div> <!-- end grid-cols -->
</template>

<script>
import Radio from './Radio.vue';
import Button from './Button.vue';

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
  .advance-search {
    &-has-mask {
      > .grid-box {
        @apply relative z-50;
      }
    }
    &-mask {
      @apply fixed top-0 left-0 w-full h-full bg-transparent cursor-default table z-40;
      @apply transition duration-300 ease-out;
    }
  }
</style>
