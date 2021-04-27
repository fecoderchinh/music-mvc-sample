<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Xem trước kết quả Google
        </label>
        <a href="#" class="text-standardCMS md:absolute sm:block top-0 right-0 text-buttonAndURL">Tùy chỉnh SEO</a>
      </div>

      <div class="w-full flex flex-col space-y-1 google-search-display">
        <a href="#" class="text-standardCMS">Combo cần câu gia đình</a>
        <span class="text-standardCMS">https://tulinh-salon.dkz.vn/combo1</span>
        <p class="text-standardCMS">Nếu bạn đang có kế hoạch đi câu cuối tuần này, vậy thì cùng DulichToday điểm qua danh sách những địa điểm câu cá tại Hà Nội trong bảng tóm tắt dưới đây ...</p>
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

<style lang="scss">
  .google-search-display {
    a {
      color: #0070d2;
    }
    span {
      color: #04844b;
    }
    p {
      color: #54698d;
    }
  }
</style>
