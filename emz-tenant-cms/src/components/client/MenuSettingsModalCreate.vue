<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm Menu
      </h3>
    </div>

    <div class="w-full" slot="body">

      <FormCreateNewMenu class="no-p no-b">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">Tên menu</label>
        </div>
        <div class="w-full">
          <InputType
              placeholder="Sản phẩm Demo"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          </InputType>
        </div>
        <hr class="my-5">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">
            Liên kết
            <span class="text-placeholderStyle ml-3">Kéo thả <SixDotsSVG class="w-2 inline -mt-1 mx-1 fill-current stroke-current stroke-1"/> để thay đổi vị trí, hoặc tạo menu đa cấp cho website</span>
          </label>
        </div>
        <hr class="my-5">
        <h3 class="text-center text-standardCMS text-placeholderStyle">
          Menu này chưa có liên kết nào
        </h3>
        <hr class="my-5">
        <a href="#" class="text-standardCMS text-buttonAndURL">
          <PlusSVG class="w-3 inline -mt-1 mr-2 fill-current"/> Thêm liên kết
        </a>
      </FormCreateNewMenu>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
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
import FormCreateNewMenu from "@/components/client/FormCreateNewMenu";
import InputType from "@/components/client/InputType";

import {
  SixDotsSVG,
  PlusSVG
} from '@/components/SVGs';

export default {
  components: {
    FormCreateNewMenu,
    Modal,
    Button,
    InputType,
    SixDotsSVG,
    PlusSVG
  },
};
</script>

<style lang="scss"></style>
