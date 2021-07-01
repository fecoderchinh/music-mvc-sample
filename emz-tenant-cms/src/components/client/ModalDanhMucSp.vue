<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Danh mục sản phẩm
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <!-- column -->
        <div class="col-span-6 xl:col-span-4">

          <div class="grid grid-cols-6 gap-5">

            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="modal-danhmuc-sp-1" class="cursor-pointer text-14px text-labelAndTitle">
                  Tên danh mục
                </label>
              </div>
              <div class="w-full">
                <InputType
                    id="modal-danhmuc-sp-1"
                    name="modal-danhmuc-sp-1"
                    placeholder="Nhập tên danh mục"
                    button="reset"
                    input-class="cms-input__default"
                    button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
            </div>

          </div>

          <Box class="no-b no-px no-mb">
            <template slot="content">

              <div class="cms-label text-14px mb-5">
                <label for="modal-danhmuc-sp-2" class="cursor-pointer text-14px text-labelAndTitle">
                  Mô tả danh mục
                </label>
              </div>

              <div class="w-full">
                <div class="w-full no-mb">
                  <textarea id="modal-danhmuc-sp-2" class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"
                            placeholder="Nhập mô tả cho danh mục"></textarea>
                </div>
              </div>

            </template>
          </Box>

          <Box>
            <template slot="content">
              <div class="w-full">
                <label class="cursor-pointer text-14px text-labelAndTitle">
                  Sản phẩm
                </label>
                <ProductAdvanceSearch class="mb-5"/>
                <SelectOption class="mb-5" :option-data="this.optionDataSelect3"/>
                <TableConditionAuto/>
              </div>
            </template>
          </Box>

          <ProductSearchDisplay />

        </div>
        <!-- end column -->

        <!-- column -->
        <div class="col-span-6 xl:col-span-2">

          <WidgetRadioStatus/>

          <WidgetImageUploader @click="uploadImage" :image="imgUrl"/>

          <Widget>
            <template slot="title">
              <label class="cursor-pointer">Gắn lên menu</label>
              <ModalMenuPicker class="absolute top-0 right-0" button-class="text-buttonAndURL bg-transparent no-effect"/>
            </template>
            <template slot="content">
              <h3 class="text-standardCMS text-menuIcon">Gắn danh mục vào Menu</h3>
              <InlineTags :option-data="this.optionDataTags" tagClass="inline-tag__button-blue"/>
            </template>
          </Widget>

          <Widget>
            <template slot="title">
              <label class="cursor-pointer">Khung giao diện</label>
            </template>
            <template slot="content">
              <SelectOption :option-data="this.optionDataSelect2"/>
            </template>
          </Widget>

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
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import SelectOption from '@/components/client/SelectOption.vue';

import ModalMenuPicker from '@/components/client/ModalMenuPicker.vue';

import Widget from "@/components/client/Widget";
import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetImageUploader from '@/components/client/WidgetImageUploader.vue';

import Box from "@/components/client/Box";
import ProductAdvanceSearch from "@/components/client/ProductAdvanceSearch";
import TableConditionAuto from "@/components/client/TableConditionAuto";

export default {
  components: {
    Modal,
    InputType,
    Button,
    InlineTags,
    SelectOption,
    ProductSearchDisplay,
    Widget,
    WidgetRadioStatus,
    WidgetImageUploader,
    ModalMenuPicker,
    Box,
    ProductAdvanceSearch,
    TableConditionAuto
  },
  data() {
    return {
      imgUrl: '',
      optionDataTags: [
        {
          name: 'Chờ lấy hàng',
          closeTag: true,
        },
      ],
      optionDataSelect1: [
        { name: 'Sản phẩm' },
      ],
      optionDataSelect2: [
        { name: 'collection' },
      ],
      optionDataSelect3: [
        { name: 'Theo ngày tạo: Từ mới đến cũ' },
      ],
    };
  },
  methods: {
    uploadImage() {
      if(this.imgUrl) this.imgUrl = ''
      else this.imgUrl = 'https://picsum.photos/400/300'
    }
  }
};
</script>

<style lang="scss"></style>
