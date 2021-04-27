<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-pb">

      <div class="cms-label text-18px mb-4">
        <h2>Chi tiết đơn hàng</h2>
      </div>

      <div class="md:absolute sm:relative top-0 right-0 mt-5">
        <ul class="list-none mr-5">
          <li class="inline sm:mr-3 sm:mb-3 inline-flex" v-for="( shData, shIndex ) in shippingCheckboxData" :key="shIndex">
            <CheckType
              main-class="ml-5 sm:ml-0 rounded-checkbox notify-checkbox"
              :checked="shData.id === shippingCheckboxDataDefault"
              :label-class="shData.id === shippingCheckboxDataDefault ? 'bg-cmsGreenNotify' : 'bg-cmsOrangeNotify'"
              :id="'shipping-status'+shData.id">
              <template slot="text"><h3 class="ml-2">{{ shData.shippingName }}</h3></template>
            </CheckType>
          </li>
        </ul>
      </div>

      <TableWithoutForm class="mb-5"/>

      <div class="grid-cols">

        <div class="sm:w-full xl:w-2/4">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <h2>Ghi chú</h2>
          </div>

          <div class="relative text-gray-600 flex-auto">
            <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Ghi chú cho đơn hàng này...">
              Khách khó tính, chú ý giao đúng màu và test kỹ
            </textarea>
          </div>
        </div>

        <div class="sm:w-1/2 xl:w-1/4 md:text-right text-left">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <h2>Giá</h2>
          </div>

          <ul class="list-none">
            <li class="mb-5 block">
              <h3 class="font-lato font-medium text-14px text-menuItem">Khuyến mãi</h3>
            </li>
            <li class="mb-5 block">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <h2>Tổng cộng</h2>
              </div>
            </li>
          </ul>
        </div>

        <div class="sm:w-1/2 xl:w-1/4 text-right">
          <div class="cms-label text-14px mb-3 text-menuItem">
            <h2>123,467,000đ</h2>
          </div>

          <ul class="list-none">
            <li class="mb-5 block">
              <h3 class="font-lato font-medium text-14px text-menuItem">23,467,000đ</h3>
            </li>
            <li class="mb-5 block">
              <div class="cms-label text-14px mb-3">
                <h3>123,446,000đ</h3>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div class="grid-cols text-left md:text-right py-2 border-t">
        <div class="w-full no-mb md:flex items-center">
          <ListItemWithIcon :option-data="this.listItemData" />
          <ul class="ml-auto list-none">
            <li class="inline sm:block mr-8 sm:mr-0 sm:mb-3">
              <ModalReturnOrder/>
            </li>
            <li class="inline sm:block">
              <ModalConfirmOrder/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end box content -->

    <!-- box title -->
    <div class="flex flex-auto sm:flex-col mb-4">
      <div class="cms-label flex flex-auto items-center text-lg text-labelAndTitle w-7/12 mr-5">
        <h1>
          Phiếu giao hàng
        </h1>
      </div>
    </div>
    <!-- end box title -->

    <!-- box content -->
    <DeliveryNotes/>
    <!-- end box content -->

    <!-- box content -->
    <DeliveryNotesDisabled/>
    <!-- end box content -->

    <!-- box title -->
    <div class="flex flex-auto sm:flex-col mb-4">
      <div class="cms-label flex flex-auto items-center text-lg text-labelAndTitle w-7/12 mr-5">
        <h1>
          Lịch sử đơn hàng
        </h1>
      </div>
    </div>
    <!-- end box title -->

    <div class="w-full no-pb border-t">
      <div class="grid-cols">
        <Timeline/>
      </div>
    </div>

    <div class="w-full no-pb">
      <div class="grid-cols relative">
        <div class="md:absolute top-0 right-0">
          <ul class="list-none">
            <li class="inline mr-8 sm:mr-5 sm:mb-3">
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
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/client/Footer.vue';
import CheckType from '@/components/client/CheckType.vue';
import Timeline from '@/components/client/Timeline.vue';
import DeliveryNotes from '@/components/client/DeliveryNotes.vue';
import DeliveryNotesDisabled from '@/components/client/DeliveryNotesDisabled.vue';
import TableWithoutForm from '@/components/client/TableWithoutForm.vue';
import ListItemWithIcon from '@/components/client/ListItemWithIcon.vue';
import Button from '@/components/client/Button.vue';

import ModalCancelOrder from '@/components/client/ModalCancelOrder.vue';
import ModalReturnOrder from '@/components/client/ModalReturnOrder.vue';
import ModalConfirmOrder from '@/components/client/ModalConfirmOrder.vue';

export default {
  components: {
    Footer,
    CheckType,
    Timeline,
    DeliveryNotes,
    DeliveryNotesDisabled,
    TableWithoutForm,
    ListItemWithIcon,
    Button,
    ModalReturnOrder,
    ModalConfirmOrder,
  },
  data() {
    return {
      shippingCheckboxDataDefault: 1,
      shippingCheckboxData: [
        {
          id: 1,
          shippingName: 'Đã giao hàng',
        },
        {
          id: 2,
          shippingName: 'Chưa nhận tiền',
        },
      ],
      listItemData: [
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'In đơn',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Lưu trữ',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Hủy đơn',
          aModal: ModalCancelOrder,
        },
      ],
    };
  },
};
</script>
