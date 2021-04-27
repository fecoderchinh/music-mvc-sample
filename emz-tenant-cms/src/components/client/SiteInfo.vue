<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Thông tin website</h3>
      </div>
      <div class="col-span-3 sm:col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptenwebsite" class="select-none cursor-pointer">Tên website</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptenwebsite"
              name="modal-nhaptenwebsite"
              placeholder="Ví dụ: Eva Shop"
              input-class="cms-input__default"/>
          </div>
      </div>
      <div class="col-span-3 sm:col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapemail" class="select-none cursor-pointer">Email quản trị và nhận thông báo</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhapemail"
              name="modal-nhapemail"
              placeholder="tobias@gmail.com"
              input-class="cms-input__default"/>
          </div>
      </div>
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapemail" class="select-none cursor-pointer">Mô tả website</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhapemail"
              name="modal-nhapemail"
              placeholder="Nhập mô tả để nâng cao xếp hạng trên các trang tìm kiếm như Google, Bing…"
              input-class="cms-input__default"/>
          </div>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';

export default {
  components: {
    Box,
    InputType,
  },
};
</script>

<style lang="scss"></style>
