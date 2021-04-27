<template>
  <!-- eslint-disable max-len -->
  <div class="p-0 search-box-content">

    <div class="w-full border-b">
      <div class="w-full py-10px px-5 no-mb bg-sidebarHover">
        <div class="w-full flex">
          <div class="w-4 min-w-4 max-w-4 mr-5 inline-flex items-center">
            <AddLibrarySVG class="w-4 h-4 fill-buttonAndURL hover:fill-buttonAndURL hover:filter-none" />
          </div>
          <div class="inline-flex items-center flex-1 overflow-hidden">
            <ModalQuickAdd/>
          </div>
        </div>
      </div>
    </div>

    <div class="search-box-content-order-table" :class="optionDataTable.length > 5 ? 'table-overflow' : ''">

      <table class="w-full">
        <tbody>
          <tr class="hover:bg-gray-200" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex" @click="data.rowCheck = !data.rowCheck" :class="data.rowCheck ? 'bg-gray-200' : ''">
            <td>
              <CheckType
                mainClass="no-mr"
                :checked="data.rowCheck"/>
            </td>
            <td class="">
              <div>
                <template v-if="data.img">
                  <img :src="data.img" class="mx-auto w-10 h-10 max-w-10 min-w-10">
                </template>
                <template v-else>
                  <SquareSVG class="mx-auto w-10 h-10 max-w-10 min-w-10 fill-menuIcon hover:filter-none hover:fill-menuIcon"/>
                </template>
              </div>
            </td>
            <td>
              <div class="w-full">
                <h3 class="cms-typo text-14px text-buttonAndURL">{{ data.name }}</h3>
                <ul class="list-none" v-if="data.props">
                  <li class="inline" v-for="(prop, propIndex) in data.props" :key="propIndex">
                    <span class="cms-typo text-13px" :class="'text-'+prop.propColor">{{ prop.propName }}</span>
                    <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon inline" v-if="propIndex + 1 !== data.props.length"/>
                  </li>
                </ul>
              </div>
            </td>
            <td><span class="cms-typo text-14px text-menuItem">{{ data.count }}</span></td>
            <td><span class="cms-typo text-14px text-labelAndTitle">{{ data.price }}</span></td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="grid-cols">
      <div class="w-full py-10px no-mb border-t">
        <ul class="list-none md:h-8 md:text-right px-5">
          <li class="inline mr-10">
            <Button button-class="bg-buttonAndURL rounded-sm group text-menuItem text-14px font-lato font-medium hover:text-white w-16 h-30px px-3 relative">
              <template slot="name">
                <span class="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 text-white text-14px group-hover:fill-white">Chọn</span>
              </template>
            </Button>
          </li>
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
import CheckType from '@/components/client/CheckType.vue';
import Button from '@/components/client/Button.vue';
import ModalQuickAdd from '@/components/client/ModalQuickAdd.vue';

import {
  EllipseSVG,
  AddLibrarySVG,
  LongArrowSVG,
  SquareSVG,
} from '../SVGs.vue';

export default {
  components: {
    EllipseSVG,
    AddLibrarySVG,
    Button,
    LongArrowSVG,
    CheckType,
    SquareSVG,
    ModalQuickAdd,
  },
  data() {
    return {
      optionDataTable: [
        {
          rowCheck: false,
          img: 'https://picsum.photos/40',
          name: 'Combo cần câu cá',
          props: [
            {
              propName: 'iPhone 11',
              propColor: 'cmsRed',
            },
            {
              propName: 'Trắng',
              propColor: 'cmsGreen',
            },
          ],
          count: '1,789 sản phẩm',
          price: '123,321,000đ',
        },
        {
          rowCheck: false,
          img: 'https://picsum.photos/40',
          name: 'Cần bạo lực',
          props: [
            {
              propName: 'Cong',
              propColor: 'cmsRed',
            },
            {
              propName: '7.2m',
              propColor: 'cmsGreen',
            },
            {
              propName: 'Thẳng',
              propColor: 'cmsOrange',
            },
          ],
          count: '18 sản phẩm',
          price: '3,321,000đ',
        },
        {
          rowCheck: false,
          img: 'https://picsum.photos/40',
          name: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          count: '0 sản phẩm',
          price: '21,000đ',
        },
        {
          rowCheck: false,
          img: 'https://picsum.photos/40',
          name: 'Cần lure siêu chắc',
          props: [
            {
              propName: 'Ngắn',
              propColor: 'cmsRed',
            },
            {
              propName: 'Xanh',
              propColor: 'cmsGreen',
            },
            {
              propName: 'Uốn',
              propColor: 'cmsOrange',
            },
          ],
          count: '12 sản phẩm',
          price: '321,000đ',
        },
        {
          rowCheck: false,
          name: 'Cần đánh lục xa bờ Navigod',
          count: '356 sản phẩm',
          price: '3,321,000đ',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .search-box {
    &-content {
      @apply overflow-hidden;
      &-order {
        &-table {
          @apply overflow-y-auto;
          @media (pointer:coarse) {
            @apply w-full;
          }
          max-height: calc( 100vh - 110px - 5rem );
          &.table-overflow {
            width: calc( 100% + 17px );
          }
          @screen sm {
            max-height: calc( 100vh - 180px - 5rem );
          }
          @media (max-width: 425px) {
            max-height: calc( 100vh - 220px - 5rem );
          }
          table {
            @screen sm {
              width: 200vw;
            }
            tr {
              td {
                @apply py-2;
                &:first-child {
                  @apply pl-5;
                }
                &:last-child {
                  @apply pr-5 text-right;
                }
                &:nth-child(1) {
                  width: 5%;
                }
                &:nth-child(2) {
                  width: 10%;
                }
                &:nth-child(3) {
                  width: 45%;
                }
                &:nth-child(4) {
                  width: 20%;
                }
                &:nth-child(5) {
                  width: 20%;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
