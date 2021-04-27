<template>
  <!-- eslint-disable max-len -->
  <div class="theme-dropdown">
    <a href="#" class="theme-dropdown__label">
      <slot name="label"></slot>
      <AngleSVG class="h-3 w-3 fill-menuIcon inline ml-2 theme-dropdown__icon" />
    </a>
    <div
      :class="[
        'theme-dropdown__child',
        direction+'-0'
      ]">
      <a href="#" v-for="(data, index) in optionChildData" :key="index">{{ data }}</a>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import {
  AngleSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    AngleSVG,
  },
  props: {
    optionChildData: Array,
    direction: {
      type: String,
      default: 'left',
    },
  },
  data() {
    return {
      dropDownOpen: false,
    };
  },
  methods: {
    hide() {
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
  .theme-dropdown {
    &:hover, &:focus, > a:hover, > a:focus {
      .theme-dropdown__child {
        @apply block;
      }
    }
    &__child {
      @apply border hidden absolute top-100 py-2 px-3 w-48 bg-white rounded-sm shadow-xl z-30;
      &:hover, &:focus {
        @apply block;
      }
      a {
        @apply block py-1;
      }
    }
  }
</style>
