<template>
  <!-- eslint-disable max-len -->
  <Box classes="relative no-mb no-b">
    <line-chart :chart-data="datacollection" :options="dataOptions" slot="content"/>
  </Box>
</template>

<script>
import LineChart from '@/components/client/LineChart.vue';
import Box from '@/components/client/Box.vue';

export default {
  components: {
    LineChart,
    Box,
  },
  data() {
    return {
      datacollection: {
        labels: ['19/12', '20/12', '21/12', '22/12', '23/12', '24/12', '25/12'],
        datasets: [
          {
            data: [5, 10, 5, 10, 30, 40, 50],
            label: 'Doanh thu',
            borderColor: '#f1493c',
            fill: false,
            lineTension: 0,
          },
          {
            data: [0, 0, 0, 0, 0, 0, 0],
            label: 'Lợi nhuận',
            borderColor: '#35b93f',
            fill: false,
            lineTension: 0,
          },
          {
            data: [1, 1, 1, 1, 1, 1, 1],
            label: 'Đơn hàng',
            borderColor: '#00b8f7',
            fill: false,
            lineTension: 0,
          },
          {
            data: [2, 2, 2, 2, 2, 2, 2],
            label: 'Đơn hoàn',
            borderColor: '#7e57c4',
            fill: false,
            lineTension: 0,
          },
          {
            data: [3, 3, 3, 3, 3, 3, 3],
            label: 'Khách hàng',
            borderColor: '#ffd600',
            fill: false,
            lineTension: 0,
          },
          {
            data: [4, 4, 4, 4, 4, 4, 4],
            label: 'Sản phẩm bán',
            borderColor: '#ff7200',
            fill: false,
            lineTension: 0,
          },
        ],
      },
      dataOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
          paddingBottom: 0,
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              offsetGridLines: true,
            },
            ticks: {
              beginAtZero: true,
              padding: 15,
            },
          }],
          yAxes: [{
            gridLines: {
              display: true,
              offsetGridLines: true,
            },
            ticks: {
              beginAtZero: false,
              padding: 15,
            },
          }],
        },
      },
    };
  },
};
</script>

<style scoped>

</style>
