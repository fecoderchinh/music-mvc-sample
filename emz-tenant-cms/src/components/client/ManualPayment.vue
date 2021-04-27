<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Thanh toán thủ công</h3>
        <p class="cms-typo text-14px text-menuItem mt-2">Bạn có thể tạo các hình thức thanh toán khác ngoài các phương thức online.</p>
      </div>
      <div class="col-span-3 sm:col-span-6">
        <BoxPartner connectButton="#">
          <template slot="label">Chỉnh sửa</template>
          <div class="grid grid-cols-6 gap-5" slot="content">
            <div class="col-span-6">
              <div class="cms-label text-14px">
                <label for="check-stock" class="cursor-pointer text-14px text-labelAndTitle">
                  Thanh toán khi giao hàng
                </label>
                <CheckType
                  main-class="absolute top-0 right-0 sm:ml-0 rounded-checkbox no-mr"
                  id="check-stock"
                  checked>
                  <template slot="text"><h3 class="ml-2">Đang sử dụng</h3></template>
                </CheckType>
              </div>
            </div>
            <div class="col-span-6">
              <p class="cms-typo text-14px text-menuItem">
                Bạn chỉ phải thanh toán khi nhận được hàng
              </p>
            </div>
          </div>
        </BoxPartner>
      </div>
      <div class="col-span-3 sm:col-span-6">
        <BoxPartner connectButton="#">
          <template slot="label">Chỉnh sửa</template>
          <div class="grid grid-cols-6 gap-5" slot="content">
            <div class="col-span-6">
              <div class="cms-label text-14px">
                <label for="check-stock" class="cursor-pointer text-14px text-labelAndTitle">
                  Thanh toán chuyển khoản
                </label>
                <CheckType
                  main-class="absolute top-0 right-0 sm:ml-0 rounded-checkbox disabled no-mr"
                  id="check-stock"
                  checked>
                  <template slot="text"><h3 class="ml-2">Ngừng sử dụng</h3></template>
                </CheckType>
              </div>
            </div>
            <div class="col-span-6">
              <p class="cms-typo text-14px text-menuItem">
                Vietcombank - Số tài khoản 302131315615545. Ghi rõ lý do thanh toán
              </p>
            </div>
          </div>
        </BoxPartner>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import BoxPartner from '@/components/client/BoxPartner.vue';
import CheckType from '@/components/client/CheckType.vue';

export default {
  components: {
    Box,
    BoxPartner,
    CheckType,
  },
};
</script>

<style lang="scss"></style>
