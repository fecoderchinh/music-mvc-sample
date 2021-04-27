<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4 relative">
        <!-- box title -->
        <Header :wideHeader="true">
          <template slot="title">
            <h1>Tổng quan báo cáo</h1>
          </template>
        </Header>
        <!-- end box title -->
        <div class="w-full md:absolute top-0 right-0">
          <div class="grid grid-cols-3 gap-5 md:flex justify-end">
            <div class="col-span-1 sm:col-span-3">
              <SelectOption :option-data="this.optionDataSelect1"/>
            </div>
            <div class="col-span-1 sm:col-span-3 mb-5">
              <datepicker/>
            </div>
          </div>
        </div>
        <ReportChartjs />
      </div>
      <div class="col-span-6 xl:col-span-2">
        <WidgetReport/>
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import ReportChartjs from '@/views/client/ReportChartjs.vue';
import Datepicker from '@/components/client/Datepicker.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import WidgetReport from '@/components/client/WidgetReport.vue';

export default {
  components: {
    WidgetReport,
    SelectOption,
    Datepicker,
    ReportChartjs,
    Header,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Lọc theo ngày' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
