<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 fill-labelAndTitle mr-3 inline transform rotate-180"/>
            Danh mục thêm sản phẩm tự động
          </template>
        </Button>

      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-ds-thoa-man-1" class="select-none cursor-pointer">Tên danh mục</label>
          </div>
          <div class="w-full select-none">
            <InputType
                main-class="search-bar"
                id="modal-ds-thoa-man-1"
                name="modal-ds-thoa-man-1"
                value="iPhone 12"
                input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-6 md:col-span-2 flex items-center">
          <h3 class="text-standardCMS text-menuItem">Sản phẩm sẽ được thêm tự động nếu thỏa mãn</h3>
        </div>

        <div class="col-span-6 md:col-span-4 flex sm:flex-col flex-wrap">
          <Radio id="modal-ds-thoa-man-2" name="modal-ds-thoa-man" label-class="text-menuItem text-standardCMS mr-3 md:mr-8 sm:mb-3">
            <template slot="radio-text">Tất cả điều kiện</template>
          </Radio>

          <Radio id="modal-ds-thoa-man-3" name="modal-ds-thoa-man" label-class="text-menuItem text-standardCMS" checked>
            <template slot="radio-text">Một trong các điều kiện</template>
          </Radio>
        </div>

        <div class="col-span-6">
          <div class="table w-full">
            <div class="table-row w-full">
              <div class="table-cell">
                <div class="grid grid-cols-4 sm:grid-cols-1 gap-5">
                  <div class="col-span-1">
                    <SelectOption :option-data="this.optionDataSelect1"/>
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
              <div class="w-auto text-center text-placeholderStyle ml-3">
                <DeleteSVG class="w-4 inline -mt-1 fill-current"/>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-6">
          <h3 class="text-standardCMS text-labelAndTitle my-5">Các sản phẩm thỏa mãn điều kiện sẽ được thêm tự động vào danh mục này:</h3>
          <TableCondition/>
        </div>

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
import Button from '@/components/client/Button.vue';
import InputType from "@/components/client/InputType";
import SelectOption from "@/components/client/SelectOption";
import Radio from "@/components/client/Radio";
import TableCondition from "@/components/client/TableCondition";

import {
  LongArrowSVG,
  DeleteSVG
}
from '@/components/SVGs';

export default {
  name: "ModalDsThoaManContent",
  components: {
    Modal,
    Button,
    LongArrowSVG,
    InputType,
    SelectOption,
    DeleteSVG,
    Radio,
    TableCondition
  },
  data() {
    return {
      optionDataSelect1: [
        {
          name: 'Tên sản phẩm'
        }
      ],
      optionDataSelect2: [
        {
          name: 'Chứa từ'
        }
      ]
    }
  }
};
</script>

<style lang="scss"></style>
