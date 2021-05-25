<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6 md:col-span-2">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">Quản lý Menu</label>
        </div>
        <div class="w-full">
          <ul class="list-disc list-outside space-y-1 pl-5">
            <li class="text-menuItem text-13px relative">
              Menu và danh sách liên kết giúp khách hàng duyệt web của bạn dễ dàng hơn.
            </li>
            <li class="text-menuItem text-13px relative">
              Bạn có thể áp dụng chúng cho giao diện của bạn trong Chỉnh sửa giao diện.
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-6 md:col-span-4">
        <TableMenuSettings class="mt-3"/>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import TableMenuSettings from "@/components/client/TableMenuSettings";

export default {
  components: {
    TableMenuSettings,
    Box,
  },
  data() {
    return {
      myOptions: [
        'Tất cả khách hàng',
        'Khách đã mua hàng',
        'Khách có hàng trong giỏ hàng',
        'Khách chưa mua hàng',
        'Khách hàng thân thiết ',
      ],
    };
  },
};
</script>

<style lang="scss"></style>
