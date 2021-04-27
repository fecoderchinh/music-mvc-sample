<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Thuộc tính
        </label>
        <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Thêm thuộc tính</a>
      </div>

      <div class="w-full">
        <p class="text-standardCMS text-menuItem">Thêm thuộc tính giúp khách hàng phân biệt lựa chọn các màu sắc, kích cỡ…</p>
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
