<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <template slot="header">
      <div class="flex items-center">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Đơn hàng #1001
          <span class="text-14px text-placeholderStyle md:ml-5">20/11/2020 16:45</span>
        </h3>
      </div>
    </template>

    <template slot="body">

      <!-- wrapper -->
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-5">

        <!-- column -->
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div class="cms-typo">
            <ListItems />
          </div>
          <div class="cms-typo">
            <ShippingDetail />
          </div>
        </div>

        <!-- column -->
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
          <div class="col-span-2 sm:col-span-3">
            <OrderTicket/>
          </div>

          <div class="col-span-1 sm:col-span-3">
            <ul class="list-none">
              <li class="block mb-3">
                <ModalCancelOrderTicket/>
              </li>
              <li class="block mb-3">
                <Button button-class="cms-button cms-button-white w-full">
                  <template slot="name">
                    Lưu đơn hàng
                  </template>
                </Button>
              </li>
              <li class="block mb-3">
                <Button button-class="cms-button cms-button-blue w-full">
                  <template slot="name">
                    Xác nhận thanh toán
                  </template>
                </Button>
              </li>
              <li class="block mb-3">
                <Button button-class="cms-button cms-button-white w-full">
                  <template slot="name">
                    Hoàn đơn
                  </template>
                </Button>
              </li>
              <li class="block">
                <Button button-class="cms-button cms-button-blue w-full">
                  <template slot="name">
                    Giao hàng
                  </template>
                </Button>
              </li>
            </ul>
          </div>

          <div class="col-span-3">
            <div class="w-full no-mb md:flex items-center">
              <ListItemWithIcon :option-data="this.listItemData" />
            </div>
          </div>
        </div>

      </div>
      <!-- end wrapper -->

    </template>

    <template slot="footer">
      <ul class="text-right list-none">
        <li class="inline sm:block mr-5 sm:mr-0 sm:mb-3">
          <Button button-class="cms-button cms-button-white">
            <template slot="name">
              Hủy
            </template>
          </Button>
        </li>
        <li class="inline sm:block">
          <Button button-class="cms-button cms-button-blue">
            <template slot="name">
              Lưu
            </template>
          </Button>
        </li>
      </ul>
    </template>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import ListItems from '@/components/client/ListItems.vue';
import ShippingDetail from '@/components/client/ShippingDetail.vue';
import OrderTicket from '@/components/client/OrderTicket.vue';
import Button from '@/components/client/Button.vue';
import ListItemWithIcon from '@/components/client/ListItemWithIcon.vue';
import ModalCancelOrderTicket from '@/components/client/ModalCancelOrderTicket.vue';

import {
  BackspaceSVG,
  DownloadSVG,
  PrintSVG,
  SendSVG
} from '@/components/SVGs'

export default {
  components: {
    Modal,
    ListItems,
    ShippingDetail,
    OrderTicket,
    Button,
    ListItemWithIcon,
    ModalCancelOrderTicket,
  },
  data() {
    return {
      listItemData: [
        {
          component: PrintSVG,
          componentClass: 'w-icon',
          link: '#',
          name: 'In vận đơn',
        },
        {
          component: SendSVG,
          componentClass: 'w-icon',
          link: '#',
          name: 'Gửi yêu cầu',
        },
        {
          component: DownloadSVG,
          componentClass: 'w-icon',
          link: '#',
          name: 'Lưu trữ phiếu',
        },
        {
          component: BackspaceSVG,
          componentClass: 'w-icon',
          link: '#',
          name: 'Hủy giao hàng',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
