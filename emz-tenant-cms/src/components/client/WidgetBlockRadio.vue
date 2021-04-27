<template>
  <!-- eslint-disable max-len -->
  <Widget>
    <template slot="title">
      <label for="search-customer" class="cursor-pointer">Quản lý bình luận</label>
    </template>
    <template slot="content">
      <ul class="list-none grid gap-5">
        <li class="block sm:flex mr-3" v-for="(data, index) in optionDataTable" :key="index">
          <Radio :id="'radio-status-'+index" name="radio" label-class="text-14px text-labelAndTitle" :checked="index===0">
          <template slot="radio-text">{{ data }}</template>
        </Radio>
        </li>
      </ul>
    </template>
  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import Radio from '@/components/client/Radio.vue';

export default {
  components: {
    Widget,
    Radio,
  },
  data() {
    return {
      optionDataTable: [
        'Cho phép bình luận, chờ kiểm duyệt',
        'Cho phép bình luận, tự động đăng',
        'Vô hiệu hóa bình luận',
      ],
    };
  },
};
</script>
