<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">
    <InputType
      id="search-customer-2"
      name="search-customer-2"
      placeholder="Tìm kiếm sản phẩm để thêm vào đơn hàng"
      button="reset"
      :input-class="'cms-input__with-icon '+zIndex()"
      :button-class="'absolute right-0 top-0 mt-3 mr-4 focus:outline-none hover:shadow-none '+zIndex()"
      @click="showAdvanceSearch = true">

      <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon"/></template>

      <template slot="under-form">
        <!-- advance-search-box -->
        <AdvanceSearchBox v-click-outside="hide" mainClass="widget-box" v-if="showAdvanceSearch"/>
        <!-- end advance-search-box -->
      </template>

    </InputType>
  </div>
</template>

<script>
import InputType from '@/components/client/InputType.vue';
import AdvanceSearchBox from '@/components/client/AdvanceSearchBox.vue';
import ClickOutside from 'vue-click-outside';

import {
  SearchSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    InputType,
    SearchSVG,
    AdvanceSearchBox,
  },
  data() {
    return {
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

<style lang="scss"></style>
