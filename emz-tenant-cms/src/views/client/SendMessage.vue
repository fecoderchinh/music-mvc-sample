<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Gửi lời nhắn</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline">
            <Button @click="openModal" button-class="cms-button cms-button-blue">
              <template slot="name">
                Modal Gửi Msg
              </template>
            </Button>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <SendMessage />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import SendMessage from '@/components/client/SendMessage.vue';
import Button from '@/components/client/Button.vue';

import ModalSendMsgContent from '@/components/client/ModalSendMsgContent.vue';

export default {
  components: {
    Header,
    SendMessage,
    Button,
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal modal-md',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalSendMsgContent, options, style, events);
    },
  },
};
</script>
