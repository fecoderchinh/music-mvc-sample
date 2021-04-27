<template>
  <!-- eslint-disable max-len -->
  <div class="grid grid-cols-6 gap-5">
    <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
      <h3 class="cms-typo text-lg">Giao diện hiện tại</h3>
      <div class="cms-typo text-14px text-menuItem mt-5">
        <p>
          Khách hàng sẽ thấy giao diện này khi họ xem website của bạn.
        </p>
        <ul class="list-outside mt-5 grid gap-10px pl-5">
          <li class="list-disc">
              Vào chức năng <b>Làm đẹp giao diện</b> để chỉnh sửa và tùy biến theme theo sở thích của bạn.
          </li>
          <li class="list-disc">
              Kết hợp với tùy biến menu trong chức năng <b>Quản lý menu</b> để website của bạn chuyên nghiệp hơn, dễ dùng hơn và phù hợp với mục đích mà bạn muốn hướng đến khách hàng.
          </li>
          <li class="list-disc">
              Truy cập vào <b>Kho giao diện</b> chứa hàng trăm giao diện khác, để cài đặt những giao diện bạn thích và sáng tạo tùy biến chúng đẹp hơn, tiện hơn.
          </li>
        </ul>
      </div>
      <div class="w-full mt-5 xl:text-center">
        <Button button-class="cms-button cms-button-blue">
          <template slot="name">
            Kho giao diện
          </template>
        </Button>
      </div>
    </div>
    <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6">
      <h3 class="cms-typo text-lg">Theme mặc định</h3>
      <div class="w-full mt-5 relative">
        <ul class="list-none cms-typo text-14px text-buttonAndURL">
          <li class="inline mr-3">
            <a href="#">Xem trên web</a>
          </li>
          <li class="inline mr-3">
            <a href="#">Đổi tên</a>
          </li>
          <li class="inline">
            <a href="#">Sao chép</a>
          </li>
        </ul>
        <Button class="md:absolute -top-10px right-0 sm:block sm:mt-3" button-class="cms-button cms-button-blue">
          <template slot="name">
            Làm đẹp giao diện
          </template>
        </Button>
      </div>
      <div class="w-full mt-5">
        <img src="https://picsum.photos/600/330" alt="" class="w-full">
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss"></style>
