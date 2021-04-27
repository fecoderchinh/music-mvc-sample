<template>
  <!-- eslint-disable max-len -->
  <div class="grid-cols">
    <div class="no-mb no-p overflow-hidden">
      <div class="grid-cols mb-4 px-5 no-mb">

        <div class="md:w-full xl:w-1/4 flex no-mb bg-sidebarHover py-2 border-l border-r">
          <div class="flex items-center">
            <p class="font-lato font-medium text-14px text-buttonAndURL">
              <EllipseSVG class="inline-flex ml-1 mr-8 w-4 h-4 fill-buttonAndURL" /><span class="opacity-75">Thêm nhanh sản phẩm hoặc dịch vụ</span></p>
          </div>
        </div>
      </div> <!-- end grid-cols -->

      <div class="border border-t-0 w-full cms-table sm:overflow-x-scroll">
        <div class="w-full">
          <table class="table-fixed md:w-full mx-auto innerbox">
            <tbody>
              <tr class="border-b py-2 w-full flex flex-auto items-center" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex" @click="data.rowCheck = !data.rowCheck" :class="data.rowCheck ? 'bg-gray-200' : ''">
                <td>
                  <CheckType
                    main-class="ml-6 sm:ml-0"
                    :checked="data.rowCheck"/>
                </td>
                <td class=""><div class="w-60px h-60px">
                  <img src="https://picsum.photos/60/60" class="mx-auto w-full h-full">
                </div></td>
                <td class="pl-4 flex-auto w-64 whitespace-no-wrap truncate">
                  <div class="w-full">
                    <h3 class="text-standardCMS text-buttonAndURL w-full truncate"><a href="#">{{ data.name }}</a></h3>
                    <ul class="cms-table-props list-none space-x-1 w-full truncate flex items-center">
                      <li class="inline-flex items-center" v-for="(prop, propIndex) in data.props" :key="propIndex">
                        <span class="text-standardCMS" :class="'text-'+prop.propColor">{{ prop.propName }}</span>
                        <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="pl-4 text-standardCMS text-menuItem w-32 truncate text-right">{{ data.count }} sản phẩm</td>
                <td class="pl-4 text-standardCMS text-labelAndTitle w-40 truncate text-right pr-5 sm:pr-0">{{ data.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- NAVIGATION -->
      <div class="grid-cols text-left md:text-right px-5 items-center">
        <div class="w-full no-mb  border-r border-l border-b py-2">
          <ul class="list-none flex items-center md:justify-end md:h-8">
            <li class="inline sm:block md:mr-10">
              <Button button-class="cms-button cms-button-blue flex items-center h-8 px-3">
                <template slot="name">
                  Chọn
                </template>
              </Button>
            </li>
            <li class="inline-flex sm:ml-auto mr-3">
              <Button button-class="bg-menuIcon hover:bg-buttonAndURL text-menuItem text-14px font-lato font-medium hover:text-white h-8 px-3">
                <template slot="name">
                  <LongArrowSVG class="w-4 h-8 fill-white"/>
                </template>
              </Button>
            </li>
            <li class="inline-flex">
              <Button button-class="bg-menuIcon hover:bg-buttonAndURL text-menuItem text-14px font-lato font-medium hover:text-white h-8 px-3">
                <template slot="name">
                  <LongArrowSVG class="w-4 h-8 fill-white transform rotate-180"/>
                </template>
              </Button>
            </li>
          </ul>
        </div>
      </div>

    </div><!-- end grid-box -->
  </div> <!-- end grid-cols -->
</template>

<script>
import {
  EllipseSVG,
  LongArrowSVG,
  AddLibrarySVG,
} from '../SVGs.vue';

import CheckType from './CheckType.vue';
import Button from './Button.vue';

export default {
  components: {
    EllipseSVG,
    CheckType,
    LongArrowSVG,
    AddLibrarySVG,
    Button,
  },
  data() {
    return {
      optionDataTable: [
        {
          rowCheck: false,
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
          count: '1,234',
          price: '1,000,000,000 đ',
        },
        {
          rowCheck: false,
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
          rowCheck: false,
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
