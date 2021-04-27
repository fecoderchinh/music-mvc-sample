<template>
  <!-- eslint-disable max-len -->
  <div class="theme-categories">

    <THeader class="bg-cmsLight py-10">
      <div class="lg:px-0 md:px-5 sm:px-5" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">Thời trang - Trang sức</h1>
        <p class="text-menuItem text-lg mt-15px">Bộ sưu tập những mẫu theme về thời trang trang sức mới nhất</p>
      </div>
    </THeader>

    <TList class="my-5" :themeList="tData"/>

  </div>
</template>

<script>
import THeader from '@/components/theme/THeader.vue';
import TList from '@/components/theme/TList.vue';

export default {
  components: {
    THeader,
    TList,
  },
  data() {
    return {
      tData: [
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '/store/detail',
        },
      ],
    };
  },
};
</script>
