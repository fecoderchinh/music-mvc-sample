<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Danh sách sản phẩm</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline xl:mr-8 md:mr-2 sm:mr-3">
            <ModalCreateComboProduct/>
          </li>
          <li class="inline sm:mr-0 sm:mb-3">
            <ModalPicker
                :root="treeModal1[1]">
              <Button button-class="w-full cms-button cms-button-blue">
                <template slot="name">
                  Thêm danh mục
                </template>
              </Button>
            </ModalPicker>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <div class="col-span-6">

        <ProductList />

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import ModalCreateComboProduct from '@/components/client/ModalCreateComboProduct.vue';
import ModalProductCreate from '@/components/client/ModalProductCreate.vue';
import ProductList from '@/components/client/ProductList.vue';
import Header from '@/components/client/Header.vue';
import ModalPicker from "@/components/client/ModalPicker";
import Button from "@/components/client/Button";

export default {
  components: {
    Button,
    ModalPicker,
    ModalCreateComboProduct,
    ProductList,
    Header,
  },
  data () {
    return {
      treeModal1: [
        {
          id: 'modal-0',
          name: ''
        },
        {
          id: 'modal-1',
          name: ModalProductCreate,
          width: 1200,
          shiftX: 0
        }
      ]
    }
  }
};
</script>
