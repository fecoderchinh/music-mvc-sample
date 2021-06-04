<template>
  <!-- eslint-disable max-len -->
  <div class="theme-detail">

    <TFeatured class="xl:pt-0 lg:pt-30px md:pt-5 sm:pt-5" :slideData="sData"/>

    <TContainer class="md:my-10 sm:my-5">
      <div class="grid grid-cols-6 gap-5" slot="content">
        <div class="col-span-4 sm:col-span-6">
          <TDetail/>
        </div>
      </div>
    </TContainer>

    <THeader class="pt-10">
      <div class="px-5" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">
          Theme đã xem
        </h1>
      </div>
    </THeader>

    <TList class="mt-5" :themeList="tData"/>

    <THeader class="pt-10">
      <div class="px-5" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">
          Các mẫu theme nổi bật
        </h1>
      </div>
    </THeader>

    <TList class="my-5" :themeList="tData"/>

  </div>
</template>

<script>
import TFeatured from '@/components/theme/TFeatured.vue';
import TContainer from '@/components/theme/TContainer.vue';
import TDetail from '@/components/theme/TDetail.vue';
import THeader from '@/components/theme/THeader.vue';
import TList from '@/components/theme/TList.vue';


export default {
  components: {
    TFeatured,
    TContainer,
    TDetail,
    THeader,
    TList
  },
  data() {
    return {
      sData: [
        {
          desktopImg: 'https://picsum.photos/670/380',
          mobileImg: 'https://picsum.photos/220/340',
          color: 'Red',
          code: 'bg-cmsOrange',
        },
        {
          desktopImg: 'https://picsum.photos/670/380',
          mobileImg: 'https://picsum.photos/220/340',
          color: 'Green',
          code: 'bg-cmsGreen',
        },
        {
          desktopImg: 'https://picsum.photos/670/380',
          mobileImg: 'https://picsum.photos/220/340',
          color: 'Blue',
          code: 'bg-buttonAndURL',
        },
      ],
      tData: [
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '123',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: '234',
        }
      ],
    };
  },
};
</script>
