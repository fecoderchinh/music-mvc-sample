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
                <label for="modal-danhmuc-sp-auto-1" class="cursor-pointer text-14px text-labelAndTitle">
                  Tên danh mục
                </label>
              </div>
              <div class="w-full">
                <InputType
                    id="modal-danhmuc-sp-auto-1"
                    name="modal-danhmuc-sp-auto-1"
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
                  <textarea id="modal-danhmuc-sp-auto-2" class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"
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

                <div class="w-full">
                  <div class="w-full mb-3">
                    <InputGroup>
                      <div slot="group">
                        <span class="cms-typo text-14px text-menuItem mr-3">Sản phẩm được thêm tự động nếu thỏa mãn</span>
                        <Radio
                            id="radio-category-condition-3"
                            name="radio-category-condition-2"
                            label-class="mr-3 mt-3 md:mt-0"
                            checked>
                          <template slot="radio-text">Tất cả các điều kiện</template>
                        </Radio>
                        <Radio
                            id="radio-category-condition-4"
                            name="radio-category-condition-2"
                            label-class="mr-3 mt-3 md:mt-0">
                          <template slot="radio-text">Một trong các điều kiện</template>
                        </Radio>
                      </div>
                    </InputGroup>
                  </div>
                  <div class="table w-full">
                    <div class="table-row w-full">
                      <div class="table-cell">
                        <div class="grid grid-cols-4 sm:grid-cols-1 gap-5">
                          <div class="col-span-1">
                            <DropdownCondition label="Tên sản phẩm"/>
                          </div>
                          <div class="col-span-1">
                            <SelectOption :option-data="this.optionDataSelect2"/>
                          </div>
                          <div class="col-span-2 bg-gray-300">
                            <InputType
                                id="add-product-name"
                                name="add-product-name"
                                button="reset"
                                input-class="cms-input__default">
                            </InputType>
                          </div>
                        </div>
                      </div>
                      <div class="w-auto text-center text-placeholderStyle hover:text-buttonAndURL cursor-pointer ml-3">
                        <DeleteSVG class="w-icon inline -mt-1 fill-current"/>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-5 mt-5">
                    <div class="col-span-6 md:col-span-2">
                      <DropdownCondition/>
                    </div>
                    <div class="col-span-6 md:col-span-2 flex items-center">
                      <ModalPicker
                          class="w-full"
                          :current-modal="treeModal[2]"
                      >
                        <h3 class="cms-typo text-14px text-buttonAndURL max-w-full truncate cursor-pointer">Thêm nhanh sản phẩm hoặc dịch vụ</h3>
                      </ModalPicker>
                    </div>
                    <div class="col-span-6">
                      <TableCondition class="mt-5"/>
                    </div>
                  </div>
                </div>

                <div class="w-full">
                  <TableCondition/>
                </div>

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
              <div class="flex items-center relative whitespace-no-wrap">
                <label class="cursor-pointer">Gắn lên menu</label>
                <ModalPicker
                    class="inline-flex ml-auto"
                    :current-modal="treeModal[1]"
                >
                  <a href="javascript:void(0)" class="font-lato font-medium text-14px text-buttonAndURL xl:text-right block">Chọn menu</a>
                </ModalPicker>
              </div>
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

import Widget from "@/components/client/Widget";
import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetImageUploader from '@/components/client/WidgetImageUploader.vue';

import Box from "@/components/client/Box";
import ProductAdvanceSearch from "@/components/client/ProductAdvanceSearch";
import TableCondition from "@/components/client/TableCondition";
import DropdownCondition from "@/components/client/DropdownCondition";
import Radio from "@/components/client/Radio";

import {
  DeleteSVG
} from '@/components/SVGs'
import InputGroup from "@/components/client/InputGroup";
import ModalPicker from "@/components/client/ModalPicker";
import ModalDanhMucSpAuto from "@/components/client/ModalDanhMucSpAuto";
import ModalMenuPickerCollapse from "@/components/client/ModalMenuPickerCollapse";
import ModalDsThoaManContent from "@/components/client/ModalDsThoaManContent";

export default {
  components: {
    ModalPicker,
    InputGroup,
    Modal,
    InputType,
    Button,
    InlineTags,
    SelectOption,
    ProductSearchDisplay,
    Widget,
    WidgetRadioStatus,
    WidgetImageUploader,
    Box,
    ProductAdvanceSearch,
    TableCondition,
    DeleteSVG,
    DropdownCondition,
    Radio
  },
  data() {
    return {
      auto: false,
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
      treeModal: [
        {
          id: 'modalDanhMucSpAuto-1',
          name: ModalDanhMucSpAuto,
          width: 1200,
          shiftX: 0
        },
        {
          id: 'modalDanhMucSpAuto-2',
          name: ModalMenuPickerCollapse,
          width: 720,
          shiftX: 0
        },
        {
          id: 'modalDanhMucSpAuto-3',
          name: ModalDsThoaManContent,
          width: 720,
          shiftX: 0
        },
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
