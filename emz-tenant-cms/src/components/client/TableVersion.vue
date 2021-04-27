<template>
  <!-- eslint-disable max-len -->
  <Table class="table-version">
    <thead class="box-table-header table-version__header" slot="header">
      <tr>
        <th>
          <div class="table-version__header-content"/>
        </th>
        <th>
          <div class="table-version__header-content text-left">
            Phiên bản
          </div>
        </th>
        <th>
          <div class="table-version__header-content">
            Ảnh
          </div>
        </th>
        <th>
          <div class="table-version__header-content">
            Giá bán
          </div>
        </th>
        <th>
          <div class="table-version__header-content">
            Giá ảo
          </div>
        </th>
        <th>
          <div class="table-version__header-content">
            Giá nhập
          </div>
        </th>
        <th>
          <div class="table-version__header-content text-left">
            Số lượng <br>Cửa hàng chính
          </div>
        </th>
        <th>
          <div class="table-version__header-content text-left">
            Số lượng <br>Chi nhánh Sài Gòn
          </div>
        </th>
        <th>
          <div class="table-version__header-content">
            SKU phân loại
          </div>
        </th>
        <th>
          <div class="w-full truncate">
            QR code, Barcode ...
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-version__body" slot="body">
      <template v-for="(data, index) in optionDataTable">
        <tr
          :class="[
            !data.checked ? 'table-version__disabled' : null
          ]"
          :key="index">
          <td>
            <div class="table-version__body-content">
              <CheckType
                main-class="rounded-checkbox mt-2"
                :id="'checkVersion-'+index"
                :checked="data.checked">
              </CheckType>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
                <span class="inline items-center" v-for="(prop, propIndex) in data.col2" :key="propIndex">
                  <span class="cms-typo inline text-13px" :class="'text-'+prop.propColor">{{ prop.propName }}</span>
                  <EllipseSVG class="w-1 h-1 inline mx-1 fill-menuIcon" v-if="propIndex + 1 < data.col2.length"/>
                </span>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
              <SquareSVG class="w-10 fill-menuIcon" v-if="!data.col3"/>
              <img :src="data.col3" class="mx-auto w-10 h-10" v-else>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
              <InputType
                :id="'priceVersion-'+index"
                :name="'priceVersion-'+index"
                :value="data.col4"
                input-class="cms-input__with-letter cms-input__text-13px"
                button-class="absolute right-0 top-0 pt-1 mt-px mr-3 focus:outline-none no-effect">
                <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
              <InputType
                :id="'qtyVersion-'+index"
                :name="'qtyVersion-'+index"
                :value="data.col5"
                input-class="cms-input__with-letter cms-input__text-13px"
                button-class="absolute right-0 top-0 pt-1 mt-px mr-3 focus:outline-none no-effect">
                <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
              <InputType
                :id="'skuVersion-'+index"
                :name="'skuVersion-'+index"
                :value="data.col6"
                input-class="cms-input__with-letter cms-input__text-13px"
                button-class="absolute right-0 top-0 pt-1 mt-px mr-3 focus:outline-none no-effect">
                <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
              <InputType
                :id="'skuVersion-'+index"
                :name="'skuVersion-'+index"
                :value="data.col7"
                input-class="cms-input__default cms-input__text-13px">
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
              <InputType
                :id="'skuVersion-'+index"
                :name="'skuVersion-'+index"
                :value="data.col8"
                input-class="cms-input__default cms-input__text-13px">
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version__body-content">
              <InputType
                :id="'skuVersion-'+index"
                :name="'skuVersion-'+index"
                :value="data.col9"
                input-class="cms-input__default cms-input__text-13px">
              </InputType>
            </div>
          </td>
          <td>
            <div class="w-full">
              <InputType
                :id="'barcodeVersion-'+index"
                :name="'barcodeVersion-'+index"
                :value="data.col10"
                input-class="cms-input__default cms-input__text-13px">
              </InputType>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import CheckType from '@/components/client/CheckType.vue';
