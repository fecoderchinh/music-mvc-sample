<template>
  <!-- eslint-disable max-len -->
  <TContainer>
    <div class="md:px-5 sm:px-5 grid grid-cols-4 md:gap-10 sm:gap-5" slot="content">
      <div class="lg:col-span-1 md:col-span-2 sm:col-span-2" v-for="(data, index) in themeCategories" :key="index">
        <div class="relative theme-categories group">
          <a :href="data.href" class="block relative cms-typo bg-black text-center">
            <img :src="data.img" :alt="data.name" class="w-full opacity-50" draggable="false">
            <h3 class="xl:text-3xl md:text-2xl sm:text-xl font-medium text-white absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2">{{ data.name }}</h3>
          </a>
        </div>
      </div>
    </div>
  </TContainer>
</template>

<script>
import TContainer from '@/components/theme/TContainer.vue';

export default {
  components: {
    TContainer,
  },
  props: {
    themeCategories: Array,
  },
};
</script>>
