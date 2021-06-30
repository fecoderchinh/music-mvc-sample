<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Nhân bản sản phẩm
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modalDuplicateItem1" class="select-none cursor-pointer">Tên sản phẩm mới</label>
          </div>
          <div class="w-full">
            <InputType
                input-type="text"
                id="modalDuplicateItem1"
                name="modalDuplicateItem1"
                placeholder="iPhone 11 Copy"
                input-class="cms-input__default"/>
          </div>
          <div class="w-full mt-3">
            <CheckType
                main-class="ml-0 no-mr"
                id="modalDuplicateItem2"
                v-model="selectedItems"
                val="item1">
              <template slot="text"><h3 class="ml-2">Nhân bản ảnh</h3></template>
            </CheckType>
          </div>
        </div>

      </div>

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
import InputType from "@/components/client/InputType";
import CheckType from "@/components/client/CheckType";

export default {
  components: {
    CheckType,
    InputType,
    Modal,
    Button,
  },
  data() {
    return {
      selectedItems: [
          'item1'
      ]
    }
  }
};
</script>

<style lang="scss"></style>
