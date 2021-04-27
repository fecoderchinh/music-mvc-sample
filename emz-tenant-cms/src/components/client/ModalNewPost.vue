<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Tạo bài viết
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <!-- column -->
        <div class="col-span-6 xl:col-span-4">

          <div class="grid grid-cols-6 gap-5">

            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="add-post-name" class="cursor-pointer text-14px text-labelAndTitle">
                  Tiêu đề
                </label>
              </div>
              <div class="w-full">
                <InputType
                  id="add-post-name"
                  name="add-post-name"
                  placeholder="Nhập tên danh mục"
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
            </div>

            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="add-post-name" class="cursor-pointer text-14px text-labelAndTitle">
                  Nội dung
                </label>
              </div>
              <div class="w-full">
                <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"></textarea>
              </div>
            </div>

            <div class="col-span-6">
              <div class="cms-label text-14px mb-4">
                <label for="add-post-name" class="cursor-pointer text-14px text-labelAndTitle">
                  Tóm tắt
                  <span class="text-placeholderStyle md:ml-4 sm:block">
                    Thêm tóm tắt ngắn để hiển thị trên trang chủ hoặc blog của bạn.
                  </span>
                </label>
              </div>
              <div class="w-full">
                <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"></textarea>
              </div>
            </div>

            <div class="col-span-6">
              <ProductSearchDisplay />
            </div>

          </div>

        </div>
        <!-- end column -->

        <!-- column -->
        <div class="col-span-6 xl:col-span-2">

          <WidgetRadioStatus/>

          <WidgetImageUploader/>

          <WidgetAddPost/>

        </div>
        <!-- end column -->

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
import InputType from '@/components/client/InputType.vue';
import Button from '@/components/client/Button.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';

import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetImageUploader from '@/components/client/WidgetImageUploader.vue';
import WidgetAddPost from '@/components/client/WidgetAddPost.vue';

export default {
  components: {
    Modal,
    InputType,
    Button,
    ProductSearchDisplay,
    WidgetRadioStatus,
    WidgetImageUploader,
    WidgetAddPost,
  },
};
</script>

<style lang="scss"></style>
