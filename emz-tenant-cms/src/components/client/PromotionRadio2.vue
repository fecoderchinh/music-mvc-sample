<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="grid md:grid-cols-4 md:gap-3 sm:grid-cols-1 sm:gap-3 justify-radio2">

        <div class="cms-label text-14px mb-4 col-span-4">
          <label class="cursor-pointer text-14px text-labelAndTitle">
            Khách hàng áp dụng
          </label>
        </div>

        <div class="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4" v-for="(data, index) in optionData" :key="index">
          <Radio :id="'radio-khad'+index" name="radio-khad" main-class="no-mr" labelClass="text-14px" :checked="defaultRadio === index">
            <template slot="radio-text">
              {{ data.name }}
              <InformationSVG class="-mt-px ml-1 inline w-3 fill-buttonAndURL" v-if="data.help"/>
            </template>
          </Radio>
        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Radio from '@/components/client/Radio.vue';

import {
  InformationSVG,
} from '../SVGs.vue';

export default {
  components: {
    Box,
    Radio,
    InformationSVG,
  },
  data() {
    return {
      defaultRadio: 1,
      optionData: [
        {
          name: 'Tất cả khách hàng',
        },
        {
          name: 'Khách chưa giao dịch',
        },
        {
          name: 'Khách hàng thân quen',
          help: true,
        },
        {
          name: 'Tùy chọn khách hàng',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .justify-radio2 {
    > div {
      &:last-child {
        @media (min-width: 1025px) {
          @apply flex justify-end;
        }
        > div {
          @apply mr-0;
        }
      }
    }
  }
</style>
