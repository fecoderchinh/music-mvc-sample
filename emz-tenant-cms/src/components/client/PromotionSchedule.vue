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
            <label for="add-product-name" class="cursor-pointer text-14px text-labelAndTitle">
              <CheckboxSVG class="w-4 h-4 fill-buttonAndURL inline mr-2"/>
              <span class="-mt-px">Thời gian kết thúc</span>
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

      </div>
    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';

import {
  CalendarSVG,
  CheckboxSVG,
} from '../SVGs.vue';

export default {
  components: {
    Box,
    InputType,
    CalendarSVG,
    CheckboxSVG,
  },
};
</script>

<style lang="scss"></style>
