<template>
  <!-- eslint-disable max-len -->
  <div>
    <Widget>

      <div class="flex flex-auto mb-4" slot="title">
        <div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle">
          <label for="add-tag" class="inline-flex items-center cursor-pointer">
            Gắn lên menu
          </label>
        </div>
        <div class="flex relative whitespace-no-wrap">
          <a href="#" @click="openModal" class="font-lato font-medium text-14px text-buttonAndURL xl:text-right block">Chọn menu</a>
        </div>
      </div>

      <div class="grid grid-cols-6 gap-5" slot="content">
        <div class="col-span-6">
          <div class="w-full">
            <InlineTags :option-data="this.optionDataTags" tagClass="inline-tag__button-blue"/>
          </div>
        </div>
      </div>

    </Widget>
  </div>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import InlineTags from '@/components/client/InlineTags.vue';

import ModalMenuPickerContent from '@/components/client/ModalMenuPickerContent.vue';

export default {
  components: {
    Widget,
    InlineTags,
  },
  data() {
    return {
      optionDataTags: [
        {
          name: 'Hướng dẫn',
          closeTag: true,
        },
      ],
    };
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalMenuPickerContent, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
