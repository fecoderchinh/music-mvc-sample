<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt">

    <FormInlineFilter/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TableListCOD class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilter from '@/components/client/FormInlineFilter.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TableListCOD from '@/components/client/TableListCOD.vue';

export default {
  components: {
    FormInlineFilter,
    InlineTags,
    TableListCOD,
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
