<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label class="cursor-pointer text-14px text-labelAndTitle">
          Các phiên bản
        </label>
        <ul class="list-none md:absolute sm:mt-3 top-0 right-0">
          <li class="inline mr-5">
            <ModalSortVersion/>
          </li>
          <li class="inline">
            <ModalEditVersion/>
          </li>
        </ul>
      </div>

      <ListColours :optionData="optionData" class="no-b no-p"/>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import ListColours from '@/components/client/ListColours.vue';

import ModalSortVersion from '@/components/client/ModalSortVersion.vue';
import ModalEditVersion from '@/components/client/ModalEditVersion.vue';

export default {
  components: {
    Box,
    ListColours,
    ModalSortVersion,
    ModalEditVersion,
  },
  data() {
    return {
      optionData: [
        {
          color: 'cmsRed',
          name: 'Xanh',
        },
        {
          color: 'cmsRed',
          name: 'Đỏ',
        },
        {
          color: 'cmsRed',
          name: 'Tím',
        },
        {
          color: 'cmsGreen',
          name: 'To',
        },
        {
          color: 'cmsGreen',
          name: 'Thường',
        },
        {
          color: 'cmsGreen',
          name: 'Nhỏ',
        },
        {
          color: 'Orange',
          name: 'Nhựa',
        },
        {
          color: 'Orange',
          name: 'Kim loại',
        },
        {
          color: 'Orange',
          name: 'Thủy tinh',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
