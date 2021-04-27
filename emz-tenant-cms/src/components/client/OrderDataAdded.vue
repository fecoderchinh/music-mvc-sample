<template>
  <!-- eslint-disable max-len -->
  <div class="w-full mb-5">
    <div class="grid grid-cols-6 gap-5 text-right">
      <div class="col-span-3">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <h3>Giá</h3>
        </div>
      </div>
      <div class="col-span-3">
        <div class="cms-label text-14px mb-3 text-menuItem">
          <h3>123,467,000đ</h3>
        </div>
      </div>
      <div class="col-span-3">
        <ModalAddPromo/>
      </div>
      <div class="col-span-3">
        <h3 class="font-lato font-medium text-14px text-buttonAndURL">12,000đ</h3>
      </div>
<!--      <div class="col-span-3">-->
<!--        <ModalAddTransportFee/>-->
<!--      </div>-->
<!--      <div class="col-span-3">-->
<!--        <h3 class="font-lato font-medium text-14px text-buttonAndURL">-</h3>-->
<!--      </div>-->
      <div class="col-span-3">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <h3>Tạm tính</h3>
        </div>
      </div>
      <div class="col-span-3">
        <div class="cms-label text-14px mb-3">
          <h3>123,446,000đ</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ModalAddTransportFee from './ModalAddTransportFee.vue';
import ModalAddPromo from './ModalAddPromo.vue';

export default {
  name: 'OrderDataAdded',
  components: {
    // ModalAddTransportFee,
    ModalAddPromo,
  },
};
</script>

<style scoped>

</style>
