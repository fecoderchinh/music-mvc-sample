<template>
  <div class="pagination">
    <ul class="pagination__inner">
      <li class="pageNumber"><a href="#" class="prev">Prev</a></li>
      <li class="pageNumber active"><a href="#">1</a></li>
      <li class="pageNumber"><a href="#">2</a></li>
      <li class="pageNumber"><a href="#">3</a></li>
      <li class="pageNumber"><a href="#">4</a></li>
      <li class="pageNumber"><a href="#">5</a></li>
      <li class="pageNumber"><a href="#">6</a></li>
      <li class="pageNumber"><a href="#" class="next">Next</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped lang="scss">
  .pagination {
    @apply block items-center;
    @media (min-width: 992px) {
      @apply flex;
    }
    &__inner {
      @apply relative block rounded border shadow bg-white shadow;
      @media (min-width: 992px) {
        @apply flex;
      }
      li {
        @media (max-width: 991.98px) {
          @apply inline-block;
        }
        @apply list-none m-1;
        &:first-child {
          @apply mr-3;
        }
        &:last-child {
          @apply ml-3;
        }
        &:first-child, &:last-child {
          &.pageNumber {
            &.active, &:hover {
              a {
                @apply rounded-none bg-transparent text-labelAndTitle;
              }
            }
          }
        }
        &.pageNumber {
          @apply w-10 h-10 leading-10 text-center;
          &:hover, &.active {
            a {
              @apply bg-menuItem text-white;
            }
          }
        }
        a {
          @apply block no-underline text-labelAndTitle font-normal rounded-full text-14px;
        }
      }
    }
  }
</style>
