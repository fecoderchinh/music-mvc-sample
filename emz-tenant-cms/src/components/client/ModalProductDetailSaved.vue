<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        iPhone 12
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <!-- column -->
        <div class="col-span-6 xl:col-span-4 order-1">

          <BoxProductDetail class="no-mb" />
          <ProductImages class="no-p no-b">
            <h3 slot="label">Ảnh sản phẩm <span class="text-cmsRed">*</span> <span class="ml-3 text-xs text-placeholderStyle">Kéo để  sắp xếp vị trí ảnh</span></h3>
          </ProductImages>
          <ProductPrice class="no-p no-b"/>
          <ProductDescription class="no-p no-b" />
          <ProductStock2 class="no-p no-b"/>
        </div>
        <!-- end column -->

        <!-- column -->
        <div class="col-span-6 xl:col-span-2 lg:order-2 order-4">

          <WidgetRadioStatus/>

          <WidgetMergeBoxes/>

        </div>
        <div class="col-span-6 lg:order-3 order-2">
          <QuickSelect class="no-p no-b"/>
          <TableVersionSaved class="mb-5"/>
        </div>
        <div class="col-span-6 xl:col-span-4 lg:order-4 order-3">
          <ProductSearchDisplay class="no-px no-pb no-b-b no-b-l no-b-r" />
        </div>
        <!-- end column -->

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-disabled">
          <template slot="name">
            Hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-disabled">
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
import BoxProductDetail from '@/components/client/BoxProductDetail.vue';
import ProductImages from '@/components/client/ProductImages.vue';
import ProductPrice from '@/components/client/ProductPrice.vue';
import ProductDescription from '@/components/client/ProductDescription.vue';
import ProductStock2 from '@/components/client/ProductStock2.vue';
import QuickSelect from '@/components/client/QuickSelect.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetMergeBoxes from '@/components/client/WidgetMergeBoxes.vue';
import Button from '@/components/client/Button.vue';

import TableVersionSaved from '@/components/client/TableVersionSaved.vue';

export default {
  components: {
    Modal,
    BoxProductDetail,
    ProductImages,
    ProductPrice,
    ProductDescription,
    ProductStock2,
    QuickSelect,
    ProductSearchDisplay,
    WidgetRadioStatus,
    WidgetMergeBoxes,
    Button,
    TableVersionSaved,
  },
};
</script>

<style lang="scss"></style>
