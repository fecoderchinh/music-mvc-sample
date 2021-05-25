<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Menu</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline">
            <Button @click="openModal" button-class="cms-button cms-button-blue">
              <template slot="name">
                Thêm Menu
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
        <MenuSettings />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import MenuSettings from "@/components/client/MenuSettings";
import Button from '@/components/client/Button.vue';
import MenuSettingsModalCreate from "@/components/client/MenuSettingsModalCreate";


export default {
  components: {
    Header,
    MenuSettings,
    Button,
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 986, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(MenuSettingsModalCreate, options, style, events);
    },
  },
};
</script>
