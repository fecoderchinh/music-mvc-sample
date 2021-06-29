<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" :showFooter="false">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 transform rotate-180 mr-3 inline"/>
            Thư viện ảnh đại diện
          </template>
        </Button>
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">
        <div class="col-span-1 sm:col-span-2" v-for="(data, index) in optionData" :key="index">
          <img :src="data" :alt="'img-00'+index">
        </div>
      </div>

    </div>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import Button from '@/components/client/Button.vue';

import {
  LongArrowSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    Button,
    LongArrowSVG,
  },
  data() {
    return {
      optionData: [
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',

        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',

        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',

        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',

        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',

        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
        'https://picsum.photos/90',
      ],
    };
  },
};
</script>

<style lang="scss"></style>
