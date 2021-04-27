<template>
  <!-- eslint-disable max-len -->
  <div class="p-5 no-pt">

    <FormInlineFilterPage/>

    <TablePageList class="mt-3"/>

  </div>
</template>

<script>
import FormInlineFilterPage from '@/components/client/FormInlineFilterPage.vue';
import TablePageList from '@/components/client/TablePageList.vue';

export default {
  components: {
    FormInlineFilterPage,
    TablePageList,
  },
};
</script>

<style lang="scss"></style>
