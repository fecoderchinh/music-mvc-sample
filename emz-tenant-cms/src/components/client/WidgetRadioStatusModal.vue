<template>
  <!-- eslint-disable max-len -->
  <Widget>
    <template slot="title">
      <label for="search-customer" class="cursor-pointer">Trạng thái</label>
    </template>
    <template slot="content">
      <ul class="list-none mb-3 -mt-px sm:grid sm:gap-2">
        <li class="inline-flex sm:flex mr-3">
          <Radio id="radio-status-1" name="radio" label-class="text-14px text-labelAndTitle">
          <template slot="radio-text">Bán trên web</template>
        </Radio>
        </li>
        <li class="inline-flex sm:flex">
          <Radio id="radio-status-2" name="radio" label-class="text-14px text-labelAndTitle" checked>
          <template slot="radio-text">Dừng bán</template>
        </Radio>
        </li>
      </ul>
      <a href="#" class="font-lato font-medium text-14px text-buttonAndURL mt-3 block">Đặt lịch hiển thị và bán</a>
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
};
</script>
