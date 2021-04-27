<template>
  <!-- eslint-disable max-len -->
  <div class="w-full site-item">

    <h3 class="cms-typo text-2xl text-labelAndTitle">{{ this.domain }}</h3>

    <ListItemWithIcon
      class="mt-4"
      svg-class="w-5 mr-2 fill-menuIcon -mt-px"
      a-class="cms-typo text-base text-cmsLightGreen"
      :option-data="this.optionData" />

    <div class="w-full relative" v-if="this.thumb">
      <div class="w-full h-full flex items-center justify-center bg-black bg-opacity-75 absolute top-0 left-0" v-if="this.expState">
        <a href="#" class="lg:text-14px md:text-13px sm:text-13px px-5 py-1 bg-white rounded" :class="'text-'+this.colorState">
          {{ this.expState }}
          <LongArrowSVG class="w-3 ml-2 inline transform rotate-180" :class="'fill-'+this.colorState"/>
        </a>
      </div>
      <img :src="this.thumb" class="w-full my-10px">
    </div>

    <div class="lg:flex flex-auto items-center md:gap-y-2 sm:gap-y-2 grid">
      <div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle" v-if="this.orderCount">
        <label class="cms-typo text-base text-cmsLightGreen">
          <EllipseSVG class="w-5 mr-2 fill-menuIcon -mt-px inline" />
          {{ this.orderCount }}
        </label>
      </div>
      <div class="flex relative whitespace-no-wrap lg:ml-auto">
        <Button :link="this.dashboardURL" button-class="bg-cmsDarkGreen group text-white text-base hover:bg-cmsLightGreen rounded-sm px-5 py-2 relative">
          <template slot="name">
            Vào trang quản trị
          </template>
        </Button>
      </div>
    </div>

  </div>
</template>

<script>
import ListItemWithIcon from '@/components/client/ListItemWithIcon.vue';
import Button from '@/components/client/Button.vue';

import {
  EllipseSVG,

  LongArrowSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    ListItemWithIcon,
    EllipseSVG,
    Button,
    LongArrowSVG,
  },
  props: {
    domain: String,
    optionData: {
      type: Array,
      default: () => [],
    },
    orderCount: String,
    thumb: String,
    dashboardURL: String,
    expState: String,
    colorState: String,
  },
};
</script>

<style lang="scss"></style>
