<template>
  <!-- eslint-disable max-len -->
  <Table class="table-blogcomments">
    <thead class="box-table-header table-blogcomments__header" slot="header">
      <tr v-if="allCheckStatus.length !== 0">
        <TableActions @closeAction="action()" :optionData="tableActionsData" :isFull="allCheckStatus.length === optionDataTable.length">
          <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
        </TableActions>
      </tr>
      <tr class="pl-3" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-blogcomments__header-content" @click="selectAll = !selectAll">
            <ActionCheckbox/>
          </div>
        </th>
        <th>
          <div class="table-blogcomments__header-content text-left"/>
        </th>
        <th>
          <div class="table-blogcomments__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Người bình luận
            </h3>
          </div>
        </th>
        <th>
          <div class="table-blogcomments__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Bài viết
            </h3>
          </div>
        </th>
        <th>
          <div class="table-blogcomments__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Nội dung bình luận
            </h3>
          </div>
        </th>
        <th>
          <div class="table-blogcomments__header-content text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Hành động
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-blogcomments__body" slot="body">

      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-blogcomments__body-content">
            <div class="cms-checkbox">
              <input
                  :id="data.id"
                  type="checkbox"
                  :value="data.id"
                  v-model="allCheckStatus"
              />
              <label :for="data.id" class="text-standardCMS text-menuItem text-14px">
                <span class="square"><span class="square-inner"></span></span>
              </label>
            </div>
          </div>
        </td>
        <td>
          <div class="table-blogcomments__body-content">
            <template v-if="data.img">
              <img :src="data.img" alt="" class="rounded-full">
            </template>
            <template v-else>
              <SquareSVG class="w-60px h-60px rounded-full fill-placeholderStyle hover:fill-placeholderStyle"/>
            </template>
          </div>
        </td>
        <td>
          <div class="table-blogcomments__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL truncate">
              <a href="#">{{ data.commentator }}</a>
              <p class="text-menuItem">{{ data.cmtDate }}</p>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-blogcomments__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL">
              {{ data.cmtPost }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-blogcomments__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.cmtContent }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-blogcomments__body-content text-right">
            <h3 class="cms-typo text-14px text-buttonAndURL">
              <a class="mx-3" href="#">Xóa</a>
              <a class="mx-3" href="#">Xem</a>
              <a class="mx-3" href="#">Duyệt</a>
              <a class="ml-3" href="#">Trả lời</a>
            </h3>
          </div>
        </td>
      </tr>
    </tbody>
    <p class="cms-typo text-13px text-labelAndTitle mt-5" slot="outside">Hiển thị 100 kết quả của 385</p>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';

import {
  SquareSVG,
} from '@/components/SVGs.vue';
import TableActions from "@/components/client/TableActions";
import ActionCheckbox from "@/components/client/ActionCheckbox";

export default {
  components: {
    ActionCheckbox,
    TableActions,
    Table,
    SquareSVG,
  },
  data() {
    return {
      allCheckStatus: [],
      tableActionsData: [
        {
          label: 'Action 1',
        },
        {
          label: 'Action 2',
        },
      ],
      optionDataTable: [
        {
          id: '1',
          img: 'https://picsum.photos/60',
          commentator: 'Mem Lang Thang',
          cmtDate: '30/12/2019  1:33',
          cmtPost: 'Kinh nghiệm bán hàng siêu tốc',
          cmtContent: 'Tốc độ bán hàng online mùa covid tăng nhanh từng ngày',
        },
        {
          id: '2',
          img: 'https://picsum.photos/60',
          commentator: 'NameLong',
          cmtDate: '30/12/2019  1:33',
          cmtPost: 'Tốc độ bán hàng online mùa covid tăng nhanh từng ngày',
          cmtContent: 'Tốc độ bán hàng online mùa covid tăng nhanh từng ngày',
        },
        {
          id: '3',
          img: 'https://picsum.photos/60',
          commentator: 'NameLong',
          cmtDate: '30/12/2019  1:33',
          cmtPost: 'Những điểm quan trọng nhất khi tạo website',
          cmtContent: 'Những điểm quan trọng nhất khi tạo website',
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
};
</script>

<style lang="scss">
  .table {
    &-blogcomments {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply pb-15px border-b;
          th {
            &:nth-child(1) {
              min-width: 50px;
              max-width: 50px;
            }
            &:nth-child(2) {
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(4) {
              min-width: 300px;
              max-width: 300px;
            }
            &:nth-child(5) {
              min-width: 300px;
              max-width: 300px;
            }
            &:nth-child(6) {
              min-width: 300px;
              max-width: 300px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply py-5px border-b;
          &:hover, .active {
            @apply bg-gray-200;
          }
          td {
            &:nth-child(1) {
              min-width: 50px;
              max-width: 50px;
            }
            &:nth-child(2) {
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(4) {
              min-width: 300px;
              max-width: 300px;
            }
            &:nth-child(5) {
              min-width: 300px;
              max-width: 300px;
            }
            &:nth-child(6) {
              min-width: 300px;
              max-width: 300px;
            }
          }
        }
      }
    }
  }
</style>
