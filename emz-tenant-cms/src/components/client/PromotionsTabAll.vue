<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt">

    <FormInlineFilterPromotions/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TablePromotions class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterPromotions from '@/components/client/FormInlineFilterPromotions.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TablePromotions from '@/components/client/TablePromotions.vue';

export default {
  components: {
    FormInlineFilterPromotions,
    InlineTags,
    TablePromotions,
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
