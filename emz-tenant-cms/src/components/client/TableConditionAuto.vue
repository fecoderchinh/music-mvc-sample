<template>
  <div class="w-full overflow-hidden relative">
    <Table class="table-category-condition-auto">
      <tbody class="box-table-body table-category-condition-auto__body" slot="body">

      <tr v-for="(data, index) in optionDataTable" :key="index" class="px-3">
        <td>
          <div class="table-category-condition-auto__body-content">
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
          <div class="table-category-condition-auto__body-content">
            <h3 class="cms-typo text-sm text-buttonAndURL">{{ data.name }}</h3>
          </div>
        </td>
        <td>
          <div class="table-category-condition-auto__body-content">
            <a href="#" class="text-menuIcon"><CloseSVG class="ml-auto w-4 max-w-10 min-w-10 fill-current"/></a>
          </div>
        </td>
      </tr>
      </tbody>
      <p class="cms-typo text-13px text-buttonAndURL mt-5 text-center" slot="outside">
        <a href="#" @click.prevent="showLoader = !showLoader">
          <Spinner v-if="showLoader" class="inline-block w-5 h-5 border-2"/>
          <template v-else>Xem thêm</template>
        </a>
      </p>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/client/Table.vue';

import {
  SquareSVG,
  CloseSVG
} from '@/components/SVGs'
import Spinner from "@/components/client/Spinner";

export default {
  name: "TableConditionAuto",
  components: {
    Spinner,
    SquareSVG,
    CloseSVG,
    Table
  },
  data() {
    return {
      showLoader: false,
      optionDataTable: [
        {
          img: 'https://picsum.photos/40',
          name: 'Combo cần câu cá',
        },
        {
          img: 'https://picsum.photos/40',
          name: 'Cần bạo lực',
        },
        {
          img: 'https://picsum.photos/40',
          name: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
        },
        {
          img: 'https://picsum.photos/40',
          name: 'Cần lure siêu chắc',
        },
        {
          name: 'Cần đánh lục xa bờ Navigod',
        },
      ],
    };
  }
}
</script>

<style lang="scss">
.table {
  &-category-condition-auto {
    &__header {
      &-content {
        width: calc( 100% - 1.25rem );
      }
      tr {
        @apply py-10px border-b;
        th {
          &:nth-child(1) {
            width: 60px;
            min-width: 60px;
            max-width: 60px;
          }
          &:nth-child(2) {
            width: 620px;
            min-width: 620px;
            max-width: 620px;
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
            width: 60px;
            min-width: 60px;
            max-width: 60px;
          }
          &:nth-child(2) {
            width: 620px;
            min-width: 620px;
            max-width: 620px;
          }
        }
      }
    }
  }
}
</style>
