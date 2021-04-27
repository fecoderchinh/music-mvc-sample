<template>
  <!-- eslint-disable max-len -->
  <Table class="table-partner">
    <thead class="box-table-header block table-partner__header" slot="header">
      <tr>
        <th class="border-r">
          <div class="table-partner__header-content">
            <h3 class="cms-typo text-13px text-labelAndTitle">
              Đối tác vận chuyển
            </h3>
          </div>
        </th>
        <th>
          <div class="table-partner__header-content text-left">
            <h3 class="cms-typo text-13px text-labelAndTitle">
              Gói dịch vụ
            </h3>
          </div>
        </th>
        <th>
          <div class="table-partner__header-content text-left">
            <h3 class="cms-typo text-13px text-labelAndTitle">
              Thời gian dự kiến
            </h3>
          </div>
        </th>
        <th>
          <div class="table-partner__header-content text-right">
            <h3 class="cms-typo text-13px text-labelAndTitle">
              Phí dự kiến
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body block table-partner__body" slot="body">

      <template
        v-for="(firstColumnData, firstColumnIndex) in tbData.Column1">
        <template
          v-if="firstColumnData.availableRow">
          <template
            v-for="(secondColumnData, secondColumnIndex) in firstColumnData.Column2">
            <template
              v-for="(thirdColumnData, thirdColumnIndex) in secondColumnData.Column3">

              <tr
                v-for="(fourthColumnData, fourthColumnIndex) in thirdColumnData.Column4"
                :key="'Col-4-'+fourthColumnIndex"
                class="border-r">
                <td
                  v-if="secondColumnIndex == 0 && thirdColumnIndex == 0 && fourthColumnIndex == 0"
                  v-bind:rowspan="firstColumnData.totalRowspan"
                  :key="'Col-1-'+firstColumnIndex"
                  class="border-r">
                  <div class="table-partner__body-content first">
                    <img src="https://picsum.photos/300/100" class="mx-auto">
                  </div>
                </td>
                <td
                  v-if="thirdColumnIndex == 0 && fourthColumnIndex == 0"
                  v-bind:rowspan="secondColumnData.Column3.length"
                  :key="'Col-2-'+secondColumnIndex">
                  <div class="table-partner__body-content second truncate">
                    <Radio
                      :id="firstColumnData.Column1Name+'-'+secondColumnIndex"
                      :name="firstColumnData.Column1Name"
                      :checked="secondColumnData.rowCheck"
                      label-class="text-menuItem text-14px">
                      <template slot="radio-text">{{ secondColumnData.Column2Name }}</template>
                    </Radio>
                    <a
                      class="block ml-6 text-standardCMS text-buttonAndURL pt-3"
                      v-if="secondColumnData.rowPolicy !== '#'"
                      :href="secondColumnData.rowPolicy">
                      Xem chính sách
                    </a>
                    <img
                      class="block pl-6 pt-3"
                      :class="secondColumnData.rowBest ? '' : 'hidden'"
                      src="https://picsum.photos/118/27"
                      alt="">
                  </div>
                </td>
                <td
                  v-if="fourthColumnIndex == 0"
                  v-bind:rowspan="thirdColumnData.Column4.length"
                  :key="'Col-3-'+thirdColumnIndex">
                  <div class="table-partner__body-content third truncate">
                    <label
                      :for="firstColumnData.Column1Name+'-'+secondColumnIndex"
                      class="cms-typo text-menuItem text-14px">
                      {{ thirdColumnData.Column3Name }}
                    </label>
                  </div>
                </td>
                <td>
                  <div class="table-partner__body-content fourth truncate text-right pr-10px">
                    <label :for="firstColumnData.Column1Name+'-'+secondColumnIndex" class="cms-typo text-menuItem text-14px">
                      {{ fourthColumnData.Column4Name }}
                    </label>
                  </div>
                </td>
              </tr>
            </template>
          </template>
        </template>
        <template v-else>
          <tr class="py-2 border-b" :key="'Col-1-'+firstColumnIndex">
            <td class="p-2 border-r">
              <img src="https://picsum.photos/130/80" class="mx-auto disable-img">
              <a href="#" class="block mt-3 md:mx-4 text-14px font-medium border-2 text-center text-buttonAndURL border-buttonAndURL hover:bg-buttonAndURL hover:text-white rounded">Kết nối ngay</a>
            </td>
            <td class="px-2 py-3 text-standardCMS text-menuItem" colspan="3">
              <div class="relative">
                <label class="pl-6 block">
                  Dịch vụ vận chuyển hiện không khả dụng
                </label>
              </div>
            </td>
          </tr>
        </template>
      </template>

    </tbody>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import Radio from '@/components/client/Radio.vue';

