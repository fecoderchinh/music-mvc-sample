<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" :isBack="isBack" @back="onBack">

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

            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="modalCategoryCreateContent-1" class="cursor-pointer text-14px text-labelAndTitle">
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
                <label for="modalCategoryCreateContent-2" class="cursor-pointer text-14px text-labelAndTitle">
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

          <CategoryConditions/>
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
                    :current-modal="modalComponent[1]"
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
        <Button button-class="cms-button cms-button-white" @click="openDialog">
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
import CategoryConditions from '@/components/client/CategoryConditions.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import SelectOption from '@/components/client/SelectOption.vue';

import ModalMenuPickerCollapse from '@/components/client/ModalMenuPickerCollapse.vue';

import Widget from "@/components/client/Widget";
import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetImageUploader from '@/components/client/WidgetImageUploader.vue';
import ModalPicker from "@/components/client/ModalPicker";

import ModalCategoryCreateContent from "@/components/client/ModalCategoryCreateContent";
import Box from "@/components/client/Box";

export default {
  components: {
    Box,
    ModalPicker,
    Modal,
    InputType,
    Button,
    InlineTags,
    SelectOption,
    CategoryConditions,
    ProductSearchDisplay,
    Widget,
    WidgetRadioStatus,
    WidgetImageUploader,
  },
  props: {
    isBack: Boolean,
    onBack: {
      type: Function,
      default: () => {}
    }
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
      modalComponent: [
        {
          id: 'modalCategoryCreateContent-1',
          name: ModalCategoryCreateContent,
          width: 1200,
          shiftX: 0
        },
        {
          id: 'modalCategoryCreateContent-2',
          name: ModalMenuPickerCollapse,
          width: 720,
          shiftX: 0
        }
      ]
    };
  },
  // mounted() {
  //   this.currentComponent = this.$options.__proto__
  // },
  methods: {
    uploadImage() {
      if(this.imgUrl) this.imgUrl = ''
      else this.imgUrl = 'https://picsum.photos/400/300'
    },
    openDialog() {
      let currentIndex = Object.keys(this.$dataModals)[this.$dataModals.findIndex(x => x === this.$dataModals[this.$dataModals.length-1])]
      let currentModal = this.$dataModals[this.$dataModals.length-1]

      this.$modal.hide(this.$dataModals[this.$dataModals.length-1].id)

      const data = {
        isBack: parseInt(currentIndex) !== 0,
        onBack: () => {
          this.closed(currentIndex-1)
        }
      }

      const options = {
        classes: 'cms-modal absolute',
        clickToClose: false, // disabled background close event
        name: currentModal.id
      };
      const style = {
        width: currentModal.width ? currentModal.width : 720, height: 'auto', shiftX: currentModal.shiftX ? currentModal.shiftX : 0, adaptive: true,
      };
      const events = {
        'before-open': () => {
          if(parseInt(currentIndex) > 0) {
            this.$modal.hide(this.$dataModals[currentIndex-1].id)
          }
        },
        opened: () => {
          // console.log('event: opened')
        },
        'before-close': () => {
          // console.log('event: before-close -> current data')
        },
        closed: () => {
          // console.log('event: closed')
          // this.$emit('close')
        },
      };

      this.$modal.show('dialog', {
        title: 'Cảnh báo',
        text: 'Vui lòng đọc cảnh báo, không đọc cảnh báo thì ráng chịu',
        buttons: [
          {
            title: 'Hủy',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Quay lại',
            handler: () => {
              this.$modal.hide('dialog')
              this.$modal.show(this.$dataModals[this.$dataModals.length-1].name, { ...data }, { ...options, ...style }, events)
            }
          },
        ]
      })
    }
  }
};
</script>

<style lang="scss"></style>
