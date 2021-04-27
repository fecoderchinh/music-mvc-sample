<template>
  <!-- eslint-disable max-len -->
  <transition name="modal">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-container container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button class="modal-default-button group hover:shadow-none focus:outline-none" @click="$emit('close')">
              <CloseSVG class="w-14px h-14px fill-placeholderStyle group-hover:fill-buttonAndURL"/>
            </button>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
            </slot>
          </div>
        </div>
      </div>
      <a href="#" class="mask" @click.self.prevent="$emit('close')"></a>
    </div>
  </transition>
</template>

<script>
import {
  CloseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    CloseSVG,
  },
};
</script>

<style lang="scss">
  .modal {
    @apply z-40;
    &, .mask {
      @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 table;
      @apply transition duration-300 ease-out;
    }
    .mask {
      @apply cursor-default z-30;
    }
    &-wrapper {
      @apply table-cell align-middle;
    }
    &-container {
      @apply bg-white rounded-sm shadow mx-auto relative z-40 overflow-hidden;
      @apply transition duration-300 ease-out;
      width: calc(100vw - 2.5rem);
      // @media (min-width: 1024px) {
      //   @apply w-11/12;
      // }
      // @media (max-width: 1023px) {
      //   width: calc(100vw - 2.5rem);
      // }
    }
    &-header {
      @apply flex relative items-center p-5 border-b;
    }
    &-body {
      @apply p-5;
      overflow-y: scroll;
      width: calc( 100% + 20px );
      @media (pointer:coarse) {
        @apply w-full;
      }
      @media (min-width: 1024px) {
        max-height: 70vh;
      }
      @media (max-width: 1023px) {
        max-height: 50vh;
      }
    }
    &-footer {
      @apply bg-gray-200 p-5;
    }
    &-default-button {
      @apply absolute top-50 right-0 transform -translate-y-1/2 mr-5;
    }
    &-enter, &-leave {
      opacity: 0;
    }
    &-enter &-container,
    &-leave &-container {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    &-md {
      .modal {
        &-container {
          @screen md {
            width: 720px;
          }
        }
      }
    }
  }

</style>
