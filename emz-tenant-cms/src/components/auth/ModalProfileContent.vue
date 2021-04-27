<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Hồ sơ của bạn
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-5 gap-5">

        <div class="col-span-5">
          <div class="w-20 h-20 relative">
            <AvatarSVG class="w-20 fill-buttonAndURL opacity-75"/>
            <a href="#">
            <EllipseSVG class="w-8 fill-buttonAndURL absolute bottom-0 right-0"/>
            </a>
          </div>
        </div>
        <div class="col-span-3 sm:col-span-5">
          <div class="grid grid-cols-6 gap-4">
            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label class="cursor-pointer text-14px text-labelAndTitle">
                  Họ và tên
                </label>
              </div>
              <div class="w-full">
                <InputType
                  value="Lý Linh Ngọc"
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
            </div>
            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label class="cursor-pointer text-14px text-labelAndTitle">
                  Số điện thoại
                </label>
              </div>
              <div class="w-full text-14px cms-typo">
                <h3 class="text-menuItem inline mr-3">0123456789</h3>
                <ModalChangePhoneNumberButton/>
              </div>
            </div>
            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label class="cursor-pointer text-14px text-labelAndTitle">
                  Email
                </label>
              </div>
              <div class="w-full">
                <InputType
                  placeholder="Nhập email của bạn"
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
                <p class="cms-typo text-13px mt-3 text-menuItem">Quan trọng! Chúng tôi sẽ gửi những thông báo quan trọng qua email này!</p>
              </div>
              <CheckType
                id="change-password"
                main-class="ml-0 no-mr mt-3 rounded-checkbox checkbox-red" checked>
                <template slot="text"><h3 class="ml-2">Đổi mật khẩu</h3></template>
              </CheckType>
            </div>
            <div class="col-span-6">
              <div class="w-full">
                <InputType
                  placeholder="Mật khẩu cũ"
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
            </div>
            <div class="col-span-6">
              <div class="w-full">
                <InputType
                  placeholder="Mật khẩu mới"
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
            </div>
            <div class="col-span-6">
              <div class="w-full">
                <InputType
                  placeholder="Nhập lại mật khẩu mới"
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
            </div>
          </div>

        </div>
        <div class="col-span-2 sm:col-span-5">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Website sở hữu
            </label>
          </div>
          <ul class="list-none">
            <li class="text-menuItem text-14px flex relative cms-typo mb-5">
              <div class="inline-flex items-start pt-1 mr-2">
                <EllipseSVG class="w-4 h-4 inline-block"/>
              </div>
              <h3 class="cms-typo text-14px inline-block">
                <strong class="mr-4">imap.com</strong>
                <br>
                <span class="text-menuItem mr-3">Khởi tạo 21/11/2019</span>
                <span class="text-cmsOrange">Hết hạn còn 27 ngày</span>
              </h3>
            </li>
            <li class="text-menuItem text-14px flex relative cms-typo mb-5">
              <div class="inline-flex items-start pt-1 mr-2">
                <EllipseSVG class="w-4 h-4 inline-block"/>
              </div>
              <h3 class="cms-typo text-14px inline-block">
                <strong class="mr-4">imap.com</strong>
                <br>
                <span class="text-menuItem mr-3">Khởi tạo 21/11/2019</span>
                <span class="text-cmsOrange">Hết hạn còn 27 ngày</span>
              </h3>
            </li>
            <li class="text-menuItem text-14px flex relative cms-typo mb-5">
              <div class="inline-flex items-start pt-1 mr-2">
                <EllipseSVG class="w-4 h-4 inline-block"/>
              </div>
              <h3 class="cms-typo text-14px inline-block">
                <strong class="mr-4">imap.com</strong>
                <br>
                <span class="text-menuItem mr-3">Khởi tạo 21/11/2019</span>
                <span class="text-cmsOrange">Hết hạn còn 27 ngày</span>
              </h3>
            </li>
            <li class="text-menuItem text-14px flex relative cms-typo mb-5">
              <div class="inline-flex items-start pt-1 mr-2">
                <EllipseSVG class="w-4 h-4 inline-block"/>
              </div>
              <h3 class="cms-typo text-14px inline-block">
                <strong class="mr-4">imap.com</strong>
                <br>
                <span class="text-menuItem mr-3">Khởi tạo 21/11/2019</span>
                <span class="text-cmsOrange">Hết hạn còn 27 ngày</span>
              </h3>
            </li>
            <li class="text-menuItem text-14px flex relative cms-typo mb-5">
              <div class="inline-flex items-start pt-1 mr-2">
                <EllipseSVG class="w-4 h-4 inline-block"/>
              </div>
              <h3 class="cms-typo text-14px inline-block">
                <strong class="mr-4">imap.com</strong>
                <br>
                <span class="text-menuItem mr-3">Khởi tạo 21/11/2019</span>
                <span class="text-cmsOrange">Hết hạn còn 27 ngày</span>
              </h3>
            </li>
          </ul>
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
import InputType from '@/components/client/InputType.vue';
import CheckType from '@/components/client/CheckType.vue';
import Button from '@/components/client/Button.vue';

import ModalChangePhoneNumberButton from '@/components/auth/ModalChangePhoneNumberButton.vue';

import {
  AvatarSVG,
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    InputType,
    CheckType,
    Button,
    AvatarSVG,
    EllipseSVG,
    ModalChangePhoneNumberButton,
  },
};
</script>

<style lang="scss"></style>
