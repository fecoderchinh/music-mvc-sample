<template>
  <!-- eslint-disable max-len -->
  <div class="p-0 search-box-content">

    <div class="w-full border-b">
      <div class="w-full py-10px px-5 no-mb bg-sidebarHover">
        <div class="w-full flex">
          <div class="w-4 min-w-4 max-w-4 mr-5 inline-flex items-center text-buttonAndURL">
            <AddLibrarySVG class="w-icon" />
          </div>
          <div class="inline-flex items-center flex-1 overflow-hidden">
            <ModalPicker
                class="w-full"
                :current-modal="modalComponent[0]"
            >
              <h3 class="cms-typo text-14px text-buttonAndURL max-w-full truncate cursor-pointer">Thêm nhanh sản phẩm hoặc dịch vụ</h3>
            </ModalPicker>
          </div>
        </div>
      </div>
    </div>

    <perfect-scrollbar :options="{
        maxScrollbarLength: 300,
        minScrollbarLength: 100,
      }">

    <div class="search-box-content-order-table" :class="optionDataTable.length > 5 ? 'table-overflow' : ''" :style="{
      'max-height': this.limitHeigth+'px'
    }">

      <table id="advanceSearchTable" class="w-full">
        <tbody>
          <tr class="hover:bg-gray-200" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex" @click="data.rowCheck = !data.rowCheck" :class="data.rowCheck ? 'bg-gray-200' : ''">
            <td>
              <CheckType
                  main-class="ml-0 no-mr"
                  v-model="allCheckStatus"
                  :val="data.id"/>
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
    </perfect-scrollbar>

    <div class="grid-cols">
      <div class="w-full py-10px no-mb border-t relative">
        <div class="md:absolute block left-0 ml-5 md:ml-10 mt-3 md:mt-0 top-50 transform -translate-y-1/2">
          <a href="javascript:void(0)" class="inline-flex items-center text-13px text-menuItem" @click="selectAll = !selectAll">
            <div class="cms-checkbox mr-3 mt-px">
              <input type="checkbox">
              <label class="text-standardCMS text-menuItem text-14px">
                <span class="square" :class="allCheckStatus.length > 0 ? 'checked' : null"><span class="square-inner"></span></span>
              </label>
            </div>
            Chọn tất cả ({{ allCheckStatus.length }})
          </a>
        </div>
        <ul class="list-none md:h-8 md:text-right px-5">
          <li class="inline mr-5">
            <Button button-class="cms-button-gray rounded-sm group text-menuItem text-14px font-lato font-medium hover:text-white w-16 h-30px px-3 relative">
              <template slot="name">
                <span class="text-menuItem text-14px">Hủy</span>
              </template>
            </Button>
          </li>
          <li class="inline">
            <Button button-class="bg-buttonAndURL rounded-sm group text-menuItem text-14px font-lato font-medium hover:text-white w-16 h-30px px-3 relative">
              <template slot="name">
                <span class="text-white text-14px group-hover:fill-white">Thêm</span>
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

import {
  EllipseSVG,
  AddLibrarySVG,
  SquareSVG,
} from '../SVGs.vue';
import ModalPicker from "@/components/client/ModalPicker";
import ModalQuickAddContent from "@/components/client/ModalQuickAddContent";

export default {
  components: {
    ModalPicker,
    EllipseSVG,
    AddLibrarySVG,
    Button,
    CheckType,
    SquareSVG,
  },
  data() {
    return {
      allCheckStatus: [],
      limitHeigth: 0,
      optionDataTable: [
        {
          id: '001',
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
          id: '002',
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
          id: '003',
          img: 'https://picsum.photos/40',
          name: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          count: '0 sản phẩm',
          price: '21,000đ',
        },
        {
          id: '004',
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
          id: '005',
          name: 'Cần đánh lục xa bờ Navigod',
          count: '356 sản phẩm',
          price: '3,321,000đ',
        },
      ],
      modalComponent: [
        {
          id: 'advanceSearchTable-1',
          name: ModalQuickAddContent,
          width: 720,
          shiftX: 0
        },
      ]
    };
  },
  mounted() {
    this.limitHeigth = this.limitHeight()
  },
  created() {
    this.limitHeigth = this.limitHeight()
  },
  methods: {
    action() {
      this.selectAll = !this.selectAll
    },
    limitHeight() {
      let height = 0
      for(let i=0;i<5;i++) {
        height += document.getElementById("advanceSearchTable").rows[i].offsetHeight
      }
      return height
    }
  },
  computed: {
    selectAll: {
      get: function () {
        return this.optionDataTable ? this.allCheckStatus.length === this.optionDataTable.length : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.optionDataTable.forEach(function (data) {
            selected.push(data.id);
          });
        }

        this.allCheckStatus = selected;
      }
    }
  },
};
</script>

<style lang="scss">
  .search-box {
    &-content {
      @apply overflow-hidden;
      &-order {
        &-table {
          //@apply overflow-y-auto;
          @media (pointer:coarse) {
            @apply w-full;
          }
          //max-height: calc( 100vh - 110px - 5rem );
          &.table-overflow {
            width: 100%;
            //width: calc( 100% + 17px );
          }
          //@screen sm {
          //  max-height: calc( 100vh - 180px - 5rem );
          //}
          //@media (max-width: 425px) {
          //  max-height: calc( 100vh - 220px - 5rem );
          //}
          table {
            //@screen sm {
            //  width: 200vw;
            //}
            tr {
              td {
                @apply p-2;
                &:first-child {
                  @apply pl-5;
                }
                &:last-child {
                  @apply pr-5 text-right;
                }
                &:nth-child(1) {
                  min-width: 40px;
                  max-width: 40px;
                }
                &:nth-child(2) {
                  min-width: 70px;
                  max-width: 70px;
                }
                &:nth-child(3) {
                  width: 100%;
                  min-width: 300px;
                  max-width: 300px;
                }
                &:nth-child(4) {
                  min-width: 145px;
                  max-width: 145px;
                }
                &:nth-child(5) {
                  width: 100%;
                  min-width: 145px;
                  max-width: 145px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
