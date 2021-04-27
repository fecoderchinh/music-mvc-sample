<template>
  <div class="w-full" :class="mainClass">
    <slot name="content">
      <a href="#" class="text-standardCMS text-menuIcon inline-flex items-center">
        <QuestionSVG class="w-14px h-14px fill-menuIcon mr-2 inline" />
        Hướng dẫn type something
      </a>
    </slot>
  </div>
</template>

<script>
import {
  QuestionSVG,
} from '../SVGs.vue';

export default {
  components: {
    QuestionSVG,
  },
  props: {
    mainClass: String,
  },
};
</script>
