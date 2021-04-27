<template>
  <!-- eslint-disable max-len -->
  <div class="cms-select flex-auto z-20">
    <div class="cms-select__current">
      <div class="cms-select__value">
        <p class="cms-select__input-text" :class="labelClass" @click="toggle()">{{ value }}</p>
      </div>
      <AngleSVG class="cms-select__icon w-10px mr-2" />
    </div>
    <ul class="cms-select__list text-center right-0 sm:left-0" :class="visible ? 'block z-40' : 'hidden'">
      <li v-for="data in optionData" :key="data.id">
        <label class="cms-select__option" :for="data.id" aria-hidden="aria-hidden" @click="select(data.name)">{{ data.name }}</label>
      </li>
    </ul>
    <template v-if="visible">
      <span class="cms-select__mask" @click="toggle()"></span>
    </template>
  </div>
</template>

<script>
import {
  AngleSVG,
} from '../SVGs.vue';

export default {
  components: {
    AngleSVG,
  },
  data() {
    return {
      value: 'Website',
      visible: false,
    };
  },
  props: {
    selectOptionName: String,
    labelClass: String,
    optionData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss">
  .cms-select {
    @apply relative mx-auto font-lato font-medium text-14px text-menuItem;
    /*display: block;
    width: 100%;*/
    &.no-decor {
      @apply mx-0 w-40 min-w-40 max-w-40;
      .cms-select {
        &__input-text {
          @apply text-buttonAndURL;
        }
        &__icon {
          @apply fill-buttonAndURL;
        }
      }
    }
    &.has-decor {
      .cms-select {
        &__input-text {
          @apply text-menuItem border bg-white pl-5 h-10 rounded;
        }
        &__icon {
          @apply fill-menuIcon;
        }
      }
    }
    &:not(.has-decor) {
      .cms-select {
        &__list {
          @screen md {
            @apply max-w-40;
          }
        }
        &__option {
          @apply justify-center p-4 h-35px;
        }
      }
    }
    &__current {
      @apply relative cursor-pointer outline-none;
      &:focus {
        + .cms-select {
          &__list {
            @apply opacity-100 block animate-none;
            .cms-select__option {
              @apply cursor-pointer;
            }
          }
          &__icon {
            @apply transform -translate-y-1/2 rotate-180;
          }
        }
      }
    }
    &__icon {
      @apply absolute top-50 right-0;
      @apply transform -translate-y-1/2 opacity-100 transition duration-200 ease-in-out;
    }
    &__value {
      @apply flex;
    }
    &__input {
      @apply hidden;
      &-text {
        @apply flex items-center justify-start select-none;
        @apply w-full;
      }
    }
    &__list {
      @apply absolute w-full p-0 list-none shadow select-none;
    }
    &__option {
      @apply flex items-center justify-start bg-white px-5 h-10;
      &:hover, &:focus {
        @apply text-menuItem bg-gray-200;
      }
    }
    &__mask {
      @apply fixed top-0 left-0 w-full h-full cursor-default table z-30;
      @apply transition duration-300 ease-out;
    }
  }
</style>
