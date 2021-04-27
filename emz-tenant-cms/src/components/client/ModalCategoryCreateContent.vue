<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm mới danh mục
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <!-- column -->
        <div class="col-span-6 xl:col-span-4">

          <div class="grid grid-cols-6 gap-5">

            <div class="col-span-2 sm:col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="add-category-name" class="cursor-pointer text-14px text-labelAndTitle">
                  Tên danh mục
                </label>
              </div>
              <div class="w-full">
                <InputType
                  id="add-category-name"
                  name="add-category-name"
                  placeholder="Nhập tên danh mục"
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
            </div>

            <div class="col-span-2 sm:col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="add-category-name" class="cursor-pointer text-14px text-labelAndTitle">
                  Thêm vào menu<span class="cms-lato text-cmsRed text-14px">*</span>
                </label>
              </div>
              <div class="w-full">
                <ModalMenuPicker/>
                <div class="w-full">
                  <InlineTags :option-data="this.optionDataTags" tagClass="inline-tag__button-blue"/>
                </div>
              </div>
            </div>

            <div class="col-span-2 sm:col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="add-category-name" class="cursor-pointer text-14px text-labelAndTitle">
                  Loại danh mục<span class="cms-lato text-cmsRed text-14px">*</span>
                </label>
              </div>
              <SelectOption :option-data="this.optionDataSelect1"/>
            </div>

          </div>

          <ProductDescription class="no-b no-px" />
          <CategoryConditions/>
          <ProductSearchDisplay />

        </div>
        <!-- end column -->

        <!-- column -->
        <div class="col-span-6 xl:col-span-2">

          <WidgetRadioStatus/>

          <WidgetImageUploader/>

        </div>
        <!-- end column -->

      </div>

    </div>

    <ul class="md:text-right list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-blue">
          <template slot="name">
            Lưu
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import InputType from '@/components/client/InputType.vue';
import Button from '@/components/client/Button.vue';
import ProductDescription from '@/components/client/ProductDescription.vue';
import CategoryConditions from '@/components/client/CategoryConditions.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import SelectOption from '@/components/client/SelectOption.vue';

import ModalMenuPicker from '@/components/client/ModalMenuPicker.vue';

import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetImageUploader from '@/components/client/WidgetImageUploader.vue';

export default {
  components: {
    Modal,
    InputType,
    Button,
    InlineTags,
    SelectOption,
    ProductDescription,
    CategoryConditions,
    ProductSearchDisplay,
    WidgetRadioStatus,
    WidgetImageUploader,
    ModalMenuPicker,
  },
  data() {
    return {
      optionDataTags: [
        {
          name: 'Chờ lấy hàng',
          closeTag: true,
        },
      ],
      optionDataSelect1: [
        { name: 'Sản phẩm' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
