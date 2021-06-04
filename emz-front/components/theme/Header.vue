<template>
  <div class="w-full bg-cmsLight">
    <div class="container">
      <div class="flex cms-typo text-base px-5">
        <div class="flex-auto flex items-center">
          <button class="lg:hidden md:flex py-15px no-effect">
            <svg
              viewBox="0 -53 384 384"
              xmlns="http://www.w3.org/2000/svg"
              class="w-icon h-icon text-labelAndTitle filter-none cursor-pointer"
            >
              <path
                d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              ></path>
              <path
                d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              ></path>
              <path
                d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              ></path>
            </svg>
          </button>
          <ul class="list-none theme-navbar lg:flex md:hidden sm:hidden">
            <li class="theme-navbar__item inline-flex relative">
              <NuxtLink to="/">
                Trang chủ
              </NuxtLink>
            </li>
            <li class="theme-navbar__item inline-flex relative">
              <a href="#">Tất cả theme</a>
            </li>
            <li class="theme-navbar__item inline-flex relative">
              <a href="#">Miễn phí</a>
            </li>
            <!-- <li class="theme-navbar__item inline-flex relative">
              <div class="theme-dropdown inline">
                <a href="#" class="theme-dropdown__label"
                  ><span>Phong cách</span
                  ><svg
                    viewBox="0 0 10 5"
                    class="h-3 w-3 fill-menuIcon inline ml-2 theme-dropdown__icon"
                  >
                    <polygon
                      id="Icon"
                      points="0,0 5,5 10,0 "
                      class="st0"
                    ></polygon></svg
                ></a>

              </div>
            </li>
             -->
          </ul>
        </div>
        <div
          class="flex-auto items-center justify-end lg:flex md:hidden sm:hidden"
        >
          <div class="w-full -ml-px">
            <div class="flex">
              <div class="flex flex-auto">
                <div class="cms-input relative flex-auto">
                  <input
                    type="text"
                    id="search-theme"
                    name="search-theme"
                    placeholder="Tìm kiếm theme"
                    class="bg-white cms-typo focus:outline-none border rounded w-full cms-input__with-icon bg-cmsLightGreen bg-opacity-5"
                  /><button
                    class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
                  >
                    <svg viewBox="0 0 17 17" class="h-4 w-4 fill-menuIcon">
                      <path
                        id="path-1_1_"
                        d="M11.9,10.5h-0.7l-0.3-0.2c0.9-1,1.4-2.4,1.4-3.8c0-3.2-2.6-5.9-5.8-5.9S0.6,3.2,0.6,6.5s2.6,5.8,5.9,5.8c1.4,0,2.8-0.5,3.8-1.4l0.2,0.3v0.7l4.5,4.5l1.3-1.3L11.9,10.5L11.9,10.5z M6.5,10.5c-2.2,0-4.1-1.8-4.1-4s1.8-4.1,4.1-4.1s4,1.8,4,4.1S8.7,10.5,6.5,10.5L6.5,10.5z"
                        class="st0"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>
<script>
export default {
};
</script>

<style lang="scss">
  .theme-navbar {
    &__item {
      > * {
        @apply mr-30px py-15px;
      }
      a {
        @apply text-cmsLightGreen;
      }
    }
    &.responsive {
      .theme {
        &-navbar {
          &__item {
            @apply flex px-5;
            > * {
              @apply mr-0 py-5px;
            }
          }
        }
        &-dropdown {
          @apply w-full;
          &__label {
            @apply block relative;
          }
          &__icon {
            @apply absolute top-5px right-0;
          }
          &__child {
            @apply block static bg-transparent shadow-none border-0;
          }
        }
      }
    }
  }
</style>
