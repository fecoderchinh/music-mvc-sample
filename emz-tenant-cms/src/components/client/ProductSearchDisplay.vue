<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Xem trước kết quả Google
        </label>
        <a href="javascript:void(0)" @click="showSettings = !showSettings" class="text-standardCMS md:absolute sm:block top-0 right-0 text-buttonAndURL">Tùy chỉnh SEO</a>
      </div>

      <div class="w-full flex flex-col space-y-1 google-search-display" v-if="(seoTitle === '' && seoContent === '' && seoURL === '')">
        <p class="text-standardCMS">Xin hãy nhập Tiêu đề và Mô tả để xem trước kết quả tìm kiếm của danh mục này</p>
      </div>

      <div class="w-full flex flex-col space-y-1 google-search-display" v-else>
        <a href="#" class="text-standardCMS">{{ seoTitle }}</a>
        <span class="text-standardCMS">{{ seoURL }}</span>
        <p class="text-standardCMS">{{ seoContent }}</p>
      </div>

      <div class="w-full border-t mt-5 pt-5" :class="showSettings ? 'h-auto block' : 'h-0 hidden'">
        <div class="cms-label text-14px">
          <label class="cursor-pointer text-14px text-labelAndTitle">
            Tùy chỉnh SEO
          </label>
        </div>
        <div class="w-full mt-3">

          <div class="cms-label text-14px">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Thẻ tiêu đề
            </label>
            <span class="text-standardCMS md:absolute sm:block top-0 right-0 text-menuIcon">Số kí tự đã dùng: <span class="text-menuItem">{{ seoTitle.length }}/70</span></span>
          </div>

          <InputType
              id="seo-title"
              name="seo-title"
              button="reset"
              v-model="seoTitle"
              input-class="cms-input__default">
          </InputType>
        </div>

        <div class="w-full mt-5">

          <div class="cms-label text-14px">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Mô tả
            </label>
            <span class="text-standardCMS md:absolute sm:block top-0 right-0 text-menuIcon">Số kí tự đã dùng: <span class="text-menuItem">{{ seoContent.length }}/360</span></span>
          </div>

          <div class="w-full no-mb">
            <textarea v-model="seoContent" id="seo-content" name="seo-content" class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"></textarea>
          </div>
        </div>

        <div class="w-full mt-5">

          <div class="cms-label text-14px">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Đường dẫn / Alias
            </label>
          </div>

          <InputGroup>
            <div class="cms-input" slot="group">
              <span class="input-group-text flex text-menuItem font-lato font-medium text-14px" id="basic-addon3">https://tulinh-salon.dkz.vn/</span>
              <InputType
                  placeholder="combo1"
                  id="seo-url"
                  name="seo-url"
                  v-model="seoURL"
                  input-class="cms-input__default"/>
            </div>
          </InputGroup>
        </div>
      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from "@/components/client/InputType";
import InputGroup from "@/components/client/InputGroup";

export default {
  components: {
    InputGroup,
    InputType,
    Box,
  },
  data() {
    return {
      seoTitle: '',
      seoContent: '',
      seoURL: '',
      showSettings: false
    }
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
