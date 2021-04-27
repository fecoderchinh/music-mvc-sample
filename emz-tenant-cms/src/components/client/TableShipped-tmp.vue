<template>
  <!-- eslint-disable max-len -->
  <div class="grid-cols">
    <div class="w-full cms-table sm:overflow-x-scroll">
      <div class="w-full sm:pr-5">
        <table class="table-auto md:w-full md:mb-1 sm:mb-1">
          <thead>
            <tr class="border-b pb-3 w-full flex items-center">
              <th class="w-60px text-standardCMS text-left text-labelAndTitle whitespace-no-wrap" colspan="2">Sản phẩm</th>
              <th class="ml-auto w-32 text-standardCMS text-right text-labelAndTitle">Khối lượng</th>
              <th class="w-40 text-standardCMS text-right text-labelAndTitle">Số lượng giao</th>
            </tr>
          </thead>
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
              <td class="pl-4 text-standardCMS text-menuItem w-32 truncate text-right">{{ data.weight }}g</td>
            <td class="pl-4 text-standardCMS text-labelAndTitle w-40 truncate text-right">{{ data.quantity }}</td>
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
} from '../SVGs.vue';

export default {
  components: {
    EllipseSVG,
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
