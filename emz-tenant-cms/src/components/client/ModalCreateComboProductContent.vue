<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Tạo Combo các sản phẩm
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <!-- column -->
        <div class="col-span-6 xl:col-span-4">

          <ProductContentCombo class="no-p no-b"/>
          <ProductImages class="no-b no-p" />
          <ProductDescription class="no-b no-p" />
          <ProductSearchDisplay class="no-b no-p" />

        </div>
        <!-- end column -->

        <!-- column -->
        <div class="col-span-6 xl:col-span-2">

          <WidgetRadioStatus/>

          <WidgetMergeBoxes/>

        </div>
        <!-- end column -->

      </div>

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
import ProductContentCombo from '@/components/client/ProductContentCombo.vue';
import ProductImages from '@/components/client/ProductImages.vue';
import ProductDescription from '@/components/client/ProductDescription.vue';
import ProductSearchDisplay from '@/components/client/ProductSearchDisplay.vue';
import WidgetRadioStatus from '@/components/client/WidgetRadioStatus.vue';
import WidgetMergeBoxes from '@/components/client/WidgetMergeBoxes.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    ProductContentCombo,
    ProductImages,
    ProductDescription,
    ProductSearchDisplay,
    WidgetRadioStatus,
    WidgetMergeBoxes,
    Button,
  },
};
</script>

<style lang="scss"></style>
