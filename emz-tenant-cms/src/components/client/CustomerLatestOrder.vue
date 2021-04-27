<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label for="cus-tags" class="cursor-pointer text-lg text-labelAndTitle">
          Đơn hàng gần đây
        </label>
        <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Toàn bộ đơn hàng</a>
      </div>

      <div
        class="w-full md:mt-8"
        v-for="(data, index) in optionDataTable" :key="index"
        :class="( optionDataTable && optionDataTable.length > 1 && index + 1 !== optionDataTable.length ) ? 'mb-5 border-b' : ''">
        <h3 class="text-buttonAndURL cms-typo text-15px mb-10px">{{ data.id }}</h3>
        <p class="cms-typo text-14px mb-10px text-menuItem" v-for="(infoData, infoIndex) in data.listInfo" :key="infoIndex">
          <span class="sm:block mb-2">
              <EllipseSVG class="w-1 h-1 md:ml-5 mr-5 fill-menuIcon inline"/> {{ formatNumber(infoData.price) }}đ
          </span>
          <span class="sm:block mb-2">
              <EllipseSVG class="w-1 h-1 md:ml-5 mr-5 fill-menuIcon inline"/> {{ infoData.payment }}
          </span>
          <span class="sm:block mb-2">
              <EllipseSVG class="w-1 h-1 md:ml-5 mr-5 fill-menuIcon inline"/> {{ infoData.from }}
          </span>
          <span class="sm:block mb-2">
              <EllipseSVG class="w-1 h-1 md:ml-5 mr-5 fill-menuIcon inline"/>
              Tags
              <InlineTags
                :option-data="infoData.tags"
                mainClass="inline-flex ml-10px"
                subClass="inline-flex mr-10px"
                tagClass="group bg-gray-200 border text-menuItem text-13px font-lato font-medium px-3 sm:mb-10px"/>
          </span>
        </p>
        <p class="mb-10px md:ml-5">
          <span class="text-menuItem text-13px font-lato font-medium px-3 py-1 rounded-full mr-10px sm:block sm:my-2" v-for="(statusData, statusIndex) in data.listStatus" :key="statusIndex" :class="statusData.background ? 'bg-'+statusData.background : 'bg-gray-200'">{{ statusData.name }}</span>
        </p>
        <p class="cms-typo text-14px mb-10px" v-if="data.listWhy">
          <span v-for="(whyData, whyIndex) in data.listWhy" :key="whyIndex">
              <EllipseSVG class="w-1 h-1 md:ml-5 mr-5 inline" :class="whyData.whyclass ? 'fill-'+whyData.whyclass: 'fill-menuIcon'"/> <span :class="whyData.whyclass ? 'mr-5 text-'+whyData.whyclass : 'mr-5 text-menuItem'">{{ whyData.whyname }}</span>
              <span class="text-menuItem">{{ whyData.whydesc }}</span>
          </span>
        </p>
      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InlineTags from '@/components/client/InlineTags.vue';

import {
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    EllipseSVG,
    InlineTags,
  },
  data() {
    return {
      optionDataTable: [
        {
          id: '#1007',
          listInfo: [
            {
              price: 123456,
              payment: 'Thanh toán COD',
              from: 'Đơn từ website',
              tags: [
                {
                  name: '20/11',
                },
              ],
            },
          ],
          listStatus: [
            {
              name: 'Chưa thanh toán',
            },
            {
              name: 'Chờ chuyển hoàn',
            },
          ],
          listWhy: [
            {
              whyname: 'Bị hoàn đơn',
              whyclass: 'cmsRed',
              whydesc: 'Do hết hàng',
            },
          ],
        },
        {
          id: '#1008',
          listInfo: [
            {
              price: 123456,
              payment: 'Thanh toán COD',
              from: 'Đơn từ website',
              tags: [
                {
                  name: 'flash sale',
                },
              ],
            },
          ],
          listStatus: [
            {
              name: 'Chưa thanh toán',
              background: 'cmsOrangeNotify',
            },
            {
              name: 'Chờ chuyển hoàn',
              background: 'cmsRedNotify',
            },
          ],
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

<style lang="scss"></style>
