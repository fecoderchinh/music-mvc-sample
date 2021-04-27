<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-5">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Đặc điểm nổi bật <span class="text-cmsRed">*</span>
        </label>
      </div>

      <div class="grid-cols">
        <div class="w-full mb-5">
          <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Viết 3 gạch đầu dòng những đặc điểm nổi bật nhất"></textarea>
        </div>
      </div>

      <div class="cms-label text-14px mb-5">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Mô tả sản phẩm chi tiết <span class="text-cmsRed">*</span>
        </label>
      </div>

      <div class="w-full">
        <div class="w-full no-mb">
          <textarea id="add-product-desc" name="add-product-desc" class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Mô tả chi tiết tính năng, công dụng, đặc điểm kỹ thuật, những điểm nổi bật … Đính kèm ảnh thông số kỹ thuật, ảnh sản phẩm …"></textarea>
        </div>
      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';

export default {
  components: {
    Box,
  },
};
</script>

<style lang="scss"></style>
