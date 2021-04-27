<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-auto sm:flex-col">
    <div class="cms-typo inline-flex items-center text-2xl text-labelAndTitle mr-12">
      <h1>Vô Ảnh Long</h1>
    </div>
    <div class="inline-flex items-center"><ListItemWithIcon :option-data="this.listItemData" /></div>
  </div>
</template>

<script>
import ListItemWithIcon from '@/components/client/ListItemWithIcon.vue';

export default {
  components: {
    ListItemWithIcon,
  },
  data() {
    return {
      listItemData: [
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Tặng Voucher',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Tặng giảm giá',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Gửi tin nhắn',
        },
        {
          component: 'EllipseSVG',
          componentClass: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
          link: '#',
          name: 'Xem giỏ hàng',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
