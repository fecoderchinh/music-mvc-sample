<template>
  <!-- eslint-disable max-len -->
  <TContainer>
    <div class="px-5 grid grid-cols-4 md:gap-10 sm:gap-5" slot="content">
      <div class="lg:col-span-1 md:col-span-2 sm:col-span-4" v-for="(data, index) in themeList" :key="index">
        <div class="relative theme-box group">
          <div class="w-full bg-black">
            <a :href="data.hrefDetail" class="block">
              <img :src="data.img" :alt="data.name" class="w-full hover:opacity-75">
            </a>
          </div>
          <div class="cms-theme-box__metadata pt-15px">
            <ul class="list-none flex items-center w-full cms-typo">
              <li class="inline-flex flex-auto">
                <h3 class="font-medium text-xl text-labelAndTitle hover:text-cmsLightGreen">
                  <a :href="data.hrefDetail">{{ data.name }}</a>
                </h3>
              </li>
              <li class="inline-flex flex-auto justify-end">
                <h3 class="text-lg text-menuItem">{{ data.style }}</h3>
              </li>
            </ul>
            <ul class="list-none w-full">
              <li class="block">
                <h3 class="text-cmsOrange text-2xl mt-15px">
                  {{ data.newPrice }}
                  <span class="ml-5 line-through text-lg text-placeholderStyle">
                    {{ data.oldPrice }}
                  </span>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-span-4 text-center">
        <Button button-class="mr-10 md:mr-5 sm:mr-5 cms-button cms-button-rounded cms-button-green cms-button-lg">
          <template slot="name">
            Xem thêm
          </template>
        </Button>
      </div>
    </div>
  </TContainer>
</template>

<script>
import TContainer from '@/components/theme/TContainer.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    TContainer,
    Button,
  },
  props: {
    themeList: Array,
  },
};
</script>>
