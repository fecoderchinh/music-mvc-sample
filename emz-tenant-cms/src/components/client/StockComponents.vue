<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt no-pb">

    <FormInlineFilterStock/>

    <InlineTags :option-data="this.optionDataTags"/>

    <StockTable class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterStock from '@/components/client/FormInlineFilterStock.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import StockTable from '@/components/client/StockTable.vue';

export default {
  components: {
    FormInlineFilterStock,
    InlineTags,
    StockTable,
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
