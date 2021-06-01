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
      <a href="#" class="font-lato font-medium text-14px text-buttonAndURL mt-3 block" @click.self.prevent="show">Đặt lịch hiển thị</a>
      <div v-if="showDate === true" class="grid grid-cols-6 gap-x-10 gap-y-5 mt-5">
        <div class="col-span-6 md:col-span-3">
          <InputGroup>
            <div class="cms-input" slot="group">
              <InputType
                  placeholder="Giờ"
                  input-class="cms-input__default"/>
              <InputType
                  placeholder="Phút"
                  input-class="cms-input__default"/>
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
  </Widget>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import Widget from '@/components/client/Widget.vue';
import Radio from '@/components/client/Radio.vue';
import InputGroup from "@/components/client/InputGroup";
import InputType from "@/components/client/InputType";
import Button from "@/components/client/Button";

export default {
  components: {
    Widget,
    Radio,
    InputGroup,
    InputType,
    DatePicker,
    Button
  },
  data() {
    return {
      showDate: false,
      time1: null,
    };
  },
  methods: {
    show() {
      this.showDate = !this.showDate;
    }
  }
};
</script>
