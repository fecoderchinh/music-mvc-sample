<template>
  <div
    :data-wide="wideHeader"
    :class="[
      'grid gap-y-3 gap-x-5 mb-4 grid-cols-6',
    ]">

    <template v-if="!hasSlotNotify">
      <div
        :class="[
          wideHeader ? 'xl:col-span-6' : 'xl:col-span-4',
          'md:col-span-6 sm:col-span-6'
        ]">
        <div class="grid grid-cols-3">

          <div
            :class="[
              (!hasSlotRight) ? 'col-span-3' : 'col-span-2 sm:col-span-3',
            ]">
            <div class="cms-label flex items-center text-2xl text-labelAndTitle">
              <slot name="title">
                default title
              </slot>
            </div>
          </div>

          <div class="col-span-1 sm:col-span-3 text-right" v-if="hasSlotRight">
            <slot name="right"></slot>
          </div>

        </div>
      </div>
    </template>

    <template v-else>

      <div
        class="col-span-6">
        <div class="cms-label flex items-center text-2xl text-labelAndTitle">
          <slot name="title">
            default title
          </slot>
        </div>
      </div>

      <div class="col-span-6 sm:order-first" v-if="hasSlotNotify">
        <slot name="notify"></slot>
      </div>

      <div
        :class="[
          wideHeader ? 'xl:col-span-6' : 'xl:col-span-4',
          'md:col-span-6 sm:col-span-6 text-right'
        ]" v-if="hasSlotRight">
        <slot name="right"></slot>
      </div>

    </template>

  </div>
</template>

<script>
export default {
  props: {
    wideHeader: Boolean,
  },
  data() {
    return {
      slotRightVisibled: false,
      slotNotifyVisibled: false,
    };
  },
  computed: {
    hasSlotNotify() {
      return !!this.$slots.notify;
    },
    hasSlotRight() {
      return !!this.$slots.right;
    },
  },
};
</script>

<style lang="scss"></style>
