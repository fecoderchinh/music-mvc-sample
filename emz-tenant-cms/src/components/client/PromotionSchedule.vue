<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">
      <div class="grid grid-cols-2 gap-5">

        <div class="col-span-2">
          <div class="cms-label text-14px">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Thời gian
            </label>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Thời gian bắt đầu
            </label>
          </div>
          <div class="grid grid-cols-2">
            <div class="col-span-1">
              <InputType
                main-class="search-bar"
                input-class="cms-input__with-icon reverse text-center no-rounded-r no-b-r"
                button="button"
                placeholder="15/10/2020"
                button-class="absolute left-0 top-50 transform -translate-y-1/2 ml-4 focus:outline-none">
                <template slot="button-text"><CalendarSVG class="h-4 w-4 fill-menuIcon" /></template>
              </InputType>
            </div>
            <div class="col-span-1">
              <InputType
                main-class="search-bar"
                input-class="cms-input__default text-center no-rounded-l"
                button="button"
                placeholder="10:15"
                button-class="absolute left-0 top-50 transform -translate-y-1/2 ml-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-4">
            <CheckType
                id="add-product-name"
                slot="tab-right">
              <template slot="text"><h3 class="ml-2">
                Thời gian kết thúc
              </h3></template>
            </CheckType>
          </div>
          <div class="grid grid-cols-2">
            <div class="col-span-1">
              <InputType
                main-class="search-bar"
                input-class="cms-input__with-icon reverse text-center no-rounded-r no-b-r"
                button="button"
                placeholder="15/10/2020"
                button-class="absolute left-0 top-50 transform -translate-y-1/2 ml-4 focus:outline-none">
                <template slot="button-text"><CalendarSVG class="h-4 w-4 fill-menuIcon" /></template>
              </InputType>
            </div>
            <div class="col-span-1">
              <InputType
                main-class="search-bar"
                input-class="cms-input__default text-center no-rounded-l"
                button="button"
                placeholder="10:15"
                button-class="absolute left-0 top-50 transform -translate-y-1/2 ml-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

      </div>
    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';

import {
  CalendarSVG,
} from '../SVGs.vue';
import CheckType from "@/components/client/CheckType";

export default {
  components: {
    CheckType,
    Box,
    InputType,
    CalendarSVG,
  },
};
</script>

<style lang="scss"></style>
