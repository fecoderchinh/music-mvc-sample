<template>
  <!-- eslint-disable max-len -->
  <Card>
    <h3 class="block-header" slot="header">
      <span class="mr-5"><slot name="header">default header</slot></span>
      <a href="#" class="text-buttonAndURL">Thêm vào</a>
    </h3>
    <ul class="block-list depth-0" slot="body">

      <li class="block-list__item" v-for="(data, index) in listMenu" :key="index">
        <h3>
          <SixDotsSVG class="w-2 fill-placeholderStyle stroke-placeholderStyle inline"/>
          <a :href="data.levelZeroUrl">{{ data.levelZeroItem }}</a>
          <a href="#" class="text-buttonAndURL" v-if="data.addon">Thêm vào</a>
        </h3>
        <ul class="block-list depth-1" v-if="data.levelOne">
          <li class="block-list__item" v-for="(data1, index1) in data.levelOne" :key="index1">
            <h3>
              <SixDotsSVG class="w-2 fill-placeholderStyle stroke-placeholderStyle inline"/>
              <a :href="data1.levelOneUrl">{{ data1.levelOneItem }}</a>
              <a href="#" class="text-buttonAndURL" v-if="data1.addon">Thêm vào</a>
            </h3>
            <ul class="block-list depth-2" v-if="data1.levelTwo">
              <li class="block-list__item" v-for="(data2, index2) in data1.levelTwo" :key="index2">
                <h3>
                  <SixDotsSVG class="w-2 fill-placeholderStyle stroke-placeholderStyle inline"/>
                  <a :href="data2.levelTwoUrl">{{ data2.levelTwoItem }}</a>
                  <a href="#" class="text-buttonAndURL" v-if="data2.addon">Thêm vào</a>
                </h3>
              </li>
              <li class="block-list__item last">
                <h3>
                  <SixDotsSVG class="w-2 fill-placeholderStyle stroke-placeholderStyle inline"/>
                  <a href="#">Danh mục mới</a>
                </h3>
              </li>
            </ul>
          </li>
          <li class="block-list__item last">
            <h3>
              <SixDotsSVG class="w-2 fill-placeholderStyle stroke-placeholderStyle inline"/>
              <a href="#">Danh mục mới</a>
            </h3>
          </li>
        </ul>
      </li>

      <li class="block-list__item last">
        <h3>
          <SixDotsSVG class="w-2 fill-placeholderStyle stroke-placeholderStyle inline"/>
          <a href="#">Danh mục mới</a>
        </h3>
      </li>

    </ul>
  </Card>
</template>

<script>
import Card from '@/components/client/Card.vue';

import {
  SixDotsSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Card,
    SixDotsSVG,
  },
  props: {
    listMenu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
  .block {
    &-header {
      @apply cms-typo text-labelAndTitle text-13px;
    }
    &-list {
      @apply list-none grid gap-5;
      &__item {
        @apply block;
        h3 {
          @apply cms-typo text-labelAndTitle text-13px flex items-center;
          > * {
            @apply inline-flex;
            &:not(:last-child) {
              @apply mr-10px;
            }
          }
        }
        &.last {
          h3 {
            @apply text-cmsOrange #{!important};
          }
        }
      }
      &:not(.depth-0) {
        @apply pt-5;
      }
      &.depth-1 {
        @screen md {
          @apply ml-8;
        }
        li {
          &:not(.last) {
            h3 {
              @apply text-menuItem;
            }
          }
        }
      }
      &.depth-2 {
        @screen md {
          @apply ml-16;
        }
        li {
          &:not(.last) {
            h3 {
              @apply text-placeholderStyle;
            }
          }
        }
      }
    }
  }
</style>
