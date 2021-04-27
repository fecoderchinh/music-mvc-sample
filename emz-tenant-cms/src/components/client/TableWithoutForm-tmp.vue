<template>
  <!-- eslint-disable max-len -->
  <div class="grid-cols">
    <div class="w-full cms-table sm:overflow-x-scroll">
      <div class="w-full shipped-table">
        <table class="table-auto md:w-full md:mb-1 sm:mb-1">
          <tbody>
            <tr class="border-b py-3 w-full flex flex-auto items-center" v-for="(data, dataIndex) in optionDataTable" :key="dataIndex">
              <td class=""><div class="w-60px h-60px">
                <img src="https://picsum.photos/60/60" class="mx-auto w-full h-full">
              </div></td>
              <td class="pl-4 flex-auto w-56 whitespace-no-wrap truncate">
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
              <td class="pl-4 text-standardCMS text-buttonAndURL w-32 truncate text-right">{{ data.price }}đ</td>
              <td class="pl-4 text-standardCMS text-menuItem w-32 truncate text-left"><span class="mr-3">x </span>{{ data.quantity }}</td>
              <td class="pl-4 text-standardCMS text-labelAndTitle w-32 truncate text-right">{{ formatNumber(parseInt( data.price.split(',').join('') )*parseInt( data.quantity.split(',').join('') )) }}đ</td>
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
