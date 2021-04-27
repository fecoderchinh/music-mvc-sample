<template>
  <!-- eslint-disable max-len -->
  <div class="w-full relative mt-6">
    <SiteUserSection />
    <div class="grid grid-cols-6 gap-x-45px gap-y-10 mt-10">
      <div class="lg:col-span-2 md:col-span-3 sm:col-span-6" v-for="(data, index) in siteData" :key="index">
        <SiteItem
          :domain="data.domain"
          :thumb="data.thumb"
          :orderCount="data.orderCount"
          :dashboardURL="data.dashboardURL"
          :optionData="data.optionData"
          :expState="data.expState"
          :colorState="data.colorState"
        />
      </div>
      <div class="lg:col-span-2 md:col-span-3 sm:col-span-6">
        <Box class="group">
          <a href="/auth/create" slot="content">
            <AddNewItem class="h-150px max-h-150px">
              <template slot="content">
                <span class="cms-typo text-base text-cmsLightGreen">Tạo thêm website mới</span>
              </template>
            </AddNewItem>
          </a>
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
import SiteUserSection from '@/components/site-manager/SiteUserSection.vue';
import SiteItem from '@/components/site-manager/SiteItem.vue';
import Box from '@/components/client/Box.vue';
import AddNewItem from '@/components/client/AddNewItem.vue';

export default {
  components: {
    SiteUserSection,
    SiteItem,
    Box,
    AddNewItem,
  },
  data() {
    return {
      siteData: [
        {
          domain: 'ThienPhong.emz.vn',
          thumb: 'https://picsum.photos/430/150',
          orderCount: '15 đơn hàng mới',
          dashboardURL: '#',
          optionData: [
            {
              component: 'EyeSVG',
              link: '#',
              name: 'Xem Website',
            },
            {
              component: 'EllipseSVG',
              link: '#',
              name: 'Nâng cấp',
            },
            {
              component: 'EllipseSVG',
              link: '#',
              name: 'Sửa giao diện',
            },
          ],
        },
        {
          expState: 'Còn 30 ngày. Vui lòng gia hạn ngay',
          colorState: 'cmsOrange',
          domain: 'iStore.emz.vn',
          thumb: 'https://picsum.photos/430/150',
          orderCount: '6 đơn hàng mới',
          dashboardURL: '#',
          optionData: [
            {
              component: 'EyeSVG',
              link: '#',
              name: 'Xem Website',
            },
            {
              component: 'EllipseSVG',
              link: '#',
              name: 'Nâng cấp',
            },
            {
              component: 'EllipseSVG',
              link: '#',
              name: 'Sửa giao diện',
            },
          ],
        },
        {
          expState: 'Đã hết hạn. Vui lòng gia hạn ngay',
          colorState: 'cmsRed',
          domain: 'Apple.emz.vn',
          thumb: 'https://picsum.photos/430/150',
          dashboardURL: '#',
          optionData: [
            {
              component: 'EyeSVG',
              link: '#',
              name: 'Xem Website',
            },
            {
              component: 'EllipseSVG',
              link: '#',
              name: 'Nâng cấp',
            },
            {
              component: 'EllipseSVG',
              link: '#',
              name: 'Sửa giao diện',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
