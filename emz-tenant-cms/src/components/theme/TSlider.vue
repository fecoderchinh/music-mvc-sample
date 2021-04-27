<template>
  <!-- eslint-disable max-len -->
  <div class="w-full bg-cmsLight">
    <TContainer>
      <div class="px-5 pb-10 grid grid-cols-6 gap-5" slot="content">
        <div class="col-span-4 sm:col-span-6 xl:pt-10">
          <VueSlickCarousel ref="image" v-bind="settings1" @beforeChange="onBeforeChangeC1">
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
        <div class="col-span-2 sm:col-span-6">
          <VueSlickCarousel class="xl:mt-24" ref="content" v-bind="settings2" @beforeChange="onBeforeChangeC1">
            <div class="cms-typo sm:mt-5" v-for="(data, index) in slideData" :key="index">
              <h2 class="text-cmsLightGreen text-3xl font-extrabold">{{ data.name }}</h2>
              <p class="text-menuItem text-lg mt-15px lg:block md:hidden">{{ data.desc }}</p>
              <p class="text-labelAndTitle text-lg mt-15px">{{ data.style }}</p>
              <h3 class="text-cmsOrange text-2xl mt-15px">
                {{ data.newPrice }}
                <span class="ml-5 line-through text-lg text-placeholderStyle">{{ data.oldPrice }}</span>
              </h3>
              <div class="mt-30px">
                <div class="inline">
                  <Button button-class="mr-10 md:mr-5 sm:mr-5 cms-button cms-button-rounded cms-button-green cms-button-lg">
                    <template slot="name">
                      Xem thử
                    </template>
                  </Button>
                  <Button button-class="cms-button cms-button-rounded outline cms-button-green cms-button-lg">
                    <template slot="name">
                      Chi tiết
                    </template>
                  </Button>
                </div>
              </div>
            </div>
            <template #nextArrow="arrowOption">
              <div class="custom-arrow prev">
                <button class="no-effect" @click.stop="showPrev">
                  <LongArrowNewSVG class="w-6 fill-placeholderStyle inline transform rotate-180"/>
                </button>
                {{ arrowOption.currentSlide+1 }}/{{ arrowOption.slideCount }}
                <button class="no-effect" @click.stop="showNext">
                  <LongArrowNewSVG class="w-6 fill-placeholderStyle inline"/>
                </button>
              </div>
            </template>
            <template #prevArrow="arrowOption">
              <div class="custom-arrow hidden">
                {{ arrowOption.currentSlide }}
              </div>
            </template>
          </VueSlickCarousel>
        </div>
      </div>
    </TContainer>
  </div>
</template>

<script>
import TContainer from '@/components/theme/TContainer.vue';
import Button from '@/components/client/Button.vue';

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

import {
  LongArrowNewSVG,
} from '@/components/SVGs.vue';

/* eslint-disable global-require */
export default {
  components: {
    TContainer,
    Button,
    VueSlickCarousel,
    LongArrowNewSVG,
  },
  props: {
    slideData: Array,
  },
  data() {
    return {
      desktopPath: `url(${require('@/assets/desktop.svg')})`,
      mobilePath: `url(${require('@/assets/mobile.svg')})`,
      settings1: {
        fade: true,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        asNavFor: this.$refs.content,
      },
      settings2: {
        fade: true,
        dots: false,
        arrows: true,
        asNavFor: this.$refs.image,
      },
    };
  },
  methods: {
    onBeforeChangeC1(currentPosition, nextPosition) {
      this.$refs.image.goTo(nextPosition);
      this.$refs.content.goTo(nextPosition);
    },
    showNext() {
      this.$refs.content.next();
    },
    showPrev() {
      this.$refs.content.prev();
    },
  },
};
</script>

<style lang="scss">
.desktop {
  @apply relative bg-no-repeat bg-cover bg-top;
  &-inner {
    @apply bg-gray-200 absolute left-50 transform -translate-x-1/2 bottom-0;
    @apply overflow-hidden;
  }
  @media (max-width:767px) {
    @apply mx-auto;
    width: 376px;
    height: 230px;
    .desktop-inner {
      width: 370px;
      height:calc(100% - 22px);
    }
  }
  @media (min-width:768px) {
    width: 378px;
    height: 230px;
    .desktop-inner {
      width: 370px;
      height:calc(100% - 22px);
    }
  }
  @media (min-width: 1024px) {
    width: 500px;
    height: 300px;
    .desktop-inner {
      width: 492px;
      height: 272px;
    }
  }
  @media (min-width: 1200px) {
    width: 680px;
    height: 400px;
    .desktop-inner {
      width: 668px;
      height: 365px;
    }
  }
}
.mobile {
  @screen lg {
    @apply mr-10;
  }
  @screen md {
    @apply mr-5;
  }
  @screen md {
    @apply absolute;
  }
  @screen sm {
    @apply relative mx-auto;
  }
  &-inner {
    @apply bg-gray-200 rounded-t-md absolute left-50 transform -translate-x-1/2 bottom-0;
    @apply overflow-hidden;
    img {
      @apply rounded-t-md -ml-px;
    }
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    .mobile-inner {
      width: 175px;
      height: 170px;
    }
  }
  @media (min-width: 1024px) {
    width: 260px;
    height: 270px;
    .mobile-inner {
      width: 220px;
      height: 230px;
    }
  }
  @media (min-width: 1200px) {
    width: 260px;
    height: 360px;
    .mobile-inner {
      width: 220px;
      height: 320px;
    }
  }
}
.custom-arrow {
  @apply absolute right-0 cms-typo text-lg z-30 text-placeholderStyle;
  @screen lg {
    @apply mt-10;
  }
  @screen md {
    @apply mt-5 top-100;
  }
  @screen sm {
    @apply top-0 left-50 transform -translate-x-1/2 text-center;
  }
}
</style>
