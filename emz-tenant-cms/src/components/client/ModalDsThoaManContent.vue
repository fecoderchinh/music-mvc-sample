<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" :isBack="isBack" @back="onBack" :show-footer="false">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Danh sách lọc sản phẩm
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

<!--        <div class="col-span-6">-->
<!--          <div class="cms-label text-14px mb-3 text-labelAndTitle">-->
<!--            <label for="modal-ds-thoa-man-1" class="select-none cursor-pointer">Tên danh mục</label>-->
<!--          </div>-->
<!--          <div class="w-full select-none">-->
<!--            <InputType-->
<!--                main-class="search-bar"-->
<!--                id="modal-ds-thoa-man-1"-->
<!--                name="modal-ds-thoa-man-1"-->
<!--                value="iPhone 12"-->
<!--                input-class="cms-input__default">-->
<!--            </InputType>-->
<!--          </div>-->
<!--        </div>-->

        <div class="col-span-6 md:col-span-2 flex items-center">
          <h3 class="text-standardCMS text-menuItem">Sản phẩm được lọc nếu thoả mãn</h3>
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
                <DeleteSVG class="w-icon inline -mt-1"/>
              </div>
            </div>
            <div class="table-row w-full">
              <div class="grid grid-cols-6 gap-5 mt-5">
                <div class="col-span-6 md:col-span-2">
                  <DropdownCondition/>
                </div>
                <div class="col-span-6 md:col-span-3 flex items-center">
<!--                  <ModalPicker-->
<!--                      class="w-full"-->
<!--                      :current-modal="treeModal[0]"-->
<!--                  >-->
<!--                    <h3 class="cms-typo text-14px text-buttonAndURL max-w-full truncate cursor-pointer">Xem danh sách sản phẩm thỏa mãn</h3>-->
<!--                  </ModalPicker>-->
                  <h3 class="cms-typo text-14px text-buttonAndURL max-w-full truncate cursor-pointer">Lọc danh sách sản phẩm thoả mãn</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-6">
          <h3 class="text-standardCMS text-labelAndTitle mb-5">Danh sách sản phẩm thoả mãn điều kiện lọc</h3>
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
  DeleteSVG
}
from '@/components/SVGs';
import DropdownCondition from "@/components/client/DropdownCondition";
import ModalDsThoaManContent from "@/components/client/ModalDsThoaManContent";

export default {
  name: "ModalDsThoaManContent",
  components: {
    DropdownCondition,
    Modal,
    Button,
    InputType,
    SelectOption,
    DeleteSVG,
    Radio,
    TableCondition
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
      optionDataSelect1: [
        {
          name: 'Tên sản phẩm'
        }
      ],
      optionDataSelect2: [
        {
          name: 'Chứa từ'
        }
      ],
      treeModal: [
        {
          id: 'categoryConditions-1',
          name: ModalDsThoaManContent,
          width: 720,
          shiftX: 0
        },
      ]
    }
  }
};
</script>

<style lang="scss"></style>
