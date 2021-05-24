<template>
  <!-- eslint-disable max-len -->
  <Box>
    <div class="grid grid-cols-6 gap-5" slot="content">
      <div class="col-span-6">
        <h3 class="cms-typo text-lg">Thanh toán thủ công</h3>
        <p class="cms-typo text-14px text-menuItem mt-2">Bạn có thể tạo các hình thức thanh toán khác ngoài các phương thức online.</p>
      </div>
      <div class="col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
        <BoxPartner :connectButton="data.connectURL">
          <div slot="content" class="relative text-standardCMS">
            <CheckType
              main-class="md:absolute sm:mb-3 top-0 right-0 sm:ml-0 rounded-checkbox no-mr"
              :id="'check'+index"
              :checked="data.status">
              <template slot="text"><h3 class="ml-2">{{ statusText(data.status) }}</h3></template>
            </CheckType>
            <h3 class="text-labelAndTitle"><strong>{{ data.connectName }}</strong></h3>
            <h3 class="text-menuItem mt-2">{{ data.content }}</h3>
          </div>
          <template slot="label">Chỉnh sửa</template>
        </BoxPartner>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import BoxPartner from '@/components/client/BoxPartner.vue';
import CheckType from '@/components/client/CheckType.vue';

// import ModalShipping from '@/components/client/ModalShipping.vue';

export default {
  components: {
    Box,
    BoxPartner,
    CheckType,
  },
  data() {
    return {
      optionData: [
        {
          status: true,
          connectURL: '#',
          connectName: 'Thanh toán khi giao hàng',
          content: 'Bạn chỉ phải thanh toán khi nhận được hàng',
        },
        {
          status: false,
          connectURL: '#',
          connectName: 'Thanh toán chuyển khoản',
          content: 'Vietcombank - Số tài khoản 302131315615545.  Ghi chú khi ck là mã đơn hàng',
        },
      ],
    };
  },
  methods: {
    // openModal() {
    //   const options = {
    //     class: 'cms-modal',
    //   };
    //   const style = {
    //     width: 600, height: 'auto', shiftX: 0.5, adaptive: true,
    //   };
    //   const events = {
    //     // opened: () => console.log('Opened'),
    //     closed: () => this.$emit('close'),
    //   };
    //
    //   this.$modal.show(ModalShipping, options, style, events);
    // },
    statusText(bool) {
      if (bool) return 'Đang sử dụng';
      return 'Ngừng sử dụng';
    },
  },
};
</script>

<style lang="scss"></style>
