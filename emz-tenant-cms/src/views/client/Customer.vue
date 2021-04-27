<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="/dashboard/customer-list" slot="content">Danh sách khách hàng</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <HeaderCustomerDetail slot="title"/>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">

        <CustomerDetail />
        <CustomerLatestOrder />

        <div class="w-full no-pb md:pt-5">
          <div class="grid-cols relative">
            <div class="md:absolute top-0 right-0">
              <ul class="list-none">
                <li class="inline mr-5 sm:mb-3">
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

        <Footer class="text-center"/>
      </div>
      <!-- end column -->

      <!-- column -->
      <div class="col-span-6 xl:col-span-2">

        <Widget>
          <template slot="title">
            <h3 class="cursor-pointer text-lg text-labelAndTitle">
              Địa chỉ
            </h3>
            <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>
          </template>
          <template slot="content">
            <div class="flex flex-wrap">

              <ul class="list-none space-y-1 w-full">
                <li class="text-menuItem text-14px relative font-medium">
                  <div class="cms-label text-14px">
                    <label for="check-cus-name" class="cursor-pointer text-14px text-labelAndTitle">
                      Vô Ảnh Long
                    </label>
                    <CheckType
                      main-class="absolute top-0 right-0 sm:ml-0 rounded-checkbox no-mr"
                      id="check-cus-name"
                      checked>
                      <template slot="text">Mặc định</template>
                    </CheckType>
                  </div>
                </li>
                <li class="text-menuItem text-14px relative font-medium">
                  +84969786518
                </li>
                <li class="text-menuItem text-14px relative font-medium">
                  122 Thuong Dinh, Thanh Xuan, Ha Noi
                </li>
                <li class="text-menuItem text-14px relative font-medium">
                  Phường Cống Vị
                </li>
                <li class="text-menuItem text-14px relative font-medium">
                  Quận Ba Đình
                </li>
                <li class="text-menuItem text-14px relative font-medium">
                  Hà Nội, 100000
                </li>
                <li class="text-menuItem text-14px relative font-medium">
                  Vietnam
                </li>
              </ul>

              <a href="#" class="font-lato font-medium text-14px text-buttonAndURL mt-5 block">Thêm địa chỉ mới</a>

            </div>
          </template>
        </Widget>

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import HeaderCustomerDetail from '@/components/client/HeaderCustomerDetail.vue';
import Widget from '@/components/client/Widget.vue';
import CustomerDetail from '@/components/client/CustomerDetail.vue';
import CustomerLatestOrder from '@/components/client/CustomerLatestOrder.vue';
import Button from '@/components/client/Button.vue';
import Footer from '@/components/client/Footer.vue';
import CheckType from '@/components/client/CheckType.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    HeaderCustomerDetail,
    Widget,
    CustomerDetail,
    CustomerLatestOrder,
    Button,
    Footer,
    CheckType,
  },
};
</script>
