<template>
  <!-- eslint-disable max-len -->
  <div class="w-full shadow-sm bg-white md:h-16 sm:h-auto md:px-5 border-b sm:max-flex-col md:flex items-center justify-start">
    <div class="flex flex-auto sm:p-3 md:p-0 md:border-0">
      <!-- top navbar -->
      <div class="flex-auto flex">
          <!-- mobile hamburger -->
          <div class="flex items-center">
              <div class="lg:hidden flex items-center md:mr-4 sm:mr-3">
                  <!-- eslint-disable max-len -->
                  <button class="group focus:outline-none p-2 border" @click="$emit('toggle-sidebar')">
                      <MenubarSVG class="w-icon h-icon text-labelAndTitle group-focus:fill-buttonAndURL"/>
                  </button>
              </div>
          </div>

          <!-- search bar -->
          <div class="search-bar relative text-gray-600 flex-auto">
              <input type="text" name="search" placeholder="Nhập từ khóa tìm kiếm..." class="bg-white h-10 w-full px-3 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem pr-10 relative" :class="zIndex()" @click="toggleAdvanceSearch = true">
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4 focus:outline-none" :class="zIndex()">
                  <SearchSVG class="h-4 w-4 fill-menuIcon"/>
              </button>

              <!-- advance-search-box -->
              <AdvanceSearchBox v-click-outside="hide" mainClass="navbar-search-box" v-if="toggleAdvanceSearch">
                  <NavbarAdvanceSearch slot="content"/>
              </AdvanceSearchBox>
              <!-- end advance-search-box -->

          </div>
      </div>
      <div class="flex mx-5">
        <a href="#" class="text-buttonAndURL cms-typo text-14px flex h-full items-center relative sm:mr-2">
          <DashboardSVG class="fill-buttonAndURL w-icon h-icon group-hover:fill-buttonAndURL" />
          <span class="ml-2 pt-1">Dashboard</span>
        </a>
      </div>
      <div class="flex">
        <NotifyBell />
      </div>
    </div>
    <div class="flex ml-auto items-center sm:hidden md:h-full">
        <div class="flex ml-5 hover:bg-gray-100 relative h-full">
          <div class="flex items-center">
            <DropdownNavbar/>
          </div>
        </div>
        <!-- right navbar -->
        <div class="flex items-center relative border-dashed border-l h-full md:pl-4 sm:px-3 sm:ml-auto">
          <UpgradeIcon/>
        </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside';

import DropdownNavbar from './DropdownNavbar.vue';
import AdvanceSearchBox from './AdvanceSearchBox.vue';
import NotifyBell from './NotifyBell.vue';
import NavbarAdvanceSearch from './NavbarAdvanceSearch.vue';
import UpgradeIcon from './UpgradeIcon.vue';

import {
  MenubarSVG,
  SearchSVG,
  DashboardSVG,
} from '../SVGs.vue';

export default {
  components: {
    UpgradeIcon,
    DropdownNavbar,
    AdvanceSearchBox,
    MenubarSVG,
    SearchSVG,
    NotifyBell,
    NavbarAdvanceSearch,
    DashboardSVG,
  },
  data() {
    return {
      toggleAdvanceSearch: false,
    };
  },
  methods: {
    zIndex() {
      let str = '';
      if (this.toggleAdvanceSearch) str = ' z-40';
      return str;
    },
    hide() {
      this.toggleAdvanceSearch = false;
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
