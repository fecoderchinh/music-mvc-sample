<template>
  <!-- eslint-disable max-len -->
  <div class="inline-tag" :class="mainClass">
    <ul class="list-none">
      <li :class="subClass" v-for="(data, index) in optionData" :key="index">
        <Button
          :button-class="tagClass">
          <template slot="name">
            <template v-if="data.draggable">
              <span>
                <SixDotsSVG class="w-2 fill-white stroke-current inline mr-2 -mt-px"/>
              </span>
            </template>
            <span class="inline-flex">{{ data.name }}</span>
            <template v-if="data.closeTag">
              <span @click="removeTag(index)">
                <CloseSVG class="inline-flex w-2 -mt-px ml-3 fill-current hover:fill-buttonAndURL"/>
              </span>
            </template>
          </template>
        </Button>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

import {
  CloseSVG,
  SixDotsSVG,
} from '../SVGs.vue';

export default {
  components: {
    CloseSVG,
    SixDotsSVG,
    Button,
  },
  props: {
    optionData: {
      type: Array,
      default: () => [],
    },
    mainClass: {
      type: String,
      default: 'w-full pt-3',
    },
    subClass: {
      type: String,
      default: 'inline-flex mr-3 mb-3',
    },
    tagClass: {
      type: String,
      default: 'inline-tag__button-default',
    },
  },
  methods: {
    removeTag(tag) {
      this.optionData.splice(tag, 1);
    },
  },
};
</script>

<style lang="scss">
  .inline-tag {
    button {
      &:hover, &:focus {
        @apply outline-none;
      }
    }
    &__button {
      &-default {
        @apply cms-typo bg-gray-200 text-placeholderStyle;
        @apply py-1 px-3 text-13px;
        border-radius: 2px;
      }
      &-blue {
        @apply cms-typo bg-gray-200 border text-buttonAndURL;
        @apply py-1 px-4 text-13px;
      }
      &-red {
        @apply bg-cmsRed text-white text-13px cms-typo rounded px-2 py-1;
        svg {
          @apply fill-white;
        }
      }
      &-green {
        @apply bg-cmsGreen text-white text-13px cms-typo rounded px-2 py-1;
        svg {
          @apply fill-white;
        }
      }
      &-orange {
        @apply bg-Orange text-white text-13px cms-typo rounded px-2 py-1;
        svg {
          @apply fill-white;
        }
      }
    }
  }
</style>
