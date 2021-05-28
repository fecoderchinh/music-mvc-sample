<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
      <a href="/dashboard/settings" slot="content">Cài đặt</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Cài đặt chung</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <SiteInfo />
        <ContactDetails/>
        <AdConfig />
        <div class="w-full no-pb">
          <div class="grid-cols relative">
            <div class="md:absolute top-0 right-0">
              <ul class="list-none">
                <li class="inline mr-8 sm:mr-5 sm:mb-3">
                  <Button button-class="cms-button cms-button-white">
                    <template slot="name">
                      Hủy
                    </template>
                  </Button>
                </li>
                <li class="inline">
                  <Button button-class="cms-button cms-button-blue">
                    <template slot="name">
                      Lưu
                    </template>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer class="text-center"/>
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import SiteInfo from '@/components/client/SiteInfo.vue';
import ContactDetails from "@/components/client/ContactDetails";
import AdConfig from '@/components/client/AdConfig.vue';
import Button from '@/components/client/Button.vue';
import Footer from '@/components/client/Footer.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    SiteInfo,
    ContactDetails,
    AdConfig,
    Button,
    Footer,
  },
};
</script>
