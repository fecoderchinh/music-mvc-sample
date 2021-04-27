<template>
  <!-- eslint-disable max-len -->
  <Widget>
    <template slot="title">
      <label for="search-customer" class="cursor-pointer">Tìm kiếm khách hàng</label>
    </template>
    <template slot="content">
      <InputType
        id="search-customer"
        name="search-customer"
        placeholder="Tìm kiếm khách hàng"
        button="reset"
        :input-class="'cms-input__with-icon relative '+zIndex()"
        :button-class="'absolute right-0 top-0 mt-3 mr-4 focus:outline-none hover:shadow-none '+zIndex()"
        @click="showAdvanceSearch = true">

        <template slot="button-text"><SearchSVG class="h-4 w-4 group-hover:filter-none fill-menuIcon"/></template>

        <template slot="under-form">
          <!-- advance-search-box -->
          <AdvanceSearchBox v-click-outside="hide" mainClass="widget-box" v-if="showAdvanceSearch">
            <CustomerAdvanceSearch slot="content"/>
          </AdvanceSearchBox>
          <!-- end advance-search-box -->
        </template>

      </InputType>

      <ModalAddNewCustomer/>

    </template>
  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import InputType from '@/components/client/InputType.vue';
import AdvanceSearchBox from '@/components/client/AdvanceSearchBox.vue';
import CustomerAdvanceSearch from '@/components/client/CustomerAdvanceSearch.vue';
import ModalAddNewCustomer from '@/components/client/ModalAddNewCustomer.vue';

import ClickOutside from 'vue-click-outside';

import {
  SearchSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Widget,
    InputType,
    AdvanceSearchBox,
    CustomerAdvanceSearch,
    ModalAddNewCustomer,
    SearchSVG,
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
