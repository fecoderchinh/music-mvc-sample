<template>
  <!-- eslint-disable max-len -->
  <Table class="table-menusettings">
    <thead class="box-table-header table-menusettings__header" slot="header">
    <tr class="pl-3 bg-gray-200">
      <th>
        <div class="table-menusettings__header-content text-left">
          <h3 class="text-14px text-labelAndTitle font-medium">
            Menu
          </h3>
        </div>
      </th>
      <th>
        <div class="table-menusettings__header-content text-left">
          <h3 class="text-14px text-labelAndTitle font-medium">
            Liên kết
          </h3>
        </div>
      </th>
    </tr>
    </thead>
    <tbody class="box-table-body table-menusettings__body" slot="body">

    <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
      <td>
        <div class="table-menusettings__body-content">
          <h3 class="cms-typo text-13px text-buttonAndURL">
            <a href="#" @click.self.prevent="openModal">{{ data.label }}</a>
          </h3>
        </div>
      </td>
      <td>
        <div class="table-menusettings__body-content">
          <h3 class="cms-typo text-13px text-menuItem">
            {{ data.list }}
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
import MenuSettingsModalEdit from "@/components/client/MenuSettingsModalEdit";

export default {
  components: {
    Table,
  },
  data() {
    return {
      optionDataTable: [
        {
          label: 'Main Menu',
          list: 'Trang chủ, Giới thiệu, Sản phẩm, Tin Tức, Liên hệ',
        },
        {
          label: 'Footer',
          list: 'Tìm kiếm, Giới thiệu',
        },
        {
          label: 'Thông tin',
          list: 'Trang chủ, Giới thiệu, Sản phẩm',
        },
        {
          label: 'Hỗ trợ',
          list: 'Tìm kiếm, Đăng nhập, Đăng ký, Giỏ hàng',
        },
        {
          label: 'Hướng dẫn',
          list: 'Hướng dẫn mua hàng, Hướng dẫn thanh toán, Hướng dẫn giao nhận, Điều khoản dịch vụ',
        },
        {
          label: 'Chính sách',
          list: 'Chính sách bảo mật, Chính sách vận chuyển, Chính sách đổi trả, Quy định sử dụng',
        },
      ],
    };
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal modal-lg',
      };
      const style = {
        width: 986, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(MenuSettingsModalEdit, options, style, events);
    },
  },
};
</script>

<style lang="scss">
.table {
  &-menusettings {
    &__header {
      &-content {
        width: calc( 100% - 1.25rem );
      }
      tr {
        @apply py-10px border-b;
        th {
          &:nth-child(1) {
            width: 180px;
            min-width: 180px;
            max-width: 180px;
          }
          &:nth-child(2) {
            width: 600px;
            min-width: 600px;
            max-width: 600px;
          }
        }
      }
    }
    &__body {
      &-content {
        width: calc( 100% - 1.25rem );
      }
      tr {
        @apply py-15px border-b;
        &:hover, .active {
          @apply bg-gray-200;
        }
        td {
          &:nth-child(1) {
            width: 180px;
            min-width: 180px;
            max-width: 180px;
          }
          &:nth-child(2) {
            width: 600px;
            min-width: 600px;
            max-width: 600px;
          }
        }
      }
    }
  }
}
</style>
