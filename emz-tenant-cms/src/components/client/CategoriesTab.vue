<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt no-pb">

    <FormInlineFilterCategories/>

    <InlineTags :option-data="this.optionDataTags"/>

    <TableCategories class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterCategories from '@/components/client/FormInlineFilterCategories.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import TableCategories from '@/components/client/TableCategories.vue';

export default {
  components: {
    FormInlineFilterCategories,
    InlineTags,
    TableCategories,
  },
  data() {
    return {
      optionDataTags: [
        {
          name: 'Tất cả',
          closeTag: true,
        },
        {
          name: 'Thêm thủ công',
          closeTag: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
