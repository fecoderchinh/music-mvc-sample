<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Góp ý & Báo lỗi
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <h3 class="text-menuItem cms-typo text-14px mb-10px">Chào, <b>Linh Ngọc</b></h3>
          <p class="text-menuItem cms-typo text-14px mb-10px">Nếu bạn có bất kỳ điều gì muốn góp ý cho chúng tôi, hoặc những tính năng nào bạn thấy hữu dụng mà chúng tôi chưa có, hoặc bạn có những ý tưởng thú vị…  Vui lòng gửi đến chúng tôi. Nếu nội dung dài bạn vui lòng soạn thành file và gửi kèm tin này.</p>
          <p class="text-menuItem cms-typo text-14px mb-10px">Chúng tôi sẽ rất biết ơn và luôn lắng nghe bạn để làm tốt hơn. Mỗi góp ý được ghi nhận chúng tôi sẽ gắng hết sức để hoàn thiện sớm nhất!</p>
          <p class="text-menuItem cms-typo text-14px mb-10px">Chúng tôi rất ghi nhận đóng góp của bạn và sẽ có những món quà nho nhỏ tặng bạn.</p>
          <p class="text-menuItem cms-typo text-14px">Cảm ơn bạn rất nhiều!</p>
        </div>
        <div class="col-span-6">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Tiêu đề góp ý
            </label>
          </div>
          <div class="w-full">
            <InputType
              placeholder="Nhập tiêu đề"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>
        <div class="col-span-6">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Nội dung góp ý
            </label>
          </div>
          <div class="w-full">
            <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Nhập nội dung bạn muốn góp ý. Xin cảm ơn!"></textarea>
          </div>
          <p class="cms-typo text-14px text-placeholderStyle mt-10px">
            Tải lên những ảnh màn hình báo lỗi, những hình ảnh tham khảo, những tài liệu góp ý, những ý tưởng thú vị…
          </p>
        </div>
        <div class="col-span-6">
          <ul class="list-none">
            <li class="inline mr-10px">
              <SquareSVG class="h-20 fill-placeholderStyle inline"/>
            </li>
            <li class="inline mr-10px">
              <div class="relative group inline-block max-h-20">
                <div class="w-full h-full absolute top-0 left-0 bg-black bg-opacity-75 hidden group-hover:block">
                  <div class="flex items-end h-full">
                    <a href="#" class="text-white flex-1 mx-3 mb-2">
                      <EyeSVG class="w-3 fill-white"/>
                    </a>
                    <a href="#" class="text-white flex-1 mx-3 mb-2 flex justify-end">
                      <DeleteSVG class="w-2 fill-white"/>
                    </a>
                  </div>
                </div>
                <img src="https://picsum.photos/80" alt="IMG" class="inline-block">
              </div>
            </li>
            <li class="inline-block mr-10px">
              <SquareSVG class="h-20 fill-placeholderStyle inline"/>
            </li>
          </ul>
        </div>

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Góp ý sau
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-blue">
          <template slot="name">
            Gửi góp ý
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

import {
  EyeSVG,
  DeleteSVG,
  SquareSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    InputType,
    Button,
    EyeSVG,
    DeleteSVG,
    SquareSVG,
  },
};
</script>

<style lang="scss"></style>
