<template>
  <!-- eslint-disable max-len -->
  <div :class="mainClass === 'undefined' ? 'aaa' : mainClass">
    <div class="relative text-gray-600 flex-auto">
      <div class="inline-block relative w-full">
        <select v-model="selected2" class="block appearance-none w-full border border-gray-400 hover:border-gray-500 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-none text-standardCMS text-14px font-normal" :class="selectClass + ' ' + ( selected2 !== undefined ? selected2 : 'bg-white' )">
          <option disabled value="">Lựa chọn</option>
          <option v-for="(data, index) in optionData" v-bind:key="index" :value="data.value">{{ data.name }}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <AngleSVG class="fill-menuIcon h-3 w-3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AngleSVG,
} from '../SVGs.vue';

export default {
  components: {
    AngleSVG,
  },
  props: {
    mainClass: {
      type: String,
      default: 'w-full',
    },
    selectClass: {
      type: String,
      default: 'bg-white h-10',
    },
    optionData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected2: 'bg-cmsOrangeNotify',
    };
  },
};
</script>
