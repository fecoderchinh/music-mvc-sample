<template>
  <!-- eslint-disable max-len -->
  <Widget>
    <template slot="title">
      <h3 class="cursor-pointer text-labelAndTitle">Thông tin kinh doanh hôm nay</h3>
    </template>
    <template slot="content">
      <div class="flex flex-wrap">

        <ul class="none space-y-5">
          <li class="text-menuItem text-14px relative cms-typo flex items-center cms-typo">
            <EllipseSVG class="w-4 h-4 inline mr-4"/> <strong class="mr-4">135,8tr</strong> <span>Doanh thu</span>
          </li>
          <li class="text-menuItem text-14px relative cms-typo flex items-center cms-typo">
            <EllipseSVG class="w-4 h-4 inline mr-4"/> <strong class="mr-4">135,8tr</strong> <span>Doanh thu</span>
          </li>
          <li class="text-menuItem text-14px relative cms-typo flex items-center cms-typo">
            <EllipseSVG class="w-4 h-4 inline mr-4"/> <strong class="mr-4">135,8tr</strong> <span>Doanh thu</span>
          </li>
          <li class="text-menuItem text-14px relative cms-typo flex items-center cms-typo">
            <EllipseSVG class="w-4 h-4 inline mr-4"/> <strong class="mr-4">135,8tr</strong> <span>Doanh thu</span>
          </li>
          <li class="text-menuItem text-14px relative cms-typo flex items-center cms-typo">
            <EllipseSVG class="w-4 h-4 inline mr-4"/> <strong class="mr-4">135,8tr</strong> <span>Doanh thu</span>
          </li>
          <li class="text-menuItem text-14px relative cms-typo flex items-center cms-typo">
            <EllipseSVG class="w-4 h-4 inline mr-4"/> <strong class="mr-4">135,8tr</strong> <span>Doanh thu</span>
          </li>
          <li class="text-menuItem text-14px relative cms-typo flex items-center cms-typo">
            <EllipseSVG class="w-4 h-4 inline mr-4"/> <strong class="mr-4">135,8tr</strong> <span>Doanh thu</span>
          </li>
        </ul>

      </div>
    </template>
  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import {
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Widget,
    EllipseSVG,
  },
};
</script>

<style scoped>

</style>
