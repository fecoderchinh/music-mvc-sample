<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm mới sản phẩm
      </h3>
    </div>

    <div class="grid grid-cols-6 gap-5" slot="body">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">

        <ProductContent2 class="no-p no-b no-mb" />
        <ProductImages class="no-p no-b" />
        <ProductPrice2 class="no-p no-b" />
        <ProductDescription class="no-p no-b" />
        <ProductStock2 class="no-p no-b" />
        <ProductAttributes class="no-px no-b-l no-b-r" />
        <ProductSearchDisplay class="no-p no-b" />

        <Footer class="text-center"/>
      </div>
      <!-- end column -->

      <!-- column -->
      <div class="col-span-6 xl:col-span-2">

        <WidgetRadioStatus/>

        <WidgetMergeBoxes/>

      </div>
      <!-- end column -->

    </div>

    <ul class="md:text-right list-none flex-1 items-center" slot="footer">
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
import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetMergeBoxes from '@/components/client/WidgetMergeBoxes.vue';
import ProductContent2 from '@/components/client/ProductContent2.vue';
import ProductImages from '@/components/client/ProductImages.vue';
import ProductPrice2 from '@/components/client/ProductPrice2.vue';
import ProductDescription from '@/components/client/ProductDescription.vue';
import ProductStock2 from '@/components/client/ProductStock2.vue';
import ProductAttributes from '@/components/client/ProductAttributes.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    WidgetRadioStatus,
    WidgetMergeBoxes,
    ProductContent2,
    ProductImages,
    ProductPrice2,
    ProductDescription,
    ProductStock2,
    ProductAttributes,
    ProductSearchDisplay,
    Button,
  },
};
</script>

<style lang="scss"></style>
