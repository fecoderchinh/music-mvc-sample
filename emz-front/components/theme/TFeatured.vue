<template>
  <!-- eslint-disable max-len -->
  <div class="w-full bg-cmsLight">
    <TContainer>
      <div class="px-5 pb-10 grid grid-cols-6 gap-5" slot="content">
        <div class="col-span-4 sm:col-span-6 xl:pt-10">
          <VueSlickCarousel ref="tfeatured" v-bind="settings1">
            <div class="relative select-none" v-for="(data, index) in slideData" :key="index">
              <div class="desktop" :style="{ backgroundImage: desktopPath }">
                <div class="desktop-inner">
                  <img :src="data.desktopImg" :alt="data.name" class="w-full" draggable="false">
                </div>
              </div>
              <div class="mobile sm:hidden bg-no-repeat bg-cover md:right-0 md:bottom-0" :style="{ backgroundImage: mobilePath }">
                <div class="mobile-inner">
                  <img :src="data.mobileImg" :alt="data.name" class="w-full" draggable="false">
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="col-span-2 sm:col-span-6 flex items-end">

            <div class="cms-typo flex flex-col w-full">
              <h2 class="text-cmsLightGreen text-3xl font-extrabold">Emi Store</h2>
              <p class="text-menuItem text-lg lg:mt-15px md:mt-10px sm:mt-10px xl:block lg:hidden md:hidden sm:hidden">Được thiết kế để bán hàng online nhanh chóng, nổi bật</p>

              <ul class="list-none theme-color lg:py-5 sm:order-first sm:text-center">
                <li class="inline-block mr-3 md:my-2 sm:my-2" v-for="(data, index) in slideData" :key="index" @click="onBeforeChangeC1(index)">
                  <TColorPicker
                    :class="checkState === index ? 'active' : null"
                    pickClass="lg:text-lg md:text-14px sm:text-14px"
                    :id="index"
                    name="themeColorPicker"
                    :checked="checkState === index"
                    :color="data.code">
                    <span class="text-labelAndTitle" slot="color">
                      {{ data.color }}
                    </span>
                  </TColorPicker>
                </li>
              </ul>

              <h3 class="text-cmsOrange text-2xl">
                499,000đ
                <span class="ml-5 line-through text-lg text-placeholderStyle">1,500,000đ</span>
              </h3>
              <div class="lg:my-5 md:my-3 sm:my-3">
                <div class="inline">
                  <button class="mr-10 md:mr-5 sm:mr-5 cms-button cms-button-rounded cms-button-green cms-button-lg">
                   
                      <span class="lg:text-lg md:text-14px sm:text-14px">Xem thử</span>
                    
                  </button>

                  <button class="cms-button cms-button-rounded outline cms-button-green cms-button-lg">
                   
                      <span class="text-menuItem lg:text-lg md:text-14px sm:text-14px">Lựa chọn</span>
                    
                  </button>
                </div>
              </div>
              <div class="w-full">
                <ul class="list-none">
                  <li class="inline-flex items-center mr-5 md:py-1 sm:py-1">
                    <a href="#" class="lg:text-base md:text-14px sm:text-14px">
                      <EllipseSVG class="inline h-icon w-icon mr-3 fill-cmsLightGreen -mt-px"/>
                        Liên hệ hỗ trợ
                    </a>
                  </li>
                  <li class="inline-flex items-center md:py-1 sm:py-1">
                    <a href="#" class="lg:text-base md:text-14px sm:text-14px">
                      <SettingSVG class="inline h-icon w-icon mr-3 fill-cmsLightGreen -mt-px"/>
                        Hướng dẫn theme này
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </TContainer>
  </div>
</template>

<script>
import TContainer from './TContainer.vue';
import TColorPicker from '@/components/theme/TColorPicker.vue';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

import {
  EllipseSVG,
  SettingSVG,
} from '@/components/SVGs.vue';

/* eslint-disable global-require */
export default {
  components: {
    TContainer,
    TColorPicker,
    VueSlickCarousel,
    EllipseSVG,
    SettingSVG,
  },
  props: {
    slideData: Array,
  },
  data() {
    return {
      checkState: 0,
      desktopPath: `url(${require('~/assets/images/desktop.svg')})`,
      mobilePath: `url(${require('~/assets/images/mobile.svg')})`,
      settings1: {
        fade: true,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        swipe: false,
        asNavFor: this.$refs.content,
      },
      settings2: {
        slideToShow: 3,
        dots: false,
        arrows: false,
        asNavFor: this.$refs.image,
      },
    };
  },
  methods: {
    onBeforeChangeC1(pos) {
      this.$refs.tfeatured.goTo(pos);
      this.checkState = pos;
    },
  },
};
</script>
