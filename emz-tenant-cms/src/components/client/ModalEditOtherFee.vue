<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Phí vận chuyển CÁC KHU VỰC KHÁC
      </h3>
    </div>

    <div class="w-full" slot="body">
      <Box classes="no-p no-b no-mb">
        <div slot="content">

          <div class="grid grid-cols-6 gap-5">
            <div class="col-span-6 md:text-right">
              <Button button-class="cms-button cms-button-blue">
                <template slot="name">
                  Thêm phương thức
                </template>
              </Button>
            </div>
          </div>

          <TableOtherFee class="mt-5 p-3 border rounded"/>
        </div>
      </Box>
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

import Box from '@/components/client/Box.vue';
import TableOtherFee from '@/components/client/TableOtherFee.vue';

import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    Box,
    TableOtherFee,
    Button,
  },
};
</script>

<style lang="scss"></style>
