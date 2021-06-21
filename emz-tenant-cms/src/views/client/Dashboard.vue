<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <!-- eslint-disable max-len -->
            <div class="bg-white w-3/4 md:w-1/3 lg:w-64 fixed top-0 lg:pt-0 md:pt-16 sm:pt-16 md:left-0 h-screen lg:block border-r z-30 shadow overflow-hidden h-full" :class="onToggled ? '' : 'hidden'">
              <Sidebar />
              <a href="#" @click.self.prevent="onToggled = false" class="fixed inset-0 z-20" v-if="onToggled"></a>
            </div>

            <!-- eslint-disable max-len -->
            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="onToggled ? 'overlay' : ''" id="main-content">

                <Navbar v-on:toggle-sidebar="onToggleSidebarMethod" />

                <div class="p-5 bg-gray-100 container mx-auto min-h-screen">
                  <Loader :loading="false"/>
                    <router-view />
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import Sidebar from '@/components/client/Sidebar.vue';
import Navbar from '@/components/client/Navbar.vue';
import Loader from "@/components/Loader";

export default {
  name: 'Dashboard',
  components: {
    Loader,
    Sidebar,
    Navbar,
  },
  data() {
    return {
      onToggled: false,
    };
  },
  methods: {
    onToggleSidebarMethod() {
      /* eslint-disable no-console */
      console.log('clicked');
      this.onToggled = !this.onToggled;
    },
  },
};
</script>
