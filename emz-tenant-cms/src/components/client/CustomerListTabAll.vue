<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt">

    <CustomerFilter/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TableCustomer class="mt-3"/>

  </div>
</template>

<script>
import CustomerFilter from '@/components/client/CustomerFilter.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TableCustomer from '@/components/client/TableCustomer.vue';

export default {
  components: {
    CustomerFilter,
    InlineTags,
    TableCustomer,
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
