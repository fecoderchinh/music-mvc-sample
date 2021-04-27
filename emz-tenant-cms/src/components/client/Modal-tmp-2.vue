<template>
  <!-- eslint-disable max-len -->
  <modal
    :name="name"
    :classes="[
      'cms-modal',
      classes
    ]"
    :shiftX="0"
    :adaptive="true"
    height="auto"
    width="720"
    :reset="true">

      <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button class="modal-default-button group hover:shadow-none focus:outline-none" @click="closeModal">
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

  </modal>
</template>

<script>
import {
  CloseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    CloseSVG,
  },
  props: {
    name: String,
    classes: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
  .cms-modal {
    @apply bg-white rounded-sm shadow mx-auto relative overflow-hidden;
    @apply transition duration-300 ease-out;
    width: calc(100vw - 2.5rem);
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
    .modal {
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
    }
  }
</style>
