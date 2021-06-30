<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          <slot name="label">Ảnh sản phẩm <small class="ml-3 text-menuIcon">Kéo để  sắp xếp vị trí ảnh</small></slot>
        </label>
        <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Thêm ảnh sản phẩm</a>
      </div>

      <div class="grid grid-cols-10 gap-5 gallery" v-if="data">
        <div class="col-span-4 md:row-span-2 sm:col-span-10">
          <div class="bg-black">
            <img src="https://picsum.photos/350" class="mx-auto">
            <div class="gallery-meta">
              <ul class="list-none flex items-center justify-center">
                <li class="inline-flex text-white hover:text-buttonAndURL">
                  <EyeSVG class="w-icon"/>
                </li>
                <li class="inline-flex border p-3 mx-2 text-white hover:text-buttonAndURL">
                  <ALTSVG class="w-8"/>
                </li>
                <li class="inline-flex text-white hover:text-buttonAndURL">
                  <DeleteSVG class="w-icon"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-10 gallery-right">
          <div class="gallery-item">
            <div class="bg-black">
              <img src="https://picsum.photos/350" class="mx-auto">
              <div class="gallery-meta">
                <ul class="list-none flex items-center justify-center">
                  <li class="inline-flex text-white hover:text-buttonAndURL">
                    <EyeSVG class="w-icon"/>
                  </li>
                  <li class="inline-flex border p-3 mx-2 text-white hover:text-buttonAndURL">
                    <ALTSVG class="w-8"/>
                  </li>
                  <li class="inline-flex text-white hover:text-buttonAndURL">
                    <DeleteSVG class="w-icon"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-10">
          <div class="gallery-item">
            <div class="absoluteSquare border">
              <div class="onHover fill-menuIcon">
                <PlusSVG class="w-icon"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-10">
          <div class="gallery-item">
            <div class="absoluteSquare border">
              <div class="onHover fill-menuIcon">
                <PlusSVG class="w-icon"/>
              </div>

            </div>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-10">
          <div class="gallery-item">
            <div class="absoluteSquare border">
              <div class="onHover fill-menuIcon">
                <PlusSVG class="w-icon"/>
              </div>

            </div>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-10">
          <div class="gallery-item">
            <div class="absoluteSquare border">
              <div class="onHover fill-menuIcon">
                <PlusSVG class="w-icon"/>
              </div>

            </div>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-10">
          <div class="gallery-item">
            <div class="absoluteSquare border">
              <div class="onHover fill-menuIcon">
                <PlusSVG class="w-icon"/>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-10 gap-5 gallery" v-else>
        <div class="col-span-10 row-span-2 border rounded max-h-64 h-64 hover:border-buttonAndURL">
          <div class="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 text-menuIcon">
            <NoImgSVG class="w-8 mx-auto"/>
            <p class="text-center cms-typo text-14px">
              Kéo thả file ảnh vào đây để thêm mới
            </p>
          </div>
        </div>
      </div>
    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';

import {
  EyeSVG,
  ALTSVG,
  DeleteSVG,
  PlusSVG,
  NoImgSVG
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    EyeSVG,
    ALTSVG,
    DeleteSVG,
    PlusSVG,
    NoImgSVG
  },
  props: ['data']
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
    &-item {
      .onHover {
        @apply absolute top-0 right-0 bottom-0 left-0 items-center justify-center hidden;
      }
      &:hover, &:focus {
        .onHover {
          @apply flex;
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
