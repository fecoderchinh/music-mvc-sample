<template>
  <Box>
    <ul class="list-none" slot="content">
      <li class="inline mr-5">
        <h3 class="cms-typo text-14px text-menuItem inline mr-5">Chọn nhanh:</h3>
      </li>
      <li
        v-for="(data, index) in optionData" :key="index"
        :class="[
          'inline',
          index + 1 !== optionData.length ? 'mr-5' : null,
        ]">
        <a href="#" :class="[ 'cms-typo text-14px', 'text-'+data.color ]">{{ data.name }}</a>
      </li>
    </ul>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';

export default {
  components: {
    Box,
  },
  props: {
    optionData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
