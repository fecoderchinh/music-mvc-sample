<template>
  <div class="pagination">
    <div class="grid grid-cols-12 gap-5 w-full">
      <div class="col-span-12 md:col-span-6 items-center md:flex">
        <p class="cms-typo text-13px text-labelAndTitle opacity-50">
          <slot name="counter"></slot>
        </p>
      </div>
      <div class="col-span-12 md:col-span-6 items-center md:flex">
        <ul class="pagination__inner">
          <li class="pageNumber disabled"><a href="#" class="arrow"> <DoubleAngleSVG class="fill-current "/> </a></li>
          <li class="pageNumber"><a href="#">1</a></li>
          <li class="pageNumber"><a href="#">2</a></li>
          <li class="pageNumber active"><a href="#">3</a></li>
          <li class="pageNumber"><a href="#">4</a></li>
          <li class="pageNumber"><a href="#">5</a></li>
          <li class="pageNumber"><a href="#" class="arrow"> <DoubleAngleSVG class="fill-current next"/> </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DoubleAngleSVG
} from '@/components/SVGs'

export default {
  name: "Pagination",
  components: {
    DoubleAngleSVG
  }
}
</script>

<style scoped lang="scss">
  .pagination {
    &__inner {
      @apply list-none p-0 ml-auto flex items-center;
      .pageNumber {
        @apply inline-flex;
        .arrow {
          @apply inline-flex;
          width: 25px;
          height: 21px;
          .next {
            @apply transform rotate-180;
          }
        }
        //&:first-child {
        //  @apply mr-4 #{!important};
        //}
        //&:last-child {
        //  @apply ml-1 #{!important};
        //}
        //&:not(:last-child) {
        //  @apply mr-3;
        //}
        a {
          @apply text-menuIcon text-base font-medium;
          &:not(.arrow) {
            @apply pb-1 px-2;
          }
          &:hover, &:focus {
            @apply text-buttonAndURL;
            svg {
              @apply text-buttonAndURL;
            }
          }
        }
        &.active {
          a {
            @apply text-buttonAndURL;
            svg {
              @apply text-buttonAndURL;
            }
          }
        }
      }
    }
  }
</style>
