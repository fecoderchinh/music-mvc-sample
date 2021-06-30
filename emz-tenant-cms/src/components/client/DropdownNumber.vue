<template>
  <div class="relative">
    <!-- eslint-disable max-len -->
    <button class="cms-button cms-button-white w-full text-standardCMS text-labelAndTitle" @click="dropDownOpen = !dropDownOpen">
      <span class="inline-flex">
        {{ currentLabel }}
      </span>
    </button>
    <Dropdown :show="this.dropDownOpen" v-click-outside="hideOnClickOutside" class="z-10" dropdown-class="w-full no-top-arrow dropdown-custom-mt dropdown__time cms-scrollbar no-py">
      <a href="javascript:void(0)" @click="getNumber(i)" class="cms-dropdown__item" v-for="(n, i) in range+1" :key="i">
        {{ i }}
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
  props: {
    label: {
      type: String,
      default: 'Phút'
    },
    range: Number
  },
  data() {
    return {
      dropDownOpen: false,
      currentLabel: this.label
    };
  },
  methods: {
    hideOnClickOutside() {
      this.dropDownOpen = false;
    },
    getNumber(n) {
      this.currentLabel = n === 0 ? '00' : n
    }
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
.dropdown__time {
  max-height: 180px;
  overflow-y: scroll;
}
</style>
