<template>
  <!-- eslint-disable max-len -->
  <Table class="table-withform">
    <tbody class="box-table-body table-withform__body" slot="body">
      <tr class="border-b py-3" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex">
        <td>
          <div class="table-withform__body-content text-menuIcon">
            <img src="https://picsum.photos/60" class="mx-auto" v-if="data.img">
            <NoImgSVG class="w-60px" v-else/>
          </div>
        </td>
        <td>
          <div class="table-withform__body-content">
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
              {{ data.price }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-withform__body-content">
            <span class="mr-2 cms-typo text-14px text-menuItem">x</span>
            <input type="number" name="number" :value="data.count" class="inline bg-white w-20 h-10 px-3 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem">
          </div>
        </td>
        <td>
          <div class="table-withform__body-content text-right">
            <h3 class="cms-typo text-14px text-menuItem truncate">
              {{ data.price }}
            </h3>
          </div>
        </td>
        <td>
          <div class="w-full">
            <a href="#" class="text-menuIcon hover:text-buttonAndURL"><DeleteSVG class="w-icon h-icon -mt-px ml-auto"/></a>
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
  DeleteSVG,
  NoImgSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Table,
    EllipseSVG,
    DeleteSVG,
    NoImgSVG,
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
          count: '1234',
          price: '1,000,000,000 đ',
        },
        {
          name: 'Tóc đẹp xinh xinh',
          props: [
            {
              propName: 'iPhone 11',
              propColor: 'cmsRed',
            },
            {
              propName: 'Xanh',
              propColor: 'cmsGreen',
            },
          ],
          count: '134',
          price: '1,000,500,000 đ',
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
          count: '12',
          price: '1,500,000,000 đ',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .table {
    &-withform {
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
              min-width: 270px;
              max-width: 270px;
            }
            &:nth-child(3) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(4) {
              min-width: 120px;
              max-width: 120px;
            }
            &:nth-child(5) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(6) {
              min-width: 40px;
              max-width: 40px;
            }
          }
        }
      }
    }
  }
</style>
