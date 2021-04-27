<template>
  <!-- eslint-disable max-len -->
  <div class="w-full bg-cmsLight">
    <TContainer>
      <div class="flex cms-typo text-base px-5" slot="content">

        <div class="flex-auto flex items-center">
          <button class="lg:hidden md:flex py-15px no-effect" @click="showSidebar = true">
            <MenubarSVG class="w-icon h-icon text-labelAndTitle filter-none cursor-pointer"/>
          </button>
          <TNavbarLeft class="lg:flex md:hidden sm:hidden"/>
        </div>

        <div class="flex-auto items-center justify-end lg:flex md:hidden sm:hidden">
          <TNavbarRight/>
        </div>

      </div>
    </TContainer>
    <TNavbarResponsive v-click-outside="hide" @close="showSidebar = false" v-if="showSidebar"/>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import TContainer from '@/components/theme/TContainer.vue';
import TNavbarLeft from '@/components/theme/TNavbarLeft.vue';
import TNavbarRight from '@/components/theme/TNavbarRight.vue';
import TNavbarResponsive from '@/components/theme/TNavbarResponsive.vue';

import {
  MenubarSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    TContainer,
    MenubarSVG,
    TNavbarLeft,
    TNavbarRight,
    TNavbarResponsive,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    hide() {
      this.showSidebar = false;
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
