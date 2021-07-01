<template>
  <!-- eslint-disable max-len -->
  <div class="shipping-detail">
    <div class="shipping-header">
      <label class="cursor-pointer text-14px text-labelAndTitle">
        Địa chỉ giao hàng
        <a href="javascript:void(0)" @click="openModal(modal1)" class="text-standardCMS ml-4 text-buttonAndURL">Sửa</a>
      </label>
<!--      <a href="javascript:void(0)" @click="openModal(modal1)" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>-->
    </div>
    <div class="mb-5 space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Nguyễn Ngọc Duy Anh</h3>
      <h3 class="cms-typo text-buttonAndURL text-13px">0969 786 519</h3>
      <p class="cms-typo text-menuItem text-13px">122 Thuong Dinh, Thanh Xuan, Ha Noi</p>
      <p class="cms-typo text-menuItem text-13px">Phường Nguyễn Du - Quận Thanh Xuân - Hà Nội</p>
    </div>

    <div class="cms-label text-14px mb-10px">
      <label class="cursor-pointer text-14px text-labelAndTitle">
        Nguồn đơn
        <a href="#" class="text-standardCMS ml-4 text-buttonAndURL">Sửa</a>
      </label>
<!--      <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>-->
    </div>
    <div class="mb-5 space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Lazada Tobias Shop</h3>
    </div>

    <div class="cms-label text-14px mb-10px">
      <label class="cursor-pointer text-14px text-labelAndTitle">
        Chi nhánh
        <a href="#" class="text-standardCMS ml-4 text-buttonAndURL">Sửa</a>
      </label>
<!--      <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>-->
    </div>
    <div class="mb-5 space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">Chi nhánh mặc định</h3>
    </div>

    <div class="cms-label text-14px mb-10px">
      <label class="cursor-pointer text-14px text-labelAndTitle">
        Ghi chú đơn hàng
        <a href="javascript:void(0)" @click="openModalTextarea('Sửa ghi chú đơn hàng', noteContent)" class="text-standardCMS ml-4 text-buttonAndURL">Sửa</a>
      </label>
<!--      <a href="javascript:void(0)" @click="openModalTextarea('Sửa ghi chú đơn hàng', noteContent)" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>-->
    </div>
    <div class="space-y-1">
      <h3 class="cms-typo text-menuItem text-13px">{{ noteContent }}</h3>
    </div>
    <InlineTags :option-data="this.optionDataTags"/>
  </div>
</template>

<script>
import InlineTags from '@/components/client/InlineTags.vue';
import ModalEditCustomerAddress from "@/components/client/ModalEditCustomerAddress";
import ModalTextarea from "@/components/client/ModalTextarea";

export default {
  components: {
    InlineTags,
  },
  data() {
    return {
      optionDataTags: [
        {
          name: 'Sale 30/4',
          closeTag: true,
        },
      ],
      modal1: ModalEditCustomerAddress,
      noteContent: 'Yêu cầu giao đúng màu và kiểm trả kỹ trước khi giao tránh đổi trả'
    };
  },
  methods: {
    openModal(modal, width=720) {
      const options = {
        class: 'cms-modal modal-md',
      };
      const style = {
        width: width, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(modal, options, style, events);
    },
    openModalTextarea (label, content, placeholder, width=720) {
      const styles = {
        classes: 'cms-modal modal-md'
      }

      const data = {
        label: label,
        content: content,
        placeholder: placeholder,
      }

      const options = {
        width: width, height: 'auto', shiftX: 0, adaptive: true
      }
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close')
      }

      this.$modal.show(ModalTextarea, { ...data }, { ...options, ...styles }, events)
    }
  }
};
</script>

<style lang="scss">
  .shipping {
    &-header {
      @apply font-lato font-medium text-13px mb-5 relative;
    }
  }
</style>
