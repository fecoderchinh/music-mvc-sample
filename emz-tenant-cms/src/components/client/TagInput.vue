<template>
  <!-- eslint-disable max-len -->
  <ul class="tag-input">
    <li v-for="tag in tags" :key="tag" class="tag-input-item">
      <span class="tag-input-tag">{{ tag }}</span>
      <button type="button" class="tag-input-remove no-effect"
        @click="removeTag(tag)"
      ><CloseSVG class="tag-input-svg"/></button>
    </li>
    <input class="tag-input-text" v-if="canBackspace" :placeholder="placeholder"
      v-model="input"
      @keydown.backspace="handleBackspace"
      @keydown.enter.prevent="addTag"
    >
  </ul>
</template>

<script>
import {
  CloseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    CloseSVG,
  },
  model: {
    prop: 'tags',
    event: 'update',
  },
  props: {
    tags: Array,
    placeholder: {
      type: String,
      default: 'Add tag ...',
    },
    canBackspace: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      input: '',
    };
  },
  computed: {
    newTag() {
      return this.input.trim();
    },
  },
  methods: {
    removeTag(tag) {
      this.$emit('update', this.tags.filter((t) => t !== tag));
    },
    addTag() {
      if (this.newTag.length === 0 || this.tags.includes(this.newTag)) {
        return;
      }
      this.$emit('update', [...this.tags, this.newTag]);
      this.clearInput();
    },
    clearInput() {
      this.input = '';
    },
    handleBackspace() {
      if(this.canBackspace) {
        if (this.newTag.length === 0) {
          this.$emit('update', this.tags.slice(0, -1));
        }
      }
    },
  },
};
</script>

<style lang="scss">
  .tag-input {
    @apply list-none;
    &-item {
      @apply px-2 h-6 mr-2 mt-1 bg-gray-200 border inline-flex items-center;
    }
    &-tag {
      @apply cms-typo text-13px text-placeholderStyle;
    }
    &-remove {
      @apply inline-flex;
      &:hover, &:focus {
        @apply shadow-none outline-none;
      }
    }
    &-svg {
      @apply inline-flex w-3 ml-3 fill-placeholderStyle;
      &:hover {
       @apply fill-menuIcon filter-none;
      }
    }
    &-text {
      @apply inline-flex text-13px cms-typo border-none;
      @apply min-h-34px;
      &:hover, &:focus {
        @apply shadow-none outline-none;
      }
    }
    &.red, &.green, &.orange {
      .tag-input {
        &-text {
          @apply min-h-34px;
        }
      }
    }
    &.red {
      .tag-input {
        &-item {
          @apply bg-cmsRed rounded border-cmsRed py-1 mt-1 mb-px;
        }
        &-tag {
          @apply text-white;
        }
        &-svg {
          @apply fill-white;
        }
      }
    }
    &.green {
      .tag-input {
        &-item {
          @apply bg-cmsGreen rounded border-cmsGreen py-1 mt-1 mb-px;
        }
        &-tag {
          @apply text-white;
        }
        &-svg {
          @apply fill-white;
        }
      }
    }
    &.orange {
      .tag-input {
        &-item {
          @apply bg-Orange rounded border-Orange py-1 mt-1 mb-px;
        }
        &-tag {
          @apply text-white;
        }
        &-svg {
          @apply fill-white;
        }
      }
    }
  }
</style>
