<template>
  <!-- eslint-disable max-len -->
  <div class="grid-cols">
    <div class="w-full cms-table sm:overflow-x-scroll">
      <div class="w-full sm:pr-5">
        <table class="table-fixed md:w-full md:mb-1 sm:mb-1">
          <tbody>
            <tr class="border-b py-3 w-full flex flex-auto items-center" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex">
              <td class=""><div class="w-60px h-60px">
                <img src="https://picsum.photos/60/60" class="mx-auto w-full h-full">
              </div></td>
              <td class="pl-4 flex-auto w-64 whitespace-no-wrap truncate">
                <div class="w-full">
                  <h3 class="text-standardCMS text-buttonAndURL w-full truncate"><a href="#">{{ data.name }}</a></h3>
                  <ul class="cms-table-props list-none space-x-1 w-full truncate">
                    <li class="inline-flex items-center" v-for="(prop, propIndex) in data.props" :key="propIndex">
                      <span class="text-standardCMS" :class="'text-'+prop.propColor">{{ prop.propName }}</span>
                      <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
                    </li>
                  </ul>
                </div>
              </td>
              <td class="pl-4 text-standardCMS text-buttonAndURL w-32 truncate text-right">{{ data.price }}</td>
              <td class="pl-4">
                <div class="flex items-center">
                  <span class="mr-2 text-standardCMS text-menuItem">x</span>
                  <input type="number" name="number" :value="data.count" class="inline bg-white w-20 h-10 px-3 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem">
                </div>
              </td>
              <td class="pl-4 text-standardCMS text-menuItem w-32 truncate text-right">{{ data.price }}</td>
              <td class="pl-4">
                <a href="#" class="group"><DeleteSVG class="w-14px h-icon -mt-px fill-menuIcon group-hover:fill-buttonAndURL"/></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  EllipseSVG,
  DeleteSVG,
} from '../SVGs.vue';

export default {
  components: {
    EllipseSVG,
    DeleteSVG,
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
