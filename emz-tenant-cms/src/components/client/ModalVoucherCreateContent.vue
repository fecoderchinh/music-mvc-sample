<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Tạo mã khuyến mãi - VOUCHER
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <!-- column -->
        <div class="col-span-6 xl:col-span-4">

          <VoucherForm class="no-b-l no-b-r no-b-t no-px no-pt" />
          <VoucherRadio class="no-b-l no-b-r no-b-t no-px no-pt" />
          <VoucherRadio2 class="no-b-l no-b-r no-b-t no-px no-pt" />
          <PromotionSchedule class="no-b no-p" />

        </div>
        <!-- end column -->

        <!-- column -->
        <div class="col-span-6 xl:col-span-2">

          <WidgetBlockList/>

        </div>
        <!-- end column -->

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
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

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';

import VoucherForm from '@/components/client/VoucherForm.vue';
import VoucherRadio from '@/components/client/VoucherRadio.vue';
import VoucherRadio2 from '@/components/client/VoucherRadio2.vue';
import PromotionSchedule from '@/components/client/PromotionSchedule.vue';

import WidgetBlockList from '@/components/client/WidgetBlockList.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    VoucherForm,
    VoucherRadio,
    VoucherRadio2,
    PromotionSchedule,
    WidgetBlockList,
    Button,
  },
};
</script>

<style lang="scss"></style>
