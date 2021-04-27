<template>
  <!-- eslint-disable max-len -->
  <Box class="no-p no-mb">
    <div class="w-full" slot="content">
      <div class="p-5">
        <slot name="content">default content</slot>
      </div>
      <div class="border-t px-5 py-10px text-right">
        <Button :link="connectButton" button-class="cms-button cms-button-white" @click="$emit('onClickButton')">
          <template slot="name">
            <slot name="label">default label</slot>
          </template>
        </Button>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Box,
    Button,
  },
  props: {
    connectButton: String,
  },
};
</script>

<style lang="scss"></style>
