<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm nhân viên
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptennv" class="select-none cursor-pointer">Tên nhân viên<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptennv"
              name="modal-nhaptennv"
              placeholder="Nhập tên nhân viên"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptensdt" class="select-none cursor-pointer">Số điện thoại<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptensdt"
              name="modal-nhaptensdt"
              placeholder="Nhập số điện thoại"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptenemail" class="select-none cursor-pointer">Email</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptenemail"
              name="modal-nhaptenemail"
              placeholder="Nhập email"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaplinkmxh" class="select-none cursor-pointer">Link mạng xã hội</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaplinkmxh"
              name="modal-nhaplinkmxh"
              placeholder="Nhập link facebook… "
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptendc" class="select-none cursor-pointer">Địa chỉ<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptendc"
              name="modal-nhaptendc"
              placeholder="Nhập địa chỉ"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapgc" class="select-none cursor-pointer">Ghi chú</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhapgc"
              name="modal-nhapgc"
              placeholder="Việt Nam"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-6">
          <p class="cms-typo">
            <span class="inline text-14px text-labelAndTitle">Giới hạn quyền truy cập</span>
            <EllipseSVG class="w-5px h-5px inline mx-5 fill-labelAndTitle"/>
            <span class="text-menuItem text-13px">Chưa giới hạn</span>
          </p>
          <p class="cms-typo text-14px text-menuItem mt-2">Chọn những mục người dùng này không được phép truy cập.</p>
        </div>

        <div class="col-span-6 border-b">

          <div class="grid grid-cols-6 gap-5">

            <div class="col-span-2 sm:col-span-6">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label class="select-none cursor-pointer">Cửa hàng</label>
              </div>
              <ul class="list-none" v-for="(data, index) in listbox1" :key="index">
                <li class="block my-10px">
                  <CheckType
                    main-class="ml-0 no-mr"
                    :id="'listbox1'+index">
                    <template slot="text"><h3 class="ml-2">{{ data }}</h3></template>
                  </CheckType>
                </li>
              </ul>
            </div>

            <div class="col-span-2 sm:col-span-6">
              <div class="grid grid-cols-6 gap-10px">
                <div class="col-span-6">
                  <div class="cms-label text-14px mb-3 text-labelAndTitle">
                    <label class="select-none cursor-pointer">Nội dung</label>
                  </div>
                  <ul class="list-none" v-for="(data, index) in listbox2" :key="index">
                    <li class="block my-10px">
                      <CheckType
                        main-class="ml-0 no-mr"
                        :id="'listbox1'+index">
                        <template slot="text"><h3 class="ml-2">{{ data }}</h3></template>
                      </CheckType>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6">
                  <div class="cms-label text-14px mb-3 text-labelAndTitle">
                    <label class="select-none cursor-pointer">Cấu hình</label>
                  </div>
                  <ul class="list-none" v-for="(data, index) in listbox3" :key="index">
                    <li class="block my-10px">
                      <CheckType
                        main-class="ml-0 no-mr"
                        :id="'listbox1'+index">
                        <template slot="text"><h3 class="ml-2">{{ data }}</h3></template>
                      </CheckType>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-span-2 sm:col-span-6">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label class="select-none cursor-pointer">Something</label>
              </div>
              <ul class="list-none" v-for="(data, index) in listbox1" :key="index">
                <li class="block my-10px">
                  <CheckType
                    main-class="ml-0 no-mr"
                    :id="'listbox1'+index">
                    <template slot="text"><h3 class="ml-2">{{ data }}</h3></template>
                  </CheckType>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div class="col-span-6">
          <CheckType
            main-class="ml-0 no-mr rounded-checkbox"
            id="check-changepw"
            checked>
            <template slot="text"><h3 class="ml-2">Đổi mật khẩu</h3></template>
          </CheckType>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-mkmoi" class="select-none cursor-pointer">Mật khẩu mới</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-mkmoi"
              name="modal-mkmoi"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-xnmkmoi" class="select-none cursor-pointer">Xác nhận mật khẩu mới</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-xnmkmoi"
              name="modal-xnmkmoi"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

      </div>

    </div>

    <template slot="footer">

      <div class="md:flex">
        <div class="p-0 flex-1 md:flex items-center">
          <a href="#" class="cms-typo text-cmsOrange">Xóa tài khoản</a>
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
import CheckType from '@/components/client/CheckType.vue';
import Button from '@/components/client/Button.vue';

import {
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    InputType,
    CheckType,
    Button,
    EllipseSVG,
  },
  data() {
    return {
      listbox1: [
        'Tổng quan',
        'Sản phẩm',
        'Danh mục',
        'Kho hàng',
        'Đơn hàng',
        'Khuyến mãi',
        'Báo cáo',
      ],
      listbox2: [
        'Tin tức và trang nội dung',
        'Menu',
        'Giao diện website',
      ],
      listbox3: [
        'Quản lý ứng dụng',
        'Cấu hình hệ thống',
        'Tên miền',
      ],
    };
  },
};
</script>

<style lang="scss"></style>
