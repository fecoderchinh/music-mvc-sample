<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6 md:col-span-4">
        <slot/>
      </div>
      <div class="col-span-6 md:col-span-2">
        <div class="cms-label text-14px mb-3 text-white hidden md:block">
          <label class="select-none">TextmakesNoSense</label>
        </div>
        <Box>
          <template slot="content">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label class="select-none cursor-pointer">Alias</label>
              <p class="mt-5">Alias này dùng để truy cập các thuộc tính của Menu trong Theme. <a href="#" class="text-buttonAndURL">Tìm hiểu thêm</a></p>
            </div>
            <div class="w-full">
              <InputType
                  button="reset"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </template>
        </Box>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from "@/components/client/InputType";

export default {
  components: {
    Box,
    InputType
  },
  props: {
    optionData: Array,
  },
};
</script>

<style lang="scss"></style>
