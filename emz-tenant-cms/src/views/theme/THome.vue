<template>
  <!-- eslint-disable max-len -->
  <div class="theme-home">

    <THeader class="bg-cmsLight pt-10 lg:pb-0 md:pb-10">
      <div class="lg:ml-64 lg:px-0 md:px-5 sm:px-5" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">Khám phá kho theme tuyệt đẹp</h1>
        <p class="text-menuItem text-lg mt-15px">Đẹp, chuyên nghiệp, chuẩn SEO, responsive. Hãy chọn theo cách của bạn!</p>
      </div>
    </THeader>

    <TSlider :slideData="sData"/>

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

    <TList class="mt-5" :themeList="tData"/>

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

    <TList class="mt-5" :themeList="tData"/>

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

    <TList class="mt-5" :themeList="tData"/>

    <THeader class="pt-10">
      <div class="md:px-5 sm:px-5 text-center" slot="content">
        <h1 class="text-cmsLightGreen text-3xl font-extrabold">
          Theo ngành hàng
          <span class="block font-normal text-base text-placeholderStyle">
            Khám phá và lựa chọn. Đơn giản là tốt nhất!
          </span>
        </h1>
      </div>
    </THeader>

    <TCategories class="my-5" :themeCategories="cData"/>

  </div>
</template>

<script>
import THeader from '@/components/theme/THeader.vue';
import TSlider from '@/components/theme/TSlider.vue';
import TList from '@/components/theme/TList.vue';
import TCategories from '@/components/theme/TCategories.vue';

export default {
  components: {
    THeader,
    TSlider,
    TList,
    TCategories,
  },
  data() {
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
          hrefDetail: '/store/detail',
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
          hrefDetail: '/store/detail',
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
          hrefDetail: '/store/detail',
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
    };
  },
};
</script>
