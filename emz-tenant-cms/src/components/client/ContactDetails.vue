<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Thông tin liên hệ trên website</h3>
        <p class="cms-typo text-14px text-menuItem mt-2">Thông tin sẽ hiển thị trên website, được sử dụng trong các thông báo về đơn hàng, và địa chỉ để khách hàng liên hệ với cửa hàng của bạn.</p>
      </div>
      <div class="col-span-6">
        <div class="grid grid-cols-4 gap-5">
          <div class="col-span-4 md:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="contact-detail-1" class="select-none cursor-pointer">Tên cửa hàng</label>
            </div>
            <div class="w-full">
              <InputType
                  input-type="text"
                  id="contact-detail-1"
                  name="contact-detail-1"
                  placeholder="Nhập tên cửa hàng thực tế"
                  input-class="cms-input__default"/>
            </div>
          </div>
          <div class="col-span-4 md:col-span-1">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="contact-detail-2" class="select-none cursor-pointer">Điện thoại</label>
            </div>
            <div class="w-full">
              <InputType
                  input-type="text"
                  id="contact-detail-2"
                  name="contact-detail-2"
                  placeholder="0983 453 000"
                  input-class="cms-input__default"/>
            </div>
          </div>
          <div class="col-span-4 md:col-span-1">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="contact-detail-3" class="select-none cursor-pointer">Tên chủ website</label>
            </div>
            <div class="w-full">
              <InputType
                  input-type="text"
                  id="contact-detail-3"
                  name="contact-detail-3"
                  placeholder="Trần Tuấn Quỳnh"
                  input-class="cms-input__default"/>
            </div>
          </div>
          <div class="col-span-4">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="contact-detail-4" class="select-none cursor-pointer">
                Địa chỉ cửa hàng
                <a href="#" class="text-buttonAndURL ml-5">Chỉnh sửa vị trí trên bản đồ</a>
              </label>
            </div>
            <div class="w-full">
              <InputType
                  input-type="text"
                  id="contact-detail-4"
                  name="contact-detail-4"
                  placeholder="Nhập địa chỉ thực tế của cửa hàng"
                  input-class="cms-input__default"/>
            </div>
          </div>
          <div class="col-span-4 md:col-span-1">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label class="select-none cursor-pointer">
                Quốc gia
              </label>
            </div>
            <div class="w-full">
              <SelectOption :option-data="this.opt1"/>
            </div>
          </div>
          <div class="col-span-4 md:col-span-1">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label class="select-none cursor-pointer">
                Tỉnh/Thành phố
              </label>
            </div>
            <div class="w-full">
              <SelectOption :option-data="this.opt2"/>
            </div>
          </div>
          <div class="col-span-4 md:col-span-1">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label class="select-none cursor-pointer">
                Quận huyện
              </label>
            </div>
            <div class="w-full">
              <SelectOption :option-data="this.opt3"/>
            </div>
          </div>
          <div class="col-span-4 md:col-span-1">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label class="select-none cursor-pointer">
                Phường xã
              </label>
            </div>
            <div class="w-full">
              <SelectOption :option-data="this.opt4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import InputType from '@/components/client/InputType.vue';
import SelectOption from "@/components/client/SelectOption";

export default {
  components: {
    Box,
    InputType,
    SelectOption
  },
  data() {
    return {
      opt1: [
        { name: 'Việt Nam' },
        { name: 'Campuchia' },
        { name: 'Lào' },
      ],
      opt2: [
        { name: 'Cần Thơ' },
        { name: 'Sài Gòn' },
        { name: 'Hà Nội' },
      ],
      opt3: [
        { name: 'Quận 1' },
        { name: 'Quận 2' },
        { name: 'Quận 3' },
      ],
      opt4: [
        { name: 'Long Biên' },
        { name: 'An Khánh' },
        { name: 'Bình Tân' },
      ],
    }
  }
};
</script>

<style lang="scss"></style>
