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
            <template slot="radio-text">Ẩn hiển thị</template>
          </Radio>
        </li>
      </ul>
      <a href="#" class="font-lato font-medium text-14px text-labelAndTitle mt-3 block">Hiển thị trên web lúc</a>
      <h3 class="text-standardCMS text-menuItem">13:30 ngày 25/11/2021</h3>
      <ul class="md:text-right list-none flex-1 items-center" slot="footer">
        <li class="inline">
          <Button button-class="cms-button cms-button-white">
            <template slot="name">
              Xóa
            </template>
          </Button>
        </li>
      </ul>
    </template>
  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import Radio from '@/components/client/Radio.vue';
import Button from "@/components/client/Button";

export default {
  components: {
    Widget,
    Radio,
    Button
  },
  data() {
    return {
      time1: null,
    };
  },
};
</script>
