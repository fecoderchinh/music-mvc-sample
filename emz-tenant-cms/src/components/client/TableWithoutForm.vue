<template>
  <!-- eslint-disable max-len -->
  <Table class="table-withoutform">
    <tbody class="box-table-body table-withoutform__body" slot="body">
      <tr class="border-b py-3" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex">
        <td>
          <div class="table-withoutform__body-content">
            <img src="https://picsum.photos/60/60" class="mx-auto">
          </div>
        </td>
        <td>
          <div class="table-withoutform__body-content truncate">
            <h3 class="text-standardCMS text-buttonAndURL w-full truncate"><a href="#">{{ data.name }}</a></h3>
            <div class="w-full truncate">
              <span class="inline items-center" v-for="(prop, propIndex) in data.props" :key="propIndex">
                <span class="cms-typo inline text-13px" :class="'text-'+prop.propColor">{{ prop.propName }}</span>
                <EllipseSVG class="w-1 h-1 inline mx-1 fill-menuIcon" v-if="propIndex + 1 < data.props.length"/>
              </span>
            </div>
          </div>
        </td>
        <td>
          <div class="table-withoutform__body-content truncate text-right">
            <h3 class="cms-typo text-14px text-buttonAndURL">
              {{ data.price }}đ
            </h3>
          </div>
        </td>
        <td>
          <div class="table-withoutform__body-content">
            <h3 class="cms-typo text-14px text-menuItem">
              <span class="mr-3">x </span> {{ data.quantity }}
            </h3>
          </div>
        </td>
        <td>
          <div class="w-full truncate text-right">
            <h3 class="cms-typo text-14px text-menuItem">
              {{ formatNumber(parseInt( data.price.split(',').join('') )*parseInt( data.quantity.split(',').join('') )) }}đ
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
} from '../SVGs.vue';

export default {
  components: {
    EllipseSVG,
    Table,
  },
  data() {
    return {
      optionDataTable: [
        {
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
          price: '123,450,000',
          quantity: '3',
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
          price: '123',
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
          price: '12',
          quantity: '432',
        },
      ],
    };
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
  },
};
</script>

<style lang="scss">
  .table {
    &-withoutform {
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          > td {
            &:nth-child(1) {
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(2) {
              min-width: 385px;
              max-width: 385px;
            }
            &:nth-child(3) {
              min-width: 110px;
              max-width: 110px;
            }
            &:nth-child(4) {
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(5) {
              min-width: 110px;
              max-width: 110px;
            }
          }
        }
      }
    }
  }
</style>
