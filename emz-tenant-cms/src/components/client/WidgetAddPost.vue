<template>
  <!-- eslint-disable max-len -->
  <div>
    <Widget classes="no-p no-b">

      <div class="grid grid-cols-6 gap-5" slot="content">
        <div class="col-span-6">
          <div class="cms-label text-14px mb-4">
            <label for="dm-hethong" class="inline-flex items-center cursor-pointer">
              Danh mục
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
            </label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>
        <div class="col-span-6">
          <div class="flex flex-auto mb-4" slot="title">
            <div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle">
              <label for="add-tag" class="inline-flex items-center cursor-pointer">
                Gắn tags
                <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
              </label>
            </div>
            <div class="flex relative whitespace-no-wrap">
              <ModalEditTag/>
            </div>
          </div>
          <div class="w-full">
            <InputType
              id="add-tag"
              name="add-tag"
              placeholder="Nhập tag cho đơn hàng"
              button="reset"/>
          </div>
        </div>
      </div>

    </Widget>
  </div>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import InputType from '@/components/client/InputType.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import ModalEditTag from '@/components/client/ModalEditTag.vue';

import {
  InformationSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Widget,
    InformationSVG,
    InputType,
    SelectOption,
    ModalEditTag,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Tin tức' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
