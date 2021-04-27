<template>
  <Box>
    <template slot="content">
      <div class="w-full">
        <InputType
          @click="showTable = !showTable"
          main-class="search-bar"
          id="input-promo-search"
          name="input-promo-search"
          input-class="cms-input__with-icon"
          button="button"
          placeholder="Tìm kiếm sản phẩm"
          button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          <template slot="button-text"><SearchSVG class="h-4 w-4 fill-menuIcon" /></template>
        </InputType>
      </div>
      <div :class="[ 'w-full', !showTable ? 'hidden' : null ]">
        <PromotionRadioTable />
      </div>
    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';
import PromotionRadioTable from '@/components/client/PromotionRadioTable.vue';
import ClickOutside from 'vue-click-outside';

import {
  SearchSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    InputType,
    SearchSVG,
    PromotionRadioTable,
  },
  data() {
    return {
      showTable: false,
    };
  },
  methods: {
    hide() {
      this.showTable = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
