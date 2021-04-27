<template>
  <!-- eslint-disable max-len -->
  <Box>
    <TableUserRoles slot="content"/>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import TableUserRoles from '@/components/client/TableUserRoles.vue';

export default {
  components: {
    Box,
    TableUserRoles,
  },
};
</script>

<style lang="scss"></style>
