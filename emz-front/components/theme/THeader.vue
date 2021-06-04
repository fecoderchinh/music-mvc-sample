<template>
  <!-- eslint-disable max-len -->
  <div class="theme-header cms-typo">
    <TContainer>
      <slot name="content" slot="content"></slot>
    </TContainer>
  </div>
</template>

<script>
import TContainer from './TContainer.vue';

export default {
  components: {
    TContainer,
  },
};
</script>