export default {
  components: {
    Table,
    Radio,
  },
  data() {
    return {
      tbData: {
        Column1: [
          {
            totalRowspan: 0,
            Column1Name: 'RadioName1',
            availableRow: true,
            Column2: [

              {
                rowCheck: false,
                Column2Name: 'Chuyển phát nhanh',
                rowPolicy: '#',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '24 giờ',
                    Column4: [
                      {
                        Column4Name: '97,000đ',
                      },
                    ],
                  },
                ],
              },
              {
                rowCheck: true,
                Column2Name: 'Chuyển phát thường',
                rowPolicy: '#',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '1 - 2 ngày',
                    Column4: [
                      {
                        Column4Name: '62,000đ',
                      },
                    ],
                  },
                ],
              },
              {
                rowCheck: false,
                Column2Name: 'Chuyển phát tiết kiệm',
                rowPolicy: '#',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '1 - 2 ngày',
                    Column4: [
                      {
                        Column4Name: '123,000đ',
                      },
                    ],
                  },
                ],
              },

            ],
          },
          {
            totalRowspan: 0,
            Column1Name: 'RadioName2',
            availableRow: true,
            Column2: [

              {
                rowCheck: false,
                Column2Name: 'Chuyển phát nhanh',
                rowPolicy: 'https://google.com/',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '24 giờ',
                    Column4: [
                      {
                        Column4Name: '97,000đ',
                      },
                    ],
                  },
                ],
              },
              {
                rowCheck: true,
                Column2Name: 'Chuyển phát thường',
                rowPolicy: 'https://google.com/',
                rowBest: true,
                Column3: [
                  {
                    Column3Name: '1 - 2 ngày',
                    Column4: [
                      {
                        Column4Name: '62,000đ',
                      },
                    ],
                  },
                ],
              },
              {
                rowCheck: false,
                Column2Name: 'Chuyển phát tiết kiệm',
                rowPolicy: 'https://google.com/',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '1 - 2 ngày',
                    Column4: [
                      {
                        Column4Name: '123,000đ',
                      },
                    ],
                  },
                ],
              },

            ],
          },
          {
            totalRowspan: 0,
            Column1Name: 'RadioName1',
            availableRow: false,
            Column2: [

              {
                rowCheck: false,
                Column2Name: 'Chuyển phát nhanh',
                rowPolicy: '#',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '24 giờ',
                    Column4: [
                      {
                        Column4Name: '97,000đ',
                      },
                    ],
                  },
                ],
              },
              {
                rowCheck: true,
                Column2Name: 'Chuyển phát thường',
                rowPolicy: '#',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '1 - 2 ngày',
                    Column4: [
                      {
                        Column4Name: '62,000đ',
                      },
                    ],
                  },
                ],
              },
              {
                rowCheck: false,
                Column2Name: 'Chuyển phát tiết kiệm',
                rowPolicy: '#',
                rowBest: false,
                Column3: [
                  {
                    Column3Name: '1 - 2 ngày',
                    Column4: [
                      {
                        Column4Name: '123,000đ',
                      },
                    ],
                  },
                ],
              },

            ],
          },
        ],
      },
    };
  },
  mounted() {
    const d = this.tbData;
    let i; let j; let k;
    // console.log(d);

    for (j = 0; j < d.Column1.length; j += 1) {
      for (i = 0; i < d.Column1[j].Column2.length; i += 1) {
        for (k = 0; k < d.Column1[j].Column2[i].Column3.length; k += 1) {
          d.Column1[j].totalRowspan += d.Column1[j].Column2[i].Column3[k].Column4.length;
        }
      }
    }
  },
};
</script>

<style lang="scss">
  .table {
    &-partner {
      &__header {
        &-content {
          width: 100%;
        }
        tr {
          @apply bg-gray-100 border;
          th {
            @apply p-10px;
            &:nth-child(1) {
              width: 180px;
              max-width: 180px;
            }
            &:nth-child(2) {
              width: 300px;
              max-width: 300px;
            }
            &:nth-child(3) {
              width: 150px;
              max-width: 150px;
            }
            &:nth-child(4) {
              width: 135px;
              max-width: 135px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: 100%;
        }
        tr {
          @apply border-l border-r border-b;
          td {
            @apply p-10px;
            &:last-child {
              @apply px-0;
            }
            &:nth-child(1) {
              .table-partner__body-content.first {
                width: 159px;
                max-width: 159px;
              }
            }
            &:nth-child(2) {
              .table-partner__body-content.second {
                width: 280px;
                max-width: 280px;
              }
            }
            &:nth-child(3) {
              .table-partner__body-content.third {
                width: 129px;
                max-width: 129px;
              }
            }
            &:nth-child(4) {
              .table-partner__body-content.fourth {
                width: 135px;
                max-width: 135px;
              }
            }
          }
        }
      }
    }
  }
</style>
