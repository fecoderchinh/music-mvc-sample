<template>
  <!-- eslint-disable max-len -->
  <div class="p-0 search-box-content">

    <div class="grid-cols px-5 border-b">
      <div class="w-full py-2 no-mb">
        <div class="w-full flex">
          <div class="w-36px min-w-36px max-w-36px inline-flex items-center mr-10px">
            <AvatarSVG class="w-36px h-36px fill-buttonAndURL hover:fill-buttonAndURL hover:filter-none"/>
          </div>
          <div class="inline-flex items-center flex-1 overflow-hidden">
            <div class="w-full">
              <h3 class="cms-typo text-14px text-buttonAndURL max-w-full truncate"><a href="#">Thêm nhân viên mới</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="search-box-content-staff" :class="tbData.Items.length > 5 ? 'staff-overflow' : ''">

      <div class="hover:bg-gray-200 py-2 -mx-5" v-for="(data, index) in tbData.Items" :key="index">
        <div class="px-5 flex">
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
      component: 'EllipseSVG',
      tbData: {
        Items: [
          {
            thumb: 'thumbnail',
            DataTitle: 'Nguyễn Văn A',
            DataValue: ['0123 456 789'],
          },
          {
            thumb: 'thumbnail',
            DataTitle: 'Lê Văn B',
            DataValue: ['0123 456 789'],
          },
          {
            thumb: 'thumbnail',
            DataTitle: 'Đào Thị C',
            DataValue: ['0123 456 789'],
          },
          {
            thumb: 'thumbnail',
            DataTitle: 'Lý Văn D',
            DataValue: ['0123 456 789'],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
  .search-box {
    &-content {
      @apply overflow-hidden;
      &-staff {
        @apply overflow-y-auto px-5;
        @media (pointer:coarse) {
          @apply w-full;
        }
        max-height: calc( 100vh - 110px - 5rem );
        &.staff-overflow {
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
