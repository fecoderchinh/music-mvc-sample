<template>
  <!-- eslint-disable max-len -->
  <div class="grid-cols">
    <div class="no-p overflow-hidden">
      <div class="grid-cols mb-4 px-5 no-mb">

        <div class="md:w-full flex no-mb py-2">
          <div class="flex sm:flex-col md:flex-auto md:items-center relative">
            <p class="font-medium text-14px text-labelAndTitle">
              Phí dự kiến <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
            </p>
            <h3 class="text-standardCMS text-menuItem md:absolute md:top-50 sm:mt-2 transform md:-translate-y-1/2 md:right-0 flex items-center">
              <EllipseSVG class="w-14px h-14px fill-buttonAndURL ml-1 mb-px inline" />
              <a href="#" for="checktab" class="text-buttonAndURL ml-2">
                Kết nối thêm đối tác chuyển
              </a>
            </h3>
          </div>
        </div>
      </div> <!-- end grid-cols -->

      <div class="grid-cols">
        <div class="w-full cms-table sm:overflow-x-scroll">
          <div class="px-5 sm:pr-5">
            <table class="table-auto shipping-partner md:w-full md:mb-1 sm:mb-1 border">
              <thead>
                <tr class="w-full text-standardCMS text-labelAndTitle bg-gray-100 border">
                  <th class="p-2 cms-typo text-13px border-r w-180px max-w-180px">Đối tác vận chuyển</th>
                  <th class="p-2 cms-typo text-13px text-left w-64 max-w-64">Gói dịch vụ</th>
                  <th class="p-2 cms-typo text-13px text-left">Thời gian dự kiến</th>
                  <th class="p-2 cms-typo text-13px text-right">Phí dự kiến</th>
                </tr>
              </thead>
              <tbody>

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
                          class="py-2 border-b">
                          <td
                            v-if="secondColumnIndex == 0 && thirdColumnIndex == 0 && fourthColumnIndex == 0"
                            v-bind:rowspan="firstColumnData.totalRowspan"
                            :key="'Col-1-'+firstColumnIndex"
                            class="p-2 border-r">
                            <img src="https://picsum.photos/130/80" class="mx-auto">
                          </td>
                          <td
                            v-if="thirdColumnIndex == 0 && fourthColumnIndex == 0"
                            v-bind:rowspan="secondColumnData.Column3.length"
                            :key="'Col-2-'+secondColumnIndex"
                            class="px-2 py-3 text-standardCMS text-menuItem">
                            <div class="w-64 truncate relative">
                              <Radio
                                :id="firstColumnData.Column1Name+'-'+secondColumnIndex"
                                :name="firstColumnData.Column1Name"
                                :checked="secondColumnData.rowCheck"
                                label-class="text-menuItem">
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
                            :key="'Col-3-'+thirdColumnIndex"
                            class="px-2 py-3 text-standardCMS text-menuItem w-32 truncate">
                            <div class="w-32 truncate">
                              <label
                                :for="firstColumnData.Column1Name+'-'+secondColumnIndex">
                                {{ thirdColumnData.Column3Name }}
                              </label>
                            </div>
                          </td>
                          <td class="px-2 py-3 text-standardCMS text-menuItem text-right">
                            <label :for="firstColumnData.Column1Name+'-'+secondColumnIndex">
                              {{ fourthColumnData.Column4Name }}
                            </label>
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
            </table>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-5 px-5">

        <div class="col-span-2">
          <div class="cms-label text-14px text-labelAndTitle no-mb">
            <h3>Thông tin giao hàng gửi sang Giao Hàng Nhanh</h3>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <h3>Yêu cầu</h3>
          </div>
          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="grid grid-cols-3 gap-5">

            <div class="col-span-1 sm:col-span-3">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label for="daicm" class="cursor-pointer">Dài (cm)</label>
              </div>

              <div class="w-full">
                <InputType
                  input-type="number"
                  id="daicm"
                  name="daicm"
                  placeholder="10" />
              </div>
            </div>

            <div class="col-span-1 sm:col-span-3">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label for="rongcm" class="cursor-pointer">Rộng (cm)</label>
              </div>

              <div class="w-full">
                <InputType
                  input-type="number"
                  id="rongcm"
                  name="rongcm"
                  placeholder="10" />
              </div>
            </div>

            <div class="col-span-1 sm:col-span-3">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label for="caocm" class="cursor-pointer">Cao (cm)</label>
              </div>

              <div class="w-full">
                <InputType
                  input-type="number"
                  id="caocm"
                  name="caocm"
                  placeholder="10" />
              </div>
            </div>

          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="voucher" class="cursor-pointer">Mã giảm giá</label>
          </div>
          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="voucher"
              name="voucher"
              placeholder="Nhập mã giảm giá vận chuyển..."
              button-class="absolute px-5 no-mr h-10 bg-gray-200 border right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none"
              button="button">
              <template slot="button-text"><span class="text-standardCMS">Áp dụng</span></template>
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="phitamtinh" class="cursor-pointer">Phí vận chuyển tạm tính</label>
          </div>
          <div class="w-full">
            <InputType
              id="phitamtinh"
              name="phitamtinh"
              placeholder="123,456,000"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><span class="text-standardCMS">đ</span></template>
            </InputType>
          </div>
        </div>

      </div>

    </div><!-- end grid-box -->
  </div> <!-- end grid-cols -->
</template>

<script>
import {
  EllipseSVG,
  InformationSVG,
} from '../SVGs.vue';

import Radio from './Radio.vue';
import SelectOption from './SelectOption.vue';
import InputType from './InputType.vue';

export default {
  components: {
    EllipseSVG,
    InformationSVG,
    Radio,
    SelectOption,
    InputType,
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
      optionDataSelect: [
        { name: 'Cho xem hàng, không cho thử hàng' },
        { name: 'Cho thử hàng, khỏi trả tiền' },
        { name: 'Cho free, cho thêm tiền' },
      ],
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

</style>
