<template>
  <div class="w-full overflow-hidden">
    <Table class="table-category-condition">
      <tbody class="box-table-body table-category-condition__body" slot="body">

      <tr v-for="(data, index) in optionDataTable" :key="index" class="px-3">
        <td>
          <div class="table-category-condition__body-content">
            <CheckType
                main-class="ml-0 no-mr"
                v-model="allCheckStatus"
                :val="data.id"/>
          </div>
        </td>
        <td>
          <div class="table-category-condition__body-content">
            <div>
              <template v-if="data.img">
                <img :src="data.img" class="mx-auto w-10 h-10 max-w-10 min-w-10" alt="">
              </template>
              <template v-else>
                <SquareSVG class="mx-auto w-10 h-10 max-w-10 min-w-10 fill-menuIcon hover:filter-none hover:fill-menuIcon"/>
              </template>
            </div>
          </div>
        </td>
        <td>
          <div class="table-category-condition__body-content">
            <h3 class="cms-typo text-sm text-buttonAndURL">{{ data.name }}</h3>
          </div>
        </td>
        <td>
          <div class="table-category-condition__body-content">
            <h3 class="cms-typo text-14px text-menuItem">{{ data.count }}</h3>
          </div>
        </td>
        <td>
          <div class="table-category-condition__body-content">
            <h3 class="cms-typo text-14px text-menuItem">{{ data.price }}</h3>
          </div>
        </td>
<!--        <td>-->
<!--          <div class="w-full text-right">-->
<!--            <a href="#" class="text-menuIcon"><CloseSVG class="w-3 inline"/></a>-->
<!--          </div>-->
<!--        </td>-->
      </tr>
      <tr class="px-3">
        <td colspan="4" class="table-category-condition__footer w-full">
          <div class="flex items-center">
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
        </td>
        <td class="table-category-condition__footer">
          <Button button-class="cms-button cms-button-blue">
            <template slot="name">
              Thêm
            </template>
          </Button>
        </td>
      </tr>
    </tbody>
<!--      <p class="cms-typo text-13px text-labelAndTitle mt-5" slot="outside">Hiển thị 100 kết quả của 385</p>-->
    </Table>
  </div>
</template>

<script>
import Table from '@/components/client/Table.vue';

import {
  SquareSVG
} from '@/components/SVGs'
import CheckType from "@/components/client/CheckType";
import Button from "@/components/client/Button";

export default {
  name: "TableCondition",
  components: {
    Button,
    CheckType,
    SquareSVG,
    Table
  },
  data() {
    return {
      allCheckStatus: [],
      optionDataTable: [
        {
          id: '001',
          img: 'https://picsum.photos/40',
          name: 'Combo cần câu cá',
          count: '— 987 sp - 18 loại',
          price: '123,321,000đ',
        },
        {
          id: '002',
          img: 'https://picsum.photos/40',
          name: 'Cần bạo lực',
          count: '— 7 sp - 6 loại',
          price: '3,321,000đ',
        },
        {
          id: '003',
          img: 'https://picsum.photos/40',
          name: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          count: '— 987 sp - 18 loại',
          price: '21,000đ',
        },
        {
          id: '004',
          img: 'https://picsum.photos/40',
          name: 'Cần lure siêu chắc',
          count: '— 12 sp - 4 loại',
          price: '321,000đ',
        },
        {
          id: '005',
          name: 'Cần đánh lục xa bờ Navigod',
          count: '— 356 sp - 15 loại',
          price: '3,321,000đ',
        },
      ],
    };
  },
  methods: {
    action() {
      this.selectAll = !this.selectAll
    },
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
}
</script>

<style lang="scss">
.table {
  &-category-condition {
    &__header {
      &-content {
        width: calc( 100% - 1.25rem );
      }
      tr {
        @apply py-10px border-b;
        th {
          &:nth-child(1) {
            width: auto;
            min-width: 40px;
            max-width: 40px;
          }
          &:nth-child(2) {
            width: auto;
            min-width: 60px;
            max-width: 60px;
          }
          &:nth-child(3) {
            width: 100%;
            min-width: 250px;
            max-width: 250px;
          }
          &:nth-child(4) {
            width: auto;
            min-width: 150px;
            max-width: 150px;
          }
          &:nth-child(5) {
            width: 100%;
            min-width: 150px;
            max-width: 150px;
            text-align: right;
          }
        }
      }
    }
    &__body {
      &-content {
        width: calc( 100% - 1.25rem );
      }
      tr {
        @apply py-15px;
        &:not(:last-child) {
          @apply border-b;
        }
        &:hover, .active {
          @apply bg-gray-200;
        }
        td {
          &:not(.table-category-condition__footer) {
            &:nth-child(1) {
              width: auto;
              min-width: 40px;
              max-width: 40px;
            }
            &:nth-child(2) {
              width: auto;
              min-width: 60px;
              max-width: 60px;
            }
            &:nth-child(3) {
              width: 100%;
              min-width: 250px;
              max-width: 250px;
            }
            &:nth-child(4) {
              width: auto;
              min-width: 150px;
              max-width: 150px;
            }
            &:nth-child(5) {
              width: auto;
              min-width: 150px;
              max-width: 150px;
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>
