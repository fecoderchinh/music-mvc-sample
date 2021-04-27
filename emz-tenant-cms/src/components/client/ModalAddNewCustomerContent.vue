<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">
    <template slot="header">
      <div class="flex items-center">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Thêm khách hàng mới
        </h3>
      </div>
    </template>

    <template slot="body">

      <div class="grid grid-cols-2 gap-5">

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptenkhachang" class="select-none cursor-pointer">Tên khách hàng<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptenkhachang"
              name="modal-nhaptenkhachang"
              placeholder="Nhập tên khách hàng"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapemail" class="select-none cursor-pointer">Email</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhapemail"
              name="modal-nhapemail"
              placeholder="Nhập email khách hàng"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapsdt" class="select-none cursor-pointer">Số điện thoại<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhapsdt"
              name="modal-nhapsdt"
              placeholder="Nhập số điện thoại khách hàng"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Công ty</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhapcongty"
              name="modal-nhapcongty"
              placeholder="Nhập công ty khách hàng"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapdiachi" class="select-none cursor-pointer">Địa chỉ<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhapdiachi"
              name="modal-nhapdiachi"
              placeholder="Nhập địa chỉ khách hàng"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quốc gia</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Tỉnh / Thành phố<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quận huyện<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect3"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Phường Xã<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect4"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Ghi chú</label>
          </div>
          <div class="w-full select-none">
            <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Nhập ghi chú về khách hàng này"></textarea>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Tags</label>
            <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Xem tags</a>
          </div>
          <div class="w-full select-none">
            <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Ví dụ: VIP, thân thiết, hay giới thiệu…"></textarea>
          </div>
        </div>

      </div>

    </template>

    <template slot="footer">

      <div class="md:flex">
        <div class="p-0 flex-1 md:flex items-center">
          <CheckType
            main-class="ml-0 no-mr"
            id="check-stock"
            checked>
            <template slot="text"><h3 class="ml-2">Khách hàng muốn nhận quảng cáo</h3></template>
          </CheckType>
        </div>

        <ul class="md:text-right sm:mt-5 list-none flex-1 items-center">
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
      </div>

    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import InputType from '@/components/client/InputType.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import CheckType from '@/components/client/CheckType.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    InputType,
    SelectOption,
    CheckType,
    Button,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Việt Nam' },
        { name: 'Lào' },
        { name: 'Campuchia' },
      ],
      optionDataSelect2: [
        { name: 'Chọn tỉnh thành' },
      ],
      optionDataSelect3: [
        { name: 'Chọn quận huyện' },
      ],
      optionDataSelect4: [
        { name: 'Chọn phường xã' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
