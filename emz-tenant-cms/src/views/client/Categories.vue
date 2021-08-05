<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Danh mục sản phẩm</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline sm:mr-0 sm:mb-3">
<!--            <ModalPicker-->
<!--                :root="treeModal1[1]">-->
<!--              <Button button-class="w-full cms-button cms-button-blue">-->
<!--                <template slot="name">-->
<!--                  Thêm danh mục-->
<!--                </template>-->
<!--              </Button>-->
<!--            </ModalPicker>-->
            <Button link="/dashboard/category-create" button-class="cms-button cms-button-blue">
              <template slot="name">
                Thêm danh mục
              </template>
            </Button>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <div class="col-span-6">

        <Categories />

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Categories from '@/components/client/Categories.vue';
import ModalCategoryCreateContent from "@/components/client/ModalCategoryCreateContent";
import Button from "@/components/client/Button";

export default {
  components: {
    Button,
    Header,
    Categories,
  },
  data() {
    return {
      currentComponent: '',
      treeModal1: [
        {
          id: 'modal-0',
          name: ''
        },
        {
          id: 'modal-1',
          name: ModalCategoryCreateContent,
          width: 1200,
          shiftX: 0
        }
      ]
    }
  }
};
</script>
