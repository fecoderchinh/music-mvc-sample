<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <OrderCOD />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import OrderCOD from '@/components/client/OrderCOD.vue';

export default {
  components: {
    OrderCOD,
  },
};
</script>
