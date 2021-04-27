<template>
  <!-- eslint-disable max-len -->
  <div class="grid-box">
    <div class="cms-label text-14px mb-4">
      <h2>Chọn kho hàng</h2>
    </div>

    <div class="grid-cols">
      <div class="w-full">
        <SelectOption :option-data="this.optionDataSelect"/>
      </div>
    </div>

    <div class="cms-label text-14px mb-4">
      <h2>Người bán hàng</h2>
    </div>

    <div class="grid-cols">
      <div class="w-full">
        <InputType
          id="staff-get"
          name="staff-get"
          placeholder="Chọn nhân viên"
          button="reset"
          :input-class="'cms-input__with-icon'+zIndex()"
          :button-class="'absolute right-0 top-0 mt-4 mr-4 focus:outline-none '+zIndex()"
          @click="showAdvanceSearch = true">

          <template slot="button-text"><AngleSVG class="fill-menuIcon h-3 w-3"/></template>

          <template slot="under-form">
            <!-- advance-search-box -->
            <AdvanceSearchBox v-click-outside="hide" mainClass="widget-box" v-if="showAdvanceSearch">
              <WidgetFilterStaff slot="content"/>
            </AdvanceSearchBox>
            <!-- end advance-search-box -->
          </template>

        </InputType>
      </div>
    </div>

    <!-- box title -->
    <div class="flex flex-auto mb-4">
      <!-- eslint-disable max-len -->
      <div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle">
        <label for="add-tag" class="inline-flex items-center cursor-pointer">
          Tag đơn hàng
          <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
        </label>
      </div>
      <div class="flex relative whitespace-no-wrap">
        <ModalEditTag/>
      </div>
    </div>
    <!-- end box title -->

    <div class="grid-cols">
      <div class="w-full no-mb">
        <InputType
          id="add-tag"
          name="add-tag"
          placeholder="Nhập tag cho đơn hàng"
          button="reset"/>
      </div>
    </div>

  </div>
</template>

<script>
import AdvanceSearchBox from '@/components/client/AdvanceSearchBox.vue';
import WidgetFilterStaff from '@/components/client/WidgetFilterStaff.vue';
import ModalEditTag from '@/components/client/ModalEditTag.vue';

import ClickOutside from 'vue-click-outside';

import {
  InformationSVG,
  AngleSVG,
} from '../SVGs.vue';

import SelectOption from './SelectOption.vue';
import InputType from './InputType.vue';

export default {
  components: {
    InformationSVG,
    SelectOption,
    InputType,
    AdvanceSearchBox,
    WidgetFilterStaff,
    AngleSVG,
    ModalEditTag,
  },
  data() {
    return {
      optionDataSelect: [
        { name: 'Cửa hàng chính' },
        { name: 'Cửa hàng phụ' },
        { name: 'Cửa hàng phụ phụ' },
      ],
      showAdvanceSearch: false,
    };
  },
  methods: {
    zIndex() {
      let str = '';
      if (this.showAdvanceSearch) str = ' z-40';
      return str;
    },
    hide() {
      this.showAdvanceSearch = false;
    },
  },
  mounted() {
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
};
</script>
