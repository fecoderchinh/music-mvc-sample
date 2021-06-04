<template>

  <div class="">
    <div class="theme-home">
      <div class="theme-header cms-typo bg-cmsLight pt-10 lg:pb-0 md:pb-10">
        <div class="container">
          <div class="text-center">
            <h1 class="text-cmsLightGreen text-3xl font-extrabold">
              Khám phá kho theme tuyệt đẹp
            </h1>
            <p class="text-menuItem text-lg mt-15px">
              Đẹp, chuyên nghiệp, chuẩn SEO, responsive. Hãy chọn theo cách của
              bạn!
            </p>
          </div>
        </div>
      </div>
    </div>


    <ThemeTop :slideData="sData"/>
    <THeader class="pt-10">
      <div class="md:px-5 sm:px-5" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">
          Styles Hot
          <span class="md:ml-5 sm:block font-normal text-base text-placeholderStyle">
            Những theme đang rất được yêu thích
          </span>
        </h1>
      </div>
    </THeader>
    <TList :themeList="tData"/>

    <THeader class="pt-10">
      <div class="md:px-5 sm:px-5" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">
          Khuyên dùng cho bạn
          <span class="md:ml-5 sm:block font-normal text-base text-placeholderStyle">
            Những theme có thể phù hợp cho lĩnh vực của bạn
          </span>
        </h1>
      </div>
    </THeader>
    <TList :themeList="tData"/>

    <THeader class="pt-10">
      <div class="md:px-5 sm:px-5" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">
          Mới cập nhật
          <span class="md:ml-5 sm:block font-normal text-base text-placeholderStyle">
            Bộ sưu tập các theme mới nhất
          </span>
        </h1>
      </div>
    </THeader>
    <TList :themeList="tData"/>

    <ThemeCategoryGrid :themeCategories="cData"/>
    <hr class="my-6"/>
  </div>
</template>

<script>

import ThemeTop from '~/components/theme/ThemeTop'
import ThemeGrid from '~/components/theme/ThemeGrid'
import ThemeCategoryGrid from '~/components/theme/ThemeCategoryGrid'
import TList from '~/components/theme/TList.vue';
import THeader from '~/components/theme/THeader.vue';

export default {
  layout: "theme",
  components: {
    ThemeTop,
    ThemeGrid,
    ThemeCategoryGrid,
    TList,
    THeader
  },
  data(){
    return {
      sData: [
        {
          desktopImg: 'https://picsum.photos/670/380',
          mobileImg: 'https://picsum.photos/220/340',
          name: 'Emi Store',
          desc: 'Được thiết kế để bán hàng online nhanh chóng, nổi bật',
          style: '3 styles',
          newPrice: '499,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: 't3',
        },
        {
          desktopImg: 'https://picsum.photos/670/380',
          mobileImg: 'https://picsum.photos/220/340',
          name: 'Emi Store',
          desc: 'Được thiết kế để bán hàng online nhanh chóng, nổi bật',
          style: '3 styles',
          newPrice: '499,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: 't4',
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
          hrefDetail: 't1',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: 't2',
        },
        
      ],
      cData: [
        {
          href: 'c1',
          img: 'https://picsum.photos/270/180',
          name: 'Thời Trang',
        },
        {
          href: 'c2',
          img: 'https://picsum.photos/270/180',
          name: 'Mỹ Phẩm',
        }
      ],
    }
  }
};
</script>

<style>
</style>
