<template>
  <!-- eslint-disable max-len -->
  <div class="cms-treeselect">
    <treeselect v-model="value" :multiple="false" :options="this.optionData" :placeholder="this.placeholder"/>
  </div>
</template>

<script>
// import the component
import Treeselect from '@riophae/vue-treeselect';
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

export default {
  // register the component
  components: { Treeselect },
  props: {
    optionData: Array,
    placeholder: String,
  },
  data() {
    return {
      // define the default value
      value: null,
    };
  },
  updated() {
    const thisEl = this.$el.querySelector('.vue-treeselect__control-arrow');
    thisEl.innerHTML = `
      <path class="st0" d="M11.9,10.5h-0.7l-0.3-0.2c0.9-1,1.4-2.4,1.4-3.8c0-3.2-2.6-5.9-5.8-5.9S0.6,3.2,0.6,6.5s2.6,5.8,5.9,5.8c1.4,0,2.8-0.5,3.8-1.4l0.2,0.3v0.7l4.5,4.5l1.3-1.3L11.9,10.5L11.9,10.5z M6.5,10.5c-2.2,0-4.1-1.8-4.1-4s1.8-4.1,4.1-4.1s4,1.8,4,4.1S8.7,10.5,6.5,10.5L6.5,10.5z"/>
    `;
    thisEl.setAttribute('viewBox', '0 0 17 17');
    thisEl.classList.add('vue-treeselect__search');
  },
};
</script>

<style lang="scss">
  .cms-treeselect {
    @apply cms-typo text-14px;
    .vue-treeselect {
      &__control {
        @apply rounded h-10;
      }
      &__control, &__menu {
        @apply border-gray-400;
      }
      &__menu {
        @apply py-0;
        scrollbar-color: grey #eee;
        scrollbar-width: thin;
        &::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        &::-webkit-scrollbar-track {
          @apply bg-gray-200;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
          @apply bg-gray-400;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
          @apply bg-gray-500;
        }
      }
      &__option {
        @apply py-2;
        &--highlight {
          @apply bg-sidebarHover;
          svg {
            @apply fill-buttonAndURL;
          }
          .vue-treeselect__label {
            @apply text-buttonAndURL;
          }
        }
      }
      &__label {
        @apply text-menuItem;
      }
      .vue-treeselect__single-value,
      .vue-treeselect__placeholder {
        @apply mt-1;
      }
      .vue-treeselect__single-value {
        @apply text-labelAndTitle;
      }
      .vue-treeselect__placeholder {
        @apply text-placeholderStyle;
      }
      &__input-container {
        input {
          &:hover, &:focus {
            @apply shadow-none;
          }
        }
      }
      &__search {
        @apply w-4 h-4 fill-placeholderStyle #{!important};
      }
      &__control-arrow {
        @apply w-4 h-4 transform rotate-0 #{!important}
      }
      &__option--selected,
      &__option--highlight {
        @apply font-normal text-buttonAndURL;
      }
    }
  }
</style>
