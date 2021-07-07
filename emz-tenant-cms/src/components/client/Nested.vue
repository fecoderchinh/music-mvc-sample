<template>
  <li
      class="cms-nested__item flex flex-col pt-5"
      :class="[
          nested.leaf ? 'is-leaf' : 'is-root'
       ]">
    <div class="flex">
      <h3
          class="flex-1 cms-typo text-14px text-menuItem"
          :class="[
              nested.children && nested.children.length > 0 ? 'cursor-pointer' : null
          ]"
          v-on:click="expand()">
        <span v-if="nested.children && nested.children.length > 0" class="text-menuItem">
          <angle-svg
              class="w-3 inline transform mr-2 -mt-px"
              :class="this.nested.expanded ? 'rotate-0' : '-rotate-90'"/>
        </span>
        {{ nested.name }}
      </h3>
      <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
        Thêm vào
      </a>
    </div>
    <ul class="cms-nested__child pl-6 flex flex-col" v-if="nested.children && nested.children.length > 0" v-show="nested.expanded">
      <nested v-for="(child, index) in nested.children" :key="index" :nested="child"/>
    </ul>
    <div class="cms-nested__empty pl-5" v-else v-show="!nested.leaf && nested.expanded">
      <span class="cms-typo text-14px text-menuItem">
        No Data
      </span>
    </div>
  </li>

</template>
<script>
import {
  AngleSVG
} from '@/components/SVGs'

export default {
  name: "Nested",
  components: {
    'angle-svg': AngleSVG
  },
  props: {
    nested: Object
  },
  methods: {
    expand() {
      if (this.nested.leaf) {
        return;
      }

      this.nested.expanded = !this.nested.expanded;
    }
  }
}
</script>

<style scoped>

</style>
