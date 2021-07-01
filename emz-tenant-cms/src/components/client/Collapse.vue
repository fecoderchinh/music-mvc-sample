<template>
  <!-- eslint-disable max-len -->
  <Card class="cms-collapse">
    <h3 class="cms-collapse__header" slot="header" @click="toggle">
      <AngleSVG
          class="fill-menuIcon h-3 w-3 inline hover:fill-buttonAndURL mr-4 transform"
          :class="show ? 'rotate-0' : '-rotate-90'"/>{{ header }}
    </h3>
    <div class="cms-collapse__body cms-scrollbar" slot="body">
      <transition name="collapse" mode="in-out">
        <div class="cms-collapse__body-content" v-if="show">
          <slot></slot>
        </div>
      </transition>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/client/Card.vue';

import {
  AngleSVG
} from '@/components/SVGs'

export default {
  components: {
    Card,
    AngleSVG
  },
  props: {
    header: {
      type: String,
      default: 'header'
    },
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
.cms-collapse {
  .card-header {
    @apply border-b-0;
  }
  .card-body {
    @apply p-0;
  }
  &__header {
    @apply block cursor-pointer cms-typo text-14px text-labelAndTitle;
  }
  &__body {
    @apply flex flex-col justify-start pl-12 pr-5 overflow-y-auto;
    &-content {
      @apply h-auto flex-1;
      max-height: 225px;
      transition:height .0s ease-in-out;
    }
  }
}
.collapse {
  &-enter,
  &-leave-to {
    flex: 0;
    height: 0;
  }

  // &-enter-active,
  // &-leave-active {

  //   flex: 1;
  //   height: auto;
  //   overflow: hidden;
  //   transition: flex .3s ease-out;
  // }
}
</style>