import InputType from '@/components/client/InputType.vue';

import {
  SquareSVG,
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Table,
    CheckType,
    SquareSVG,
    InputType,
    EllipseSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          checked: true,
          col2: [
            {
              propName: 'Xanh',
              propColor: 'cmsRed',
            },
            {
              propName: '1.2m',
              propColor: 'cmsGreen',
            },
            {
              propName: 'Dài',
              propColor: 'cmsOrange',
            },
          ],
          col3: 'https://picsum.photos/40',
          col4: '21,200,000',
          col5: '21,200,000',
          col6: '21,200,000',
          col7: '1200',
          col8: '1200',
          col9: 'Tocdep-12',
          col10: '893 3481 00106 3',
        },
        {
          checked: false,
          col2: [
            {
              propName: 'Xanh',
              propColor: 'cmsRed',
            },
            {
              propName: '1.2m',
              propColor: 'cmsGreen',
            },
            {
              propName: 'Dài',
              propColor: 'cmsOrange',
            },
          ],
          col3: 'https://picsum.photos/40',
          col4: '21,200,000',
          col5: '21,200,000',
          col6: '21,200,000',
          col7: '1200',
          col8: '1200',
          col9: 'Tocdep-12',
          col10: '893 3481 00106 3',
        },
        {
          checked: false,
          col2: [
            {
              propName: 'Xanh',
              propColor: 'cmsRed',
            },
            {
              propName: '1.2m',
              propColor: 'cmsGreen',
            },
            {
              propName: 'Dài',
              propColor: 'cmsOrange',
            },
          ],
          col4: '21,200,000',
          col5: '21,200,000',
          col6: '21,200,000',
          col7: '1200',
          col8: '1200',
          col9: 'Tocdep-12',
          col10: '893 3481 00106 3',
        },
        {
          checked: true,
          col2: [
            {
              propName: 'Xanh',
              propColor: 'cmsRed',
            },
            {
              propName: '1.2m',
              propColor: 'cmsGreen',
            },
            {
              propName: 'Dài',
              propColor: 'cmsOrange',
            },
          ],
          col3: 'https://picsum.photos/40',
          col4: '21,200,000',
          col5: '21,200,000',
          col6: '21,200,000',
          col7: '1200',
          col8: '1200',
          col9: 'Tocdep-12',
          col10: '893 3481 00106 3',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .table {
    &-version {
      &__disabled {
        * {
          @apply text-placeholderStyle fill-placeholderStyle filter-grayscale;
        }
      }
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          > th {
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
              @media (min-width: 992px) {
                @apply sticky bg-white z-10;
              }
            }
            &:nth-child(1) {
              min-width: 46px;
              max-width: 46px;
              left: 0;
            }
            &:nth-child(2) {
              min-width: 250px;
              max-width: 250px;
              left: 46px;
            }
            &:nth-child(3) {
              min-width: 60px;
              max-width: 60px;
              left: 296px;
            }
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(7),
            &:nth-child(8) {
              min-width: 140px;
              max-width: 140px;
            }
            &:nth-child(9) {
              min-width: 110px;
              max-width: 110px;
            }
            &:nth-child(10) {
              min-width: 140px;
              max-width: 140px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply py-10px border-b;
          > td {
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
              @media (min-width: 992px) {
                @apply sticky bg-white z-10;
              }
            }
            &:nth-child(1) {
              min-width: 46px;
              max-width: 46px;
              left: 0;
            }
            &:nth-child(2) {
              min-width: 250px;
              max-width: 250px;
              left: 46px;
            }
            &:nth-child(3) {
              min-width: 60px;
              max-width: 60px;
              left: 296px;
            }
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(7),
            &:nth-child(8) {
              min-width: 140px;
              max-width: 140px;
            }
            &:nth-child(9) {
              min-width: 110px;
              max-width: 110px;
            }
            &:nth-child(10) {
              min-width: 140px;
              max-width: 140px;
            }
          }
        }
      }
    }
  }
</style>
