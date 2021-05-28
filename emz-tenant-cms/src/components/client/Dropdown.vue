<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <div class="cms-dropdown" :class="[
        this.show ? '' : 'hidden',
        dropdownClass
    ]">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    show: Boolean,
    dropdownClass: String
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
  &.no-top-arrow {
    @apply mt-0 rounded-none shadow-none border #{!important};
    &:before, &:after {
      content: none;
    }
  }
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
