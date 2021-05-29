<template>
  <div class="relative">
    <!-- eslint-disable max-len -->
    <button class="cms-button cms-button-white w-full text-standardCMS text-labelAndTitle" @click="dropDownOpen = !dropDownOpen">
      <span class="w-20 overflow-hidden inline-flex">
        <span class="truncate">+ Thêm điều kiện</span>
      </span>
    </button>
    <Dropdown :show="this.dropDownOpen" v-click-outside="hideOnClickOutside" class="z-10" dropdown-class="w-full no-top-arrow dropdown-custom-mt">
      <a href="#" class="cms-dropdown__item">
        Tên sản phẩm
      </a>
      <a href="#" class="cms-dropdown__item">
        Giá sản phẩm
      </a>
      <a href="#" class="cms-dropdown__item">
        Thương hiệu
      </a>
      <a href="#" class="cms-dropdown__item">
        Loại sản phẩm
      </a>
      <a href="#" class="cms-dropdown__item">
        Được tag với
      </a>
      <a href="#" class="cms-dropdown__item">
        Số lượng còn
      </a>
    </Dropdown>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import Dropdown from '@/components/client/Dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      dropDownOpen: false,
    };
  },
  methods: {
    hideOnClickOutside() {
      this.dropDownOpen = false;
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

<style lang="scss">
.dropdown-custom-mt {
  @apply mt-3 #{!important};
}
</style>
