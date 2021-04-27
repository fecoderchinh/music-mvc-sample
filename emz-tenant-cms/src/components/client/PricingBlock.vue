<template>
  <!-- eslint-disable max-len -->
  <div class="grid grid-cols-6 gap-5 items-end">
    <div class="xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
      <div class="pricing-block__tag" v-if="data.row1">
        <span class="text-buttonAndURL">{{ data.row1 }}</span>
      </div>
      <div class="pricing-block__content" :class="data.row1 ? 'border-buttonAndURL' : 'border-menuIcon'">
        <div class="pricing-block__content-header mb-5">
          <h2 class="text-3xl text-labelAndTitle">{{ data.row2 }}</h2>
          <p class="text-base text-menuItem">{{ data.row3 }}</p>
        </div>
        <div class="pricing-block__content-price mb-5">
          <h3>
            <span class="text-lg text-menuItem line-through">{{ data.row4 }}</span>
            <br>
            <span class="text-3xl text-labelAndTitle">{{ data.row5 }}</span>
            <span class="text-14px mr-5 text-labelAndTitle">.000đ /tháng</span>
            <span class="text-14px text-menuItem">{{ data.row6 }}</span>
          </h3>
        </div>
        <div class="pricing-block__content-list">
          <h3 class="text-14px text-labelAndTitle mb-5">{{ data.row7 }}</h3>
          <ul class="list-inside text-14px text-menuItem">
            <li class="list-disc first:mt-0 mt-15px" v-for="(iData, iIndex) in data.row8" :key="iIndex">
              <span>{{ iData }}</span>
            </li>
          </ul>
          <div class="w-full text-center mt-30px">
            <Button :button-class="data.row9 ? 'cms-button cms-button-gray' : 'cms-button cms-button-blue' ">
              <template slot="name">
                <span class="text-white" v-if="data.row9">
                  {{ data.row9 }}
                </span>
                <span class="text-white" v-else>Nâng cấp</span>
              </template>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    optionData: Array,
  },
};
</script>

<style lang="scss">
.pricing-block {
  &__tag {
    @apply cms-typo w-full p-15px border-dotted border-2 border-b-0 border-buttonAndURL text-center;
  }
  &__content {
    @apply cms-typo w-full pt-30px pb-5 px-5 border-dotted border-2;
    &-header, &-price{
      @apply w-full text-center;
    }
    &-price {
      line-height: .8;
    }
    &-list {
      @apply w-full text-left;
      @screen md {
        @apply px-10;
      }
    }
  }
}
</style>
