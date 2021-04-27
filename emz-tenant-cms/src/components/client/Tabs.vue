<template>
  <!-- eslint-disable max-len -->
  <div class="cms-tabs" :class="mainClass">
    <div class="cms-tabs-header sm:flex-col">
      <slot name="tab-right"></slot>
      <ul class="cms-tabs-header-list sm:flex-col">
        <li
          class="cms-tabs-header-list-item"
          v-for="tab in tabs"
          :key="tab.tabId"
          v-bind:class="{
            'bg-white transition duration-400 tab--active': activeTab === tab.tabId
          }"
          v-on:click="switchTab(tab.tabId);"
        >
          <slot :name="tabHeadSlotName(tab.tabId)">{{ tab.tabName }} </slot>
        </li>
      </ul>
    </div>
    <div class="cms-tabs-body">
      <div class="tab-panel"><slot :name="tabPanelSlotName"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    initialTab: String,
    mainClass: String,
    tabs: Array,
  },
  data() {
    return {
      activeTab: this.initialTab,
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    },
  },
  methods: {
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`;
    },

    switchTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style lang="scss">
  .cms-tabs {
    @apply w-full select-none;
    @screen md {
      @apply mt-3;
    }
    &-header {
      @apply flex relative border-b mb-5;
      @screen md {
        @apply items-center;
      }
      &-list {
        @apply flex m-0 m-0 p-0 list-none;
        &-item {
          @apply relative cursor-pointer py-3 font-lato font-medium text-14px text-menuItem;
          @screen md {
            @apply px-5 pt-0;
          }
          &.tab--active {
            @apply relative text-labelAndTitle;
            &::before {
              content: '';
              @apply absolute left-0 w-full h-px bg-buttonAndURL;
              bottom: -1px;
            }
            svg {
              @apply fill-buttonAndURL;
            }
          }
        }
      }
    }
    &__auth {
      @apply -mt-px;
      .cms-tabs {
        &-header {
          @apply mb-0;
          &-list {
            @apply flex-auto;
            @screen sm {
              flex-direction: unset #{!important};
            }
            &-item {
              @apply py-5 flex-1 text-center text-lg text-placeholderStyle bg-white;
              &:not(:last-child) {
                @apply border-r;
              }
              &:first-child {
                @apply rounded-tl-lg;
              }
              &:last-child {
                @apply rounded-tr-lg;
              }
              &.tab--active {
                @apply text-cmsLightGreen;
                &:before {
                  @apply bg-cmsLightGreen;
                }
              }
            }
          }
        }
      }
    }
    &__blog {
      > .cms-tabs-header {
        @apply mb-0;
        .cms-tabs {
          &-header-list-item {
            @apply flex items-end px-0 mr-60px;
            &.tab--active {
              @apply bg-transparent text-2xl;
            }
          }
        }
      }
    }
    &-body {
      @apply relative;
    }
  }
</style>
