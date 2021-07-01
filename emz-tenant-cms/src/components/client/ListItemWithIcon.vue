<template>
  <!-- eslint-disable max-len -->
  <ul class="list-none">
    <li v-for="(data, index) in optionData" :key="index" class="inline-flex items-center mr-8" :class="color">
      <component v-bind:is="data.component" :class="svgClass" />
      <a :href="data.link" @click="openModal(data.aModal, data.modalWidth)" :class="aClass">{{ data.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    svgClass: {
      type: String,
      default: 'w-4 h-4 mr-2 -mt-px',
    },
    color: {
      type: String,
      default: 'text-menuIcon',
    },
    aClass: {
      type: String,
      default: 'text-standardCMS text-buttonAndURL',
    },
    aModal: Object,
    optionData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    openModal(data, width=720) {
      if (!data) return;
      const options = {
        class: 'cms-modal modal-md',
      };
      const style = {
        width: width, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(data, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
