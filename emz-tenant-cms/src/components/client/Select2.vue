<template>
  <!-- eslint-disable max-len -->
  <div class="cms-select2">
    <Select2
      class="flex flex-col"
      v-model="myValue"
      :options="optionData"
      :settings="settings"
      @change="myChangeEvent($event)"
      @select="mySelectEvent($event)"
      style="width: 100%"
      :placeholder="placeholder" />
      <TagInput v-model="myValue" v-if="settings.multiple && myValue" placeholder=""/>
  </div>
</template>
<script>
import Select2 from 'v-select2-component';
import TagInput from '@/components/client/TagInput.vue';

export default {
  // declare Select2Component
  // eslint-disable max-len, no-console
  components: {
    Select2,
    TagInput,
  },
  props: {
    optionData: Array,
    placeholder: {
      type: String,
      default: 'Tìm kiếm khách hàng'
    },
    settings: {
      type: Array,
      default: () => ({
        multiple: true
      })
    }
  },
  data() {
    return {
      myValue: '',
      myOptions: ['op1', 'op2', 'op3'], // or [{id: key, text: value}, {id: key, text: value}]
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    myChangeEvent(val) {
      // console.log(val);
    },
    // eslint-disable-next-line no-unused-vars
    mySelectEvent({ id, text }) {
      // console.log({ id, text });
    },
  },
};
</script>

<style lang="scss">
.cms-select2 {
  &.center-placeholder {
    .select2 {
      &-search {
        &__field {
          &::placeholder {
            @apply text-center;
          }
        }
      }
    }
  }
  .select2 {
    &-search {
      @apply text-14px;
    }
    &-container--default, &-selection--multiple {
      @apply cms-typo text-base border-cmsGray w-full min-h-10 #{!important};
      padding-top: 4px;
      &:hover, &:focus {
        @apply border-buttonAndURL #{!important};
      }
    }
    &-container--default {
      &.select2-container--focus {
        .select2-selection--multiple {
          @apply border-buttonAndURL #{!important};
        }
      }
    }
    &-selection__choice {
      @apply bg-sidebarHover border-0 inline-flex items-center #{!important};
      @apply text-13px text-menuItem #{!important};
      &__remove {
        @apply inline-flex justify-end order-last text-xl ml-2 #{!important};
      }
    }
  }
}
.select2-container--default {
  .select2-results__option {
    @screen md {
      @apply px-5 text-14px;
    }
  }
  .select2-results__option--highlighted[aria-selected],
  .select2-results__option[aria-selected=true] {
    @apply bg-sidebarHover text-menuItem #{!important};
  }
  @apply text-menuItem #{!important};
}
</style>
