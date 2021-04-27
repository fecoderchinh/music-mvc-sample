<template>
    <!-- eslint-disable max-len -->
    <div class="sticky top-0 z-40" v-if="somethingUnsaved">
        <NavbarUnsaved/>
    </div>
    <div class="sticky top-0 z-40" v-else>
        <NavbarDefault @toggle-sidebar="$emit('toggle-sidebar')"/>
    </div>
</template>

<script>
import NavbarDefault from './NavbarDefault.vue';
import NavbarUnsaved from './NavbarUnsaved.vue';

export default {
  components: {
    NavbarDefault,
    NavbarUnsaved,
  },
  computed: {
    somethingUnsaved() {
      let bool = false;

      if (this.$router.currentRoute.path === '/dashboard/order-added') bool = true;
      if (this.$router.currentRoute.path === '/dashboard/order-message') bool = true;
      if (this.$router.currentRoute.path === '/dashboard/order-note') bool = true;
      if (this.$router.currentRoute.path === '/dashboard/order-shipped') bool = true;
      if (this.$router.currentRoute.path === '/dashboard/product-create') bool = true;

      return bool;
    },
  },
};
</script>
