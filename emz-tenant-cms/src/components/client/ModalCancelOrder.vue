<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Hủy đơn hàng
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <p class="cms-typo text-15px text-menuItem">Bạn nên hủy đơn hàng khi thấy đơn hàng có vấn đề, khi khách hàng thay đổi quyết định hoặc khi kho hàng hết sản phẩm. Thao tác này không thể khôi phục.</p>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Lý do hủy đơn hàng</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px pb-3 border-b text-labelAndTitle">
            <label class="select-none cursor-pointer">Hoàn trả</label>
          </div>
          <div class="w-full">
            <TableWithForm class="mb-5"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="grid grid-cols-2 gap-5">

            <div class="col-span-1 sm:col-span-2">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label class="select-none cursor-pointer">Trạng thái giao hàng</label>
              </div>
              <div class="w-full select-none">
                <SelectOption :option-data="this.optionDataSelect2"/>
              </div>
            </div>

            <div class="col-span-1 sm:col-span-2">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label class="select-none cursor-pointer">Trạng thái thu hộ</label>
              </div>
              <div class="w-full select-none">
                <SelectOption :option-data="this.optionDataSelect3"/>
              </div>
            </div>

          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="grid grid-cols-2 gap-5">

            <div class="col-span-1 md:text-right">
              <h3 class="cms-typo text-14px text-menuItem">Tổng tiền</h3>
            </div>
            <div class="col-span-1 text-right">
              <h3 class="cms-typo text-14px text-menuItem">0đ</h3>
            </div>

            <div class="col-span-1 md:text-right">
              <h3 class="cms-typo text-14px text-menuItem">Phí vận chuyển</h3>
            </div>
            <div class="col-span-1 text-right">
              <h3 class="cms-typo text-14px text-buttonAndURL">—</h3>
            </div>

            <div class="col-span-1 md:text-right">
              <h3 class="cms-typo text-14px text-labelAndTitle">Tiền hoàn trả</h3>
            </div>
            <div class="col-span-1 text-right">
              <h3 class="cms-typo text-14px text-labelAndTitle">0đ</h3>
            </div>

          </div>
        </div>

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Không hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-orange">
          <template slot="name">
            Hủy đơn hàng
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import Button from '@/components/client/Button.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import TableWithForm from '@/components/client/TableWithForm.vue';

export default {
  components: {
    Modal,
    Button,
    SelectOption,
    TableWithForm,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Khách hàng thay đổi hoặc yêu cầu hủy đơn' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
      optionDataSelect2: [
        { name: 'Chờ lấy hàng' },
        { name: 'Đang giao hàng' },
        { name: 'Đã giao hàng' },
        { name: 'Chờ chuyển hoàn' },
        { name: 'Đã chuyển hoàn' },
        { name: 'Hủy giao hàng' },
      ],
      optionDataSelect3: [
        { name: 'Chưa thu tiền' },
        { name: 'Đã thu tiền' },
        { name: 'Đã nhận tiền' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
