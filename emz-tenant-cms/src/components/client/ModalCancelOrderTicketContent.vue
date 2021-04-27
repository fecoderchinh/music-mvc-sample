<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Hủy phiếu giao hàng
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <p class="cms-typo text-15px text-menuItem">Sau khi hủy phiếu, bạn sẽ vẫn có thể giao lại đơn hàng này.</p>
          <p class="cms-typo text-15px text-menuItem mt-3">Chúng tôi sẽ gửi thông báo hủy giao hàng sang đơn vị vận chuyển bạn sử dụng. Tuy nhiên bạn cần xác nhận lại với đơn vị vận chuyển để đảm bảo vận đơn đã được huỷ.</p>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Lý do hủy phiếu giao hàng</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Không hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-orange">
          <template slot="name">
            Hủy phiếu giao hàng
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    SelectOption,
    Button,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Khách hủy đơn' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
