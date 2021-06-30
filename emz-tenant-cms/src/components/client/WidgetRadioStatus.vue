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
      <a href="#" class="font-lato font-medium text-14px text-buttonAndURL mt-3 block" :class="savedDate ? 'hidden' : null" @click.self.prevent="show">Đặt lịch hiển thị</a>
      <div v-if="showDate === true" class="grid grid-cols-6 gap-x-10 gap-y-5 mt-5">
        <div class="col-span-6 md:col-span-3">
          <InputGroup>
            <div class="cms-input" slot="group">
              <DropdownNumber label="Giờ" :range="24"/>
              <DropdownNumber label="Phút" :range="60"/>
            </div>
          </InputGroup>
        </div>
        <div class="col-span-6 md:col-span-3">
          <date-picker v-model="time1" valueType="format" style="min-width: 100%"/>
        </div>
        <div class="col-span-6">
          <ul class="md:text-right list-none flex-1 items-center" slot="footer">
            <li class="inline mr-5">
              <Button button-class="cms-button cms-button-white">
                <template slot="name">
                  Hủy
                </template>
              </Button>
            </li>
            <li class="inline">
              <Button button-class="cms-button cms-button-blue" @click="saved">
                <template slot="name">
                  Lưu
                </template>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <template v-if="savedDate">
        <div class="col-span-6">
          <a href="#" class="font-lato font-medium text-14px text-labelAndTitle block">Hiển thị trên web lúc</a>
          <h3 class="text-standardCMS text-menuItem">13:30 ngày 25/11/2021</h3>
        </div>
        <div class="col-span-6">
          <ul class="md:text-right list-none flex-1 items-center" slot="footer">
            <li class="inline">
              <Button button-class="cms-button cms-button-white" @click="close">
                <template slot="name">
                  Xóa
                </template>
              </Button>
            </li>
          </ul>
        </div>
      </template>
    </template>
  </Widget>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import Widget from '@/components/client/Widget.vue';
import Radio from '@/components/client/Radio.vue';
import InputGroup from "@/components/client/InputGroup";
import Button from "@/components/client/Button";
import DropdownNumber from "@/components/client/DropdownNumber";

export default {
  components: {
    DropdownNumber,
    Widget,
    Radio,
    InputGroup,
    DatePicker,
    Button
  },
  data() {
    return {
      showDate: false,
      savedDate: false,
      time1: null,
    };
  },
  methods: {
    show() {
      this.showDate = !this.showDate;
      this.savedDate = false
    },
    saved() {
      this.savedDate = true
      this.showDate = false
    },
    close() {
      this.savedDate = false
      this.showDate = false
    }
  }
};
</script>
