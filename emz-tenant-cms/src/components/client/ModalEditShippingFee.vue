<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Phí vận chuyển HÀ NỘI
      </h3>
    </div>

    <div class="w-full" slot="body">
      <Box>
        <div slot="content">

          <div class="grid grid-cols-6 gap-5">
            <div class="col-span-4 sm:col-span-6 flex items-center">
              <label class="cursor-pointer text-14px text-labelAndTitle">Phí vận chuyển theo giá trị đơn hàng</label>
            </div>
            <div class="col-span-2 sm:col-span-6 md:text-right">
              <Button button-class="cms-button cms-button-white">
                <template slot="name">
                  Thêm
                </template>
              </Button>
            </div>
          </div>

          <TableShippingFee class="mt-5"/>
        </div>
      </Box>
      <Box>
        <div slot="content">

          <div class="grid grid-cols-6 gap-5">
            <div class="col-span-4 sm:col-span-6 flex items-center">
              <label class="cursor-pointer text-14px text-labelAndTitle">Phí vận chuyển theo khối lượng đơn hàng</label>
            </div>
            <div class="col-span-2 sm:col-span-6 md:text-right">
              <Button button-class="cms-button cms-button-white">
                <template slot="name">
                  Thêm
                </template>
              </Button>
            </div>
          </div>

          <TableShippingFee2 class="mt-5"/>
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
import TableShippingFee from '@/components/client/TableShippingFee.vue';
import TableShippingFee2 from '@/components/client/TableShippingFee2.vue';

import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    Box,
    TableShippingFee,
    TableShippingFee2,
    Button,
  },
};
</script>

<style lang="scss"></style>
