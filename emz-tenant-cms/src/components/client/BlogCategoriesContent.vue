<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt">

    <FormInlineFilterBlogCategories/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TableBlogCategories class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterBlogCategories from '@/components/client/FormInlineFilterBlogCategories.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TableBlogCategories from '@/components/client/TableBlogCategories.vue';

export default {
  components: {
    FormInlineFilterBlogCategories,
    InlineTags,
    TableBlogCategories,
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
