<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Cài đặt hỗ trợ quảng cáo</h3>
      </div>
      <div class="col-span-3 sm:col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label for="modal-ga" class="select-none cursor-pointer">Google Analytics</label>
          <p class="cms-typo text-14px text-menuItem mt-5px">Nhập mã Google Analytics để bạn có thể theo dõi các thống kê về truy cập của website.</p>
        </div>
        <div class="w-full">
          <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Nhập mã Google Analytics"></textarea>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label for="modal-fp" class="select-none cursor-pointer">Facebook Pixel</label>
          <p class="cms-typo text-14px text-menuItem mt-5px">Facebook Pixel giúp bạn tạo chiến dịch quảng cáo để tìm khách hàng mới.</p>
        </div>
        <div class="w-full">
          <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem" placeholder="Nhập mã Facebook Pixel"></textarea>
        </div>
      </div>
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Điều khoản hoàn trả, sử dụng, bảo mật</h3>
      </div>
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label for="modal-hoantra" class="select-none cursor-pointer">Chính sách hoàn trả</label>
          <CheckType
            main-class="ml-0 no-mr md:absolute sm:mt-10px top-0 right-0"
            id="check-usetemplate1"
            checked>
            <template slot="text"><h3 class="ml-2">Sử dụng mẫu</h3></template>
          </CheckType>
        </div>
        <div class="w-full">
          <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"></textarea>
        </div>
      </div>
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label for="modal-sudung" class="select-none cursor-pointer">Điều khoản sử dụng</label>
          <CheckType
            main-class="ml-0 no-mr md:absolute sm:mt-10px top-0 right-0"
            id="check-usetemplate2">
            <template slot="text"><h3 class="ml-2">Sử dụng mẫu</h3></template>
          </CheckType>
        </div>
        <div class="w-full">
          <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"></textarea>
        </div>
      </div>
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label for="modal-baomat" class="select-none cursor-pointer">Chính sách bảo mật</label>
          <CheckType
            main-class="ml-0 no-mr md:absolute sm:mt-10px top-0 right-0"
            id="check-usetemplate2"
            checked>
            <template slot="text"><h3 class="ml-2">Sử dụng mẫu</h3></template>
          </CheckType>
        </div>
        <div class="w-full">
          <textarea class="bg-white h-16 w-full px-3 py-2 rounded border text-sm focus:outline-none text-14px font-lato text-menuItem"></textarea>
        </div>
      </div>
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <h3 class="cms-typo text-lg">Cài đặt khác</h3>
        </div>
        <ul class="list-none">
          <li class="md:inline-flex sm:block md:mr-24">
            <CheckType
                main-class="ml-0 no-mr"
                id="check-khac1">
                <template slot="text"><h3 class="ml-2">Ẩn sản phẩm khi hết hàng</h3></template>
              </CheckType>
          </li>
          <li class="md:inline-flex sm:block md:mr-24">
            <CheckType
                main-class="ml-0 no-mr"
                id="check-khac2" checked>
                <template slot="text"><h3 class="ml-2">Thông báo khi có bình luận mới</h3></template>
              </CheckType>
          </li>
          <li class="md:inline-flex sm:block md:mr-24">
            <CheckType
                main-class="ml-0 no-mr"
                id="check-khac3" checked>
                <template slot="text"><h3 class="ml-2">Tự động lưu trữ đơn hàng khi đã thanh toán và đã giao hàng</h3></template>
              </CheckType>
          </li>
        </ul>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import CheckType from '@/components/client/CheckType.vue';

export default {
  components: {
    Box,
    CheckType,
  },
};
</script>

<style lang="scss"></style>
