<template>
  <!-- eslint-disable max-len -->
  <div class="w-full bg-gray-200 shadow md:h-16 sm:h-auto md:px-5 sm:max-flex-col md:flex items-center justify-start">
    <div class="flex flex-auto sm:p-3 sm:px-5 md:p-0 md:border-0 sm:border-b">
      <strong class="cms-typo text-base text-labelAndTitle">
        Something chưa được lưu
      </strong>
    </div>
    <div class="flex ml-auto items-center sm:h-12 sm:px-5 md:h-full">

    <ul class="list-none">
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
  </div>
</div>
</template>
<script>
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>
