<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" @mclick.stop>

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm nhanh sản phẩm
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-4 gap-5">

        <div class="lg:col-span-2 md:col-span-4 sm:col-span-4">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-input-productname" class="select-none cursor-pointer">Tên sản phẩm</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-input-productname"
              name="modal-input-productname"
              placeholder="Nhập tên sản phẩm hoặc dịch vụ"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="lg:col-span-1 md:col-span-2 sm:col-span-4">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-input-productprice" class="select-none cursor-pointer">Giá mỗi sản phẩm</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-input-productprice"
              name="modal-input-productprice"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="lg:col-span-1 md:col-span-2 sm:col-span-4">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-input-productqty" class="select-none cursor-pointer">Số lượng bán</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-input-productqty"
              name="modal-input-productqty"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-4">
          <CheckType
            main-class="ml-0 no-mr pl-px"
            id="check-ship-require"
            checked>
            <template slot="text"><h3 class="ml-2">Yêu cầu vận chuyển</h3></template>
          </CheckType>
        </div>

        <div class="col-span-2 sm:col-span-4">
          <CheckType
            main-class="ml-0 no-mr pl-px"
            id="check-product-save"
            checked>
            <template slot="text"><h3 class="ml-2">Lưu vào danh sách sản phẩm</h3></template>
          </CheckType>
        </div>

        <div class="col-span-2 sm:col-span-4 md:pl-4">
          <div class="cms-label text-14px mb-3 text-labelAndTitle md:ml-2">
            <label for="modal-input-productnw" class="select-none cursor-pointer">Khối lượng</label>
          </div>
          <div class="md:w-1/2 md:ml-2">
            <InputType
              main-class="search-bar"
              id="modal-input-productnw"
              name="modal-input-productnw"
              placeholder="0"
              input-class="cms-input__with-icon"
              button-class="absolute no-mr w-16 h-10 right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none"
              button="button">
              <template slot="button-text">
                <SelectOption :option-data="this.optionDataSelect" selectClass="bg-white pl-2 pr-6 rounded h-10 no-rounded-l"/>
              </template>
            </InputType>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-4 md:pl-4">
          <div class="cms-label text-14px mb-3 text-labelAndTitle md:ml-2">
            <label for="modal-input-productstockqty" class="select-none cursor-pointer">Số lượng trong kho</label>
          </div>
          <div class="md:w-1/2 md:ml-2">
            <InputType
              main-class="search-bar"
              id="modal-input-productstockqty"
              name="modal-input-productstockqty"
              placeholder="0"
              input-class="cms-input__default"
              button="button">
            </InputType>
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
            Thêm vào đơn hàng
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import InputType from '@/components/client/InputType.vue';
import CheckType from '@/components/client/CheckType.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    InputType,
    CheckType,
    SelectOption,
    Button,
  },
  data() {
    return {
      optionDataSelect: [
        { name: 'g' },
        { name: 'oz' },
        { name: 'lb' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
