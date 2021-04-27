<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          <slot name="label">Ảnh sản phẩm</slot>
        </label>
        <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Thêm ảnh sản phẩm</a>
      </div>

      <div class="grid grid-cols-5 gap-5 gallery">
        <div class="col-span-2 sm:col-span-5 gallery-left">
          <div class="bg-black">
            <img src="https://picsum.photos/350" class="mx-auto">
            <div class="gallery-meta">
              <ul class="list-none flex items-center justify-center">
                <li class="inline-flex">
                  <EyeSVG class="fill-white w-4"/>
                </li>
                <li class="inline-flex border p-3 mx-2">
                  <ALTSVG class="fill-white w-8"/>
                </li>
                <li class="inline-flex">
                  <DeleteSVG class="fill-white w-3"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-3 sm:col-span-5 gallery-right">
          <div class="grid grid-cols-3 sm:grid-cols-1 gap-5">
            <div class="gallery-item">
              <div class="bg-black">
                <img src="https://picsum.photos/350" class="mx-auto">
                <div class="gallery-meta">
                  <ul class="list-none flex items-center justify-center">
                    <li class="inline-flex">
                      <EyeSVG class="fill-white w-4"/>
                    </li>
                    <li class="inline-flex border p-3 mx-2">
                      <ALTSVG class="fill-white w-8"/>
                    </li>
                    <li class="inline-flex">
                      <DeleteSVG class="fill-white w-3"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="gallery-item">
              <div class="bg-gray-300">
                <SquareSVG class="fill-white border"/>
              </div>
            </div>
            <div class="gallery-item">
              <div class="bg-gray-300">
                <SquareSVG class="fill-white border"/>
              </div>
            </div>
            <div class="gallery-item">
              <div class="bg-gray-300">
                <SquareSVG class="fill-white border"/>
              </div>
            </div>
            <div class="gallery-item">
              <div class="bg-gray-300">
                <SquareSVG class="fill-white border"/>
              </div>
            </div>
            <div class="gallery-item">
              <div class="bg-gray-300">
                <SquareSVG class="fill-white border"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';

import {
  SquareSVG,
  EyeSVG,
  ALTSVG,
  DeleteSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    SquareSVG,
    EyeSVG,
    ALTSVG,
    DeleteSVG,
  },
};
</script>

<style lang="scss">
  .gallery {
    &-left, &-item {
      > div {
        @apply relative cursor-pointer overflow-hidden;
        &:hover, &:focus {
          .gallery-meta {
            @apply bg-opacity-50;
            > ul {
              @apply bottom-0;
            }
          }
        }
      }
    }
    &-meta {
      @apply absolute inset-x-0 inset-y-0 bg-black bg-opacity-0;
      @apply transition-all duration-300;
      > ul {
        @apply absolute inset-x-0;
        bottom: -100%;
        @apply transition-all duration-300;
        li {
          @apply;
        }
      }
    }
    &-item {
      > div {
        > svg {
          &:hover {
            @apply fill-white;
          }
        }
      }
    }
  }
</style>
