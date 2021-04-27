<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Khách hàng</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline sm:mr-0 sm:mb-3">
            <Button link="/dashboard/customer-create" button-class="cms-button cms-button-blue">
              <template slot="name">
                Thêm khách hàng
              </template>
            </Button>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <div class="col-span-6">

        <CustomerList />

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Button from '@/components/client/Button.vue';
import CustomerList from '@/components/client/CustomerList.vue';

export default {
  components: {
    Header,
    Button,
    CustomerList,
  },
};
</script>
