<template>
  <div class="relative">
    <!-- eslint-disable max-len -->
    <button class="block no-effect group overflow-hidden focus:outline-none focus:border-none hover:shadow-none focus:shadow-none mx-5 text-14px font-lato text-labelAndTitle" @click="dropDownOpen = !dropDownOpen">
      <!-- IF NO AVATAR -->
      <AvatarSVG class="w-10 h-10 inline mr-4 fill-cmsGray no-effect"/>
      <!-- IF HAS AVATAR -->
      <!-- <img src="https://picsum.photos/300/300" class="w-10 h-10 rounded-full shadow-lg inline mr-4"> -->
      <span class="w-20 overflow-hidden truncate inline-flex">
        <span class="truncate">{{ this.$store.state.auth.currentUser.user.fullName }}</span>
      </span>
      <AngleSVG class="h-3 w-3 fill-menuIcon inline ml-4 no-effect" />
    </button>
    <Dropdown :show="this.dropDownOpen" v-click-outside="hideOnClickOutside">
      <a href="#" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        Tài khoản của tôi
      </a>
      <a href="#" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        Gói dịch vụ
      </a>
      <a href="#" @click="logout" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        Đăng xuất
      </a>
      <div class="divider divider-2/3"></div>
      <a href="#" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        Điều khoản dịch vụ
      </a>
      <a href="#" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        Chính sách bảo mật
      </a>
      <div class="divider divider-1/3"></div>
      <a href="#" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        Hỗ trợ
      </a>
      <a href="#" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        Hotline 24/7: <span class="text-buttonAndURL">0902 492 111</span>
      </a>
      <a href="#" class="cms-dropdown__item">
        <AvatarSVG class="w-4 inline no-effect"/>
        <span>Email: hotro@emz.vn</span>
      </a>
    </Dropdown>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import {
  AngleSVG,
  AvatarSVG,
} from '@/components/SVGs.vue';
import Dropdown from '@/components/client/Dropdown.vue';

export default {
  components: {
    Dropdown,
    AngleSVG,
    AvatarSVG,
  },
  data() {
    return {
      dropDownOpen: false,
    };
  },
  methods: {
    hideOnClickOutside() {
      this.dropDownOpen = false;
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
