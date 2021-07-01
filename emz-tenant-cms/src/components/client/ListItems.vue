<template>
  <!-- eslint-disable max-len -->
  <div class="cms-typo">
    <ul class="cms-list pb-5 float-left">
      <li class="cms-list-item">
        <img src="https://picsum.photos/60">
        <div class="cms-list-item-content">
          <h3><a href="#">Tóc đẹp xinh</a></h3>
          <ul class="space-x-1">
            <li>
              <a href="#" class="text-cmsRed">Ngắn</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
            <li>
              <a href="#" class="text-cmsGreen">Xanh</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
            <li>
              <a href="#" class="text-cmsOrange">Uốn</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
          </ul>
          <span class="text-menuItem text-13px">123,000đ x 3</span>
        </div>
      </li>
      <li class="cms-list-item">
        <img src="https://picsum.photos/60">
        <div class="cms-list-item-content">
          <h3><a href="#">Tóc đẹp xinh</a></h3>
          <ul class="space-x-1">
            <li>
              <a href="#" class="text-cmsRed">Ngắn</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
            <li>
              <a href="#" class="text-cmsGreen">Xanh</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
            <li>
              <a href="#" class="text-cmsOrange">Uốn</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
          </ul>
          <span class="text-menuItem text-13px">123,000đ x 3</span>
        </div>
      </li>
      <li class="cms-list-item">
        <img src="https://picsum.photos/60">
        <div class="cms-list-item-content">
          <h3><a href="#">Tóc đẹp xinh</a></h3>
          <ul class="space-x-1">
            <li>
              <a href="#" class="text-cmsRed">Ngắn</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
            <li>
              <a href="#" class="text-cmsGreen">Xanh</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
            <li>
              <a href="#" class="text-cmsOrange">Uốn</a>
              <EllipseSVG class="w-1 h-1 mx-2 fill-menuIcon"/>
            </li>
          </ul>
          <span class="text-menuItem text-13px">123,000đ x 3</span>
        </div>
      </li>
    </ul>
    <div class="w-full no-mb md:flex items-center">
      <ListItemWithIcon :option-data="this.listItemData" />
    </div>
  </div>
</template>

<script>
import ListItemWithIcon from '@/components/client/ListItemWithIcon.vue';

import {
  EllipseSVG,
  PrintSVG,
  AddLibrarySVG
} from '@/components/SVGs.vue';
import ModalCancelOrderTicketContent from "@/components/client/ModalCancelOrderTicketContent";

export default {
  components: {
    EllipseSVG,
    ListItemWithIcon,
  },
  data() {
    return {
      listItemData: [
        {
          component: PrintSVG,
          componentClass: 'w-icon',
          link: '#',
          name: 'In đơn hàng',
        },
        {
          component: AddLibrarySVG,
          componentClass: 'w-icon',
          link: '#',
          name: 'Đặt lại',
          aModal: ModalCancelOrderTicketContent,
          modalWidth: 500
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .cms-list {
    @apply list-none w-full;
    &-item {
      @apply block border-b float-left w-full py-2;
      > img {
        @apply float-left mr-5 pb-2;
      }
      &-content {
        @apply float-left;
        // @media (min-width: 1025px) {
        //   @apply ml-5;
        // }
        // @media (max-width: 1024px) and (min-width: 769px) {
        //   @apply w-full pt-2;
        // }
        // @media (max-width: 768px) {
        //   @apply ml-5;
        // }
        > h3 {
          @apply text-labelAndTitle font-lato font-medium text-15px
        }
        > ul {
          @apply list-none;
          > li {
            @apply inline-flex items-center;
            > a {
              @apply text-13px;
            }
            &:last-child {
              > svg {
                @apply hidden;
              }
            }
          }
        }
      }
    }
  }
</style>
