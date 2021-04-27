<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
      <a href="/dashboard/settings" slot="content">Cài đặt</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Gói dịch vụ</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <Box>
          <template slot="content">
            <div class="cms-typo text-labelAndTitle mb-5">
              <h3 class="text-xl">Các gói dịch vụ đang sử dụng</h3>
              <p class="text-14px text-menuItem">
                Thông tin về các gói dịch vụ hiện tại bạn đang sử dụng
              </p>
            </div>
            <TablePackage/>
          </template>
        </Box>

        <Box>
          <template slot="content">
            <PricingRadio/>
            <PricingBlock class="mt-30px" :option-data="pricingData"/>
          </template>
        </Box>

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import Box from '@/components/client/Box.vue';
import PricingRadio from '@/components/client/PricingRadio.vue';
import PricingBlock from '@/components/client/PricingBlock.vue';

import TablePackage from '@/components/client/TablePackage.vue';

export default {
  components: {
    PricingRadio,
    PricingBlock,
    Breadcrumb,
    Header,
    Box,
    TablePackage,
  },
  data() {
    return {
      pricingData: [
        {
          row2: 'Emz Fly',
          row3: 'Bắt đầu kinh doanh nhỏ',
          row4: '199.000đ/ tháng',
          row5: '99',
          row6: 'Giảm 1.200.000đ',
          row7: 'Bao gồm những tính năng quan trọng',
          row8: [
            '1 website bán hàng',
            'Tối ưu SEO và Responsive',
            'Bán hàng online qua website',
            'Bán hàng tại cửa hàng',
            'Tài nguyên mức thấp',
            'Hơn 100 tính năng bán hàng cao cấp',
          ],
          row9: 'Gói đang dùng',
        },
        {
          row1: 'Gói phổ biến',
          row2: 'Emz Fly',
          row3: 'Bắt đầu kinh doanh nhỏ',
          row4: '199.000đ/ tháng',
          row5: '99',
          row6: 'Giảm 1.200.000đ',
          row7: 'Bao gồm những tính năng quan trọng',
          row8: [
            '1 website bán hàng',
            'Tối ưu SEO và Responsive',
            'Bán hàng online qua website',
            'Bán hàng tại cửa hàng',
            'Tài nguyên mức thấp',
            'Hơn 100 tính năng bán hàng cao cấp',
          ],
        },
        {
          row2: 'Emz Fly',
          row3: 'Bắt đầu kinh doanh nhỏ',
          row4: '199.000đ/ tháng',
          row5: '99',
          row6: 'Giảm 1.200.000đ',
          row7: 'Bao gồm những tính năng quan trọng',
          row8: [
            '1 website bán hàng',
            'Tối ưu SEO và Responsive',
            'Bán hàng online qua website',
            'Bán hàng tại cửa hàng',
            'Tài nguyên mức thấp',
            'Hơn 100 tính năng bán hàng cao cấp',
          ],
        },
      ],
    };
  },
};
</script>
