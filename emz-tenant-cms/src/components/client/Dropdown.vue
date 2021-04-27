<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <div class="cms-dropdown" :class="this.show ? '' : 'hidden'">
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
    </div>
  </div>
</template>

<script>
import {
  AvatarSVG,
} from '@/components/SVGs.vue';

export default {
  name: 'Dropdown',
  components: {
    AvatarSVG,
  },
  props: {
    show: Boolean,
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('auth/tab-login')
    }
  },
};
</script>

<style lang="scss">
.cms-dropdown {
  @apply cms-typo absolute mt-6 py-2 min-w-4 bg-white rounded shadow-fixed top-100;
  @media (min-width: 992px) {
    @apply left-50 transform -translate-x-1/2;
  }
  @media (max-width: 992px) {
    @apply right-0;
  }
  &__item {
    @apply block whitespace-no-wrap px-4 py-2 text-gray-800 text-14px text-labelAndTitle;
    @media (max-width: 1024px) {
      @apply py-1;
    }
    &:hover {
      @apply bg-gray-100;
    }
    svg {
      @apply fill-menuIcon mr-10px;
    }
  }
  &:before,
  &:after {
    @apply absolute left-50 transform -rotate-45 -translate-x-1/2;
    content: '';
    border-style: solid;
    border-left-color: transparent;
  }
  &:before {
    border-top-width: 16px;
    border-left-width: 16px;
    top: -8px;
    border-top-color: rgba(0, 0, 0, 0.08);
  }
  &:after {
    border-top-width: 14px;
    border-left-width: 14px;
    border-top-color: white;
    top: -7px;
  }
  .divider {
    @apply bg-cmsGray mx-4 my-10px;
    @media (max-width: 992px) {
      @apply my-1;
    }
    &-2\/3 {
      width: calc(100% * 2 / 3);
      height: 1px;
    }
    &-1\/3 {
      width: calc(100% * 1 / 3);
      height: 1px;
    }
  }
}
</style>
