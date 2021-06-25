<template>
  <Widget>
    <template slot="title">
      <label class="cursor-pointer">Ảnh đại diện</label>
    </template>
    <template slot="content">
      <ImageUploader :image="image" @click="$emit('click')"/>
    </template>
  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import ImageUploader from '@/components/client/ImageUploader.vue';

export default {
  components: {
    Widget,
    ImageUploader,
  },
  props: ['image']
};
</script>
