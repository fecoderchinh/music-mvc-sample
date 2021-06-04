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

    <TList :themeList="tData"/>
    <TList :themeList="tData"/>
    <TList :themeList="tData"/>

    <ThemeCategoryGrid :themeCategories="cData"/>
    <hr class="my-6"/>
  </div>
</template>

<script>

import ThemeTop from '~/components/theme/ThemeTop'
import ThemeGrid from '~/components/theme/ThemeGrid'
import ThemeCategoryGrid from '~/components/theme/ThemeCategoryGrid'
import TList from '@/components/theme/TList.vue';

export default {
  layout: "theme",
  components: {
    ThemeTop,
    ThemeGrid,
    ThemeCategoryGrid,
    TList
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
          hrefDetail: '/theme/123',
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
          hrefDetail: '/theme/234',
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
          hrefDetail: '/theme/345',
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
          hrefDetail: 'abc',
        },
        {
          img: 'https://picsum.photos/270/340',
          name: '2! Style',
          style: '3 styles',
          newPrice: '399,000đ',
          oldPrice: '1,500,000đ',
          hrefPreview: '#',
          hrefDetail: 'abcd',
        },
        
      ],
      cData: [
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Thời Trang',
        },
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Mỹ Phẩm',
        },
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Công Nghệ',
        },
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Thực Phẩm',
        },
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Nội Thất',
        },
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Gia Dụng',
        },
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Văn Phòng Phẩm',
        },
        {
          href: '/store/category',
          img: 'https://picsum.photos/270/180',
          name: 'Thủ Công Mỹ Nghệ',
        },
      ],
    }
  }
};
</script>

<style>
</style>
