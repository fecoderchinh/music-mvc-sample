<template>
  <!-- eslint-disable max-len -->
  <ul class="list-none">
    <li v-for="(data, index) in optionData" :key="index" class="inline-flex items-center mr-8">
      <component v-bind:is="data.component" :class="svgClass" />
      <a :href="data.link" @click="openModal(data.aModal)" :class="aClass">{{ data.name }}</a>
    </li>
  </ul>
</template>

<script>
import {
  EllipseSVG,
  AngleSVG,
  ArrowSVG,
  SearchSVG,
  QuestionOutlineSVG,
  InformationSVG,
  PlusSVG,
  AvatarSVG,
  FilterSVG,
  AccountCircleSVG,
  ALTSVG,
  LongArrowSVG,
  CalendarSVG,
  CheckboxSVG,
  CheckboxCircleSVG,
  CircleSVG,
  CloseSVG,
  GlobeWWWSVG,
  SixDotsSVG,
  CashSVG,
  CashFillSVG,
  DeleteSVG,
  QuestionSVG,
  MinusSVG,
  SquareRadiusSVG,
  TruckFillSVG,
  TruckSVG,
  TruckCashSVG,
  AddLibrarySVG,
  LocationSVG,
  NotifySVG,
  PaymentSVG,
  SettingSVG,
  EyeSVG,
  SquareSVG,
  MenubarSVG,
} from '../SVGs.vue';

export default {
  components: {
    EllipseSVG,
    AngleSVG,
    ArrowSVG,
    SearchSVG,
    QuestionOutlineSVG,
    InformationSVG,
    PlusSVG,
    AvatarSVG,
    FilterSVG,
    AccountCircleSVG,
    ALTSVG,
    LongArrowSVG,
    CalendarSVG,
    CheckboxSVG,
    CheckboxCircleSVG,
    CircleSVG,
    CloseSVG,
    GlobeWWWSVG,
    SixDotsSVG,
    CashSVG,
    CashFillSVG,
    DeleteSVG,
    QuestionSVG,
    MinusSVG,
    SquareRadiusSVG,
    TruckFillSVG,
    TruckSVG,
    TruckCashSVG,
    AddLibrarySVG,
    LocationSVG,
    NotifySVG,
    PaymentSVG,
    SettingSVG,
    EyeSVG,
    SquareSVG,
    MenubarSVG,
  },
  props: {
    svgClass: {
      type: String,
      default: 'w-4 h-4 mr-2 fill-menuIcon -mt-px',
    },
    aClass: {
      type: String,
      default: 'text-standardCMS text-buttonAndURL',
    },
    aModal: Object,
    optionData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    openModal(data) {
      if (!data) return;
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

      this.$modal.show(data, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
