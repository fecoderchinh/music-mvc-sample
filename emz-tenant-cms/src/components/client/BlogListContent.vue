<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt">

    <FormInlineFilterBlog/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TableBlogList class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterBlog from '@/components/client/FormInlineFilterBlog.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TableBlogList from '@/components/client/TableBlogList.vue';

export default {
  components: {
    FormInlineFilterBlog,
    InlineTags,
    TableBlogList,
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
