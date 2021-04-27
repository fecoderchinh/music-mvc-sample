<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt no-pb">

    <FormInlineFilterProduct/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TableProductList class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterProduct from '@/components/client/FormInlineFilterProduct.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TableProductList from '@/components/client/TableProductList.vue';

export default {
  components: {
    FormInlineFilterProduct,
    InlineTags,
    TableProductList,
  },
  data() {
    return {
      optionDataTags: [
        {
          name: 'Chờ lấy hàng',
          closeTag: true,
        },
        {
          name: 'Đặt hôm nay',
          closeTag: true,
        },
        {
          name: 'Đơn từ website',
          closeTag: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
