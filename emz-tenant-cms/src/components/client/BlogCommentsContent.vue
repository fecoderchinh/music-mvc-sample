<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt">

    <FormInlineFilterBlogComments/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TableBlogComments class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterBlogComments from '@/components/client/FormInlineFilterBlogComments.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TableBlogComments from '@/components/client/TableBlogComments.vue';

export default {
  components: {
    FormInlineFilterBlogComments,
    InlineTags,
    TableBlogComments,
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
