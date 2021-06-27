<template>
  <!-- eslint-disable max-len -->
  <Table class="table-bloglist">
    <thead class="box-table-header table-bloglist__header" slot="header">
      <tr v-if="allCheckStatus.length !== 0">
        <TableActions @closeAction="action()" :optionData="tableActionsData" :isFull="allCheckStatus.length === optionDataTable.length">
          <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
        </TableActions>
      </tr>
      <tr class="pl-3" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-bloglist__header-content" @click="selectAll = !selectAll">
            <ActionCheckbox/>
          </div>
        </th>
        <th>
          <div class="table-bloglist__header-content text-left"/>
        </th>
        <th>
          <div class="table-bloglist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tiêu đề
            </h3>
          </div>
        </th>
        <th>
          <div class="table-bloglist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Danh mục
            </h3>
          </div>
        </th>
        <th>
          <div class="table-bloglist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tác giả
            </h3>
          </div>
        </th>
        <th>
          <div class="table-bloglist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày đăng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-bloglist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày cập nhật
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-bloglist__body" slot="body">

      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-bloglist__body-content">
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
          <div class="table-bloglist__body-content">
            <template v-if="data.img">
              <img :src="data.img" alt="">
            </template>
            <template v-else>
              <SquareSVG class="w-60px h-60px fill-placeholderStyle hover:fill-placeholderStyle"/>
            </template>
          </div>
        </td>
        <td>
          <div class="table-bloglist__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL truncate">
              <a href="#">{{ data.title }}</a>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-bloglist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.category }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-bloglist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.author }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-bloglist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.date }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-bloglist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.update }}
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
          label: 'Hiển thị',
        },
        {
          label: 'Ẩn bài',
        },
        {
          label: 'Thêm tags',
        },
        {
          label: 'Xóa tags',
        },
        {
          label: 'Xóa bài viết',
        }
      ],
      optionDataTable: [
        {
          id: '1',
          img: 'https://picsum.photos/60',
          title: 'Kinh nghiệm bán hàng siêu tốc',
          category: 'Kinh nghiệm',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          id: '2',
          img: 'https://picsum.photos/60',
          title: 'Spa khuyến mãi khủng',
          category: 'Kinh nghiệm',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          id: '3',
          img: 'https://picsum.photos/60',
          title: 'Tốc độ bán hàng online mùa covid tăng nhanh từng ngày',
          category: 'Kinh nghiệm',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          id: '4',
          img: 'https://picsum.photos/60',
          title: 'Những điểm quan trọng nhất khi tạo website',
          category: 'Kinh nghiệm',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          id: '5',
          img: 'https://picsum.photos/60',
          title: 'Lazada Đồ Câu Pzoom',
          category: 'Kinh nghiệm',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          id: '6',
          img: 'https://picsum.photos/60',
          title: 'Lazada Đồ Câu Pzoom',
          category: 'Kinh nghiệm',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
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
    &-bloglist {
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
              min-width: 505px;
              max-width: 505px;
            }
            &:nth-child(4) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(5) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(6) {
              min-width: 135px;
              max-width: 135px;
            }
            &:nth-child(7) {
              min-width: 135px;
              max-width: 135px;
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
              min-width: 505px;
              max-width: 505px;
            }
            &:nth-child(4) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(5) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(6) {
              min-width: 135px;
              max-width: 135px;
            }
            &:nth-child(7) {
              min-width: 135px;
              max-width: 135px;
            }
          }
        }
      }
    }
  }
</style>
