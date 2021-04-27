<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Gửi lời nhắn
      </h3>
    </div>

    <div class="w-full" slot="body">

      <ModalSendMsg class="no-p no-b"/>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-blue">
          <template slot="name">
            Gửi tin nhắn
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import ModalSendMsg from '@/components/client/ModalSendMsg.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    ModalSendMsg,
    Button,
  },
};
</script>

<style lang="scss"></style>
