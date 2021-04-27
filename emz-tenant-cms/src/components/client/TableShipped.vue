<template>
  <!-- eslint-disable max-len -->
  <Table class="table-shipped">
    <thead class="box-table-header table-shipped__header" slot="header">
      <tr class="border-b pb-3">
        <th>
          <div class="table-shipped__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Sản phẩm
            </h3>
          </div>
        </th>
        <th>
          <div class="table-shipped__header-content"/>
        </th>
        <th>
          <div class="table-shipped__header-content">
            <h3 class="cms-typo text-14px text-labelAndTitle text-right">
              Khối lượng
            </h3>
          </div>
        </th>
        <th>
          <div class="w-full">
            <h3 class="cms-typo text-14px text-labelAndTitle text-right">
              Số lượng giao
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-shipped__body" slot="body">
      <tr class="border-b py-10px" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex">
        <td>
          <div class="table-shipped__body-content">
            <img src="https://picsum.photos/60" v-if="data.img">
            <SquareSVG class="w-60px fill-menuIcon" v-else/>
          </div>
        </td>
        <td>
          <div class="table-shipped__body-content">
            <h3 class="text-standardCMS text-buttonAndURL w-full truncate">
              <a href="#">{{ data.name }}</a>
            </h3>
            <div class="w-full truncate">
              <span class="inline items-center" v-for="(prop, propIndex) in data.props" :key="propIndex">
                <span class="cms-typo inline text-13px" :class="'text-'+prop.propColor">{{ prop.propName }}</span>
                <EllipseSVG class="w-1 h-1 inline mx-1 fill-menuIcon" v-if="propIndex + 1 < data.props.length"/>
              </span>
            </div>
          </div>
        </td>
        <td>
          <div class="table-withform__body-content text-right">
            <h3 class="cms-typo text-14px text-menuItem truncate">
              {{ data.weight }}g
            </h3>
          </div>
        </td>
        <td>
          <div class="w-full text-right">
            <h3 class="cms-typo text-14px text-menuItem truncate">
              {{ data.quantity }}
            </h3>
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';

import {
  EllipseSVG,
  SquareSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    EllipseSVG,
    Table,
    SquareSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          img: 'https://picsum.photos/60',
          name: 'Tóc đẹp xinh',
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
          weight: '1234',
          quantity: '4321',
        },
        {
          name: 'Tóc đẹp xinh xinh',
          props: [
            {
              propName: 'Ngắn',
              propColor: 'cmsRed',
            },
            {
              propName: 'Xanh',
              propColor: 'cmsGreen',
            },
          ],
          weight: '123',
          quantity: '431',
        },
        {
          name: 'Tóc xinh',
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
          weight: '12',
          quantity: '432',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .table {
    &-shipped {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          > th {
            &:nth-child(1) {
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(2) {
              min-width: 465px;
              max-width: 465px;
            }
            &:nth-child(3) {
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(4) {
              min-width: 120px;
              max-width: 120px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          > td {
            &:nth-child(1) {
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(2) {
              min-width: 465px;
              max-width: 465px;
            }
            &:nth-child(3) {
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(4) {
              min-width: 120px;
              max-width: 120px;
            }
          }
        }
      }
    }
  }
</style>
