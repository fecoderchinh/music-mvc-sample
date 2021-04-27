<template>
  <ul class="list-none theme-navbar">
    <template v-for="(data, index) in optionDataTable">
      <li class="theme-navbar__item inline-flex relative" :key="index">
        <TDropdown class="inline" v-if="data.child" :optionChildData="data.child">
          <span slot="label">{{ data.name }}</span>
        </TDropdown>
        <a href="#" v-else>{{ data.name }}</a>
      </li>
    </template>
  </ul>
</template>

<script>
import TDropdown from '@/components/theme/TDropdown.vue';

export default {
  components: {
    TDropdown,
  },
  data() {
    return {
      optionDataTable: [
        {
          name: 'Tất cả theme',
        },
        {
          name: 'Miễn phí',
        },
        {
          name: 'Phong cách',
          child: ['Phong cách 1', 'Phong cách 2'],
        },
        {
          name: 'Nghề nghiệp',
          child: ['Nghề nghiệp 1', 'Nghề nghiệp 2'],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .theme-navbar {
    &__item {
      > * {
        @apply mr-30px py-15px;
      }
      a {
        @apply text-cmsLightGreen;
      }
    }
    &.responsive {
      .theme {
        &-navbar {
          &__item {
            @apply flex px-5;
            > * {
              @apply mr-0 py-5px;
            }
          }
        }
        &-dropdown {
          @apply w-full;
          &__label {
            @apply block relative;
          }
          &__icon {
            @apply absolute top-5px right-0;
          }
          &__child {
            @apply block static bg-transparent shadow-none border-0;
          }
        }
      }
    }
  }
</style>
