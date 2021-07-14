<template>
  <!-- eslint-disable max-len -->
  <div class="modal-container" @click="modalClick">

    <div class="modal-header">
      <span v-if="isBack" class="inline-flex -mt-px cursor-pointer text-labelAndTitle" @click="eventOnBack">
        <LongArrowSVG class="w-4 mr-3 inline transform rotate-180"/>
      </span>
      <slot name="header">
        default header
      </slot>
      <button v-if="!isBack" type="button"
        class="modal-default-button group hover:shadow-none focus:outline-none no-effect"
        @click.stop="closeModal">
        <CloseSVG class="w-14px h-14px fill-placeholderStyle group-hover:fill-buttonAndURL"/>
      </button>
    </div>

    <perfect-scrollbar :options="{
        maxScrollbarLength: 300,
        minScrollbarLength: 100,
      }">

      <div class="modal-body" :class="bodyHeight">
          <slot name="body">
            default body
          </slot>
      </div>
    </perfect-scrollbar>

    <div class="modal-footer" v-if="showFooter">
      <slot name="footer">
        default footer
      </slot>
    </div>

  </div>
</template>

<script>
import {
  CloseSVG,
  LongArrowSVG
} from '@/components/SVGs.vue';

export default {
  components: {
    CloseSVG,
    LongArrowSVG
  },
  props: {
    name: String,
    classes: String,
    bodyHeight: {
      type: String,
      default: 'md:max-h-66vh sm:max-h-66vh',
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    isBack: {
      type: Boolean,
      default: false
    },
    onBack: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    modalClick(event) {
      this.$emit('mclick', event);
    },
    eventOnBack() {
      this.onBack()
      this.$emit('back')
    }
  },
};
</script>

<style lang="scss">
  .cms-modal {
    @apply bg-white rounded-sm shadow mx-auto relative overflow-hidden;
    @apply transition duration-300 ease-out;
    // width: calc(100vw - 2.5rem);
    // @media (min-width: 1024px) {
    //   @apply w-11/12;
    // }
    // @media (max-width: 1023px) {
    //   width: calc(100vw - 2.5rem);
    // }
    &.modal-md {
      @screen md {
        max-width: 720px;
      }
    }
    &.modal-lg {
      @media (min-width: 1200px) {
        max-width: 1200px;
      }
    }
    .modal {
      &-header {
        @apply flex relative items-center px-5 py-3 border-b;
      }
      &-body {
        @apply p-5 w-full;
        //overflow-y: scroll;
        //width: calc( 100% + 20px );
        //width: -webkit-calc( 100% + 20px );
        //width: -moz-calc( 100% + 20px );
        .ps {
          @apply  h-full;
        }
        @media (pointer:coarse) {
          @apply w-full;
        }
      }
      &-footer {
        @apply bg-gray-200 px-5 py-3;
      }
      &-default-button {
        @apply absolute top-50 right-0 transform -translate-y-1/2 mr-5;
      }
    }
  }
</style>
