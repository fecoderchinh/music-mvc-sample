<template>

  <div id="main-sidebar" class="overflow-hidden h-full bg-white relative z-30">

    <!-- eslint-disable max-len -->
    <div class="w-full h-16 border-b flex px-4 justify-center items-center md:hidden sm:hidden lg:flex">
        <p class="font-semibold text-3xl text-blue-400 pl-4">
            <img src="https://picsum.photos/240/60" class="mx-auto">
        </p>
    </div>

    <div class="list-sidebar overflow-y-scroll relative overflow-y-scroll">

      <div class="flex flex-auto" v-for="(data, index) in menuData" :key="index" :class="classSingleItem(index)">

        <template v-if="( !data.subMenu || data.subMenu.length === 0 )">
          <div class="pl-8 pr-4 w-full flex items-center h-35px pl-4 rounded-lg cursor-pointer hover:bg-sidebarHover">
            <component v-bind:is="data.component" class="h-icon w-icon mr-5 fill-menuIcon -mt-px" />
            <a href="#" class="text-standardCMS text-menuItem flex-auto" v-if="data.modal" @click.self.prevent="openModal(data.modal, data.modalW)">{{ data.item }}</a>
            <router-link :to="data.url" class="text-standardCMS text-menuItem flex-auto" v-else>{{ data.item }}</router-link>
          </div>
        </template>
        <template v-else>

          <label class="dropdown flex-auto flex-col">

            <div class="dd-button group hover:bg-sidebarHover items-center">
              <span class="flex-auto uppercase">{{ data.item }}</span>
              <div class="flex">
                <ArrowSVG class="w-3 h-3 flex-auto ml-auto group-hover:fill-buttonAndURL -mt-px"/>
              </div>
            </div>

            <input type="checkbox" class="dd-input" checked>

            <ul class="dd-menu">
              <li v-for="(subData, subIndex) in data.subMenu" :key="subIndex">
                <div class="w-full flex items-center h-35px rounded-lg cursor-pointer">
                  <component v-bind:is="subData.subComponent" class="h-icon w-icon mr-5 fill-menuIcon -mt-px" />
                  <a href="#" class="text-standardCMS text-menuItem flex-auto" v-if="subData.modal" @click.self.prevent="openModal(subData.modal, subData.modalW)">{{ subData.subItem }}</a>
                  <router-link :to="subData.subUrl" class="text-standardCMS text-menuItem flex-auto" v-else>{{ subData.subItem }}</router-link>
                </div>
              </li>
            </ul>

          </label>
        </template>
      </div>

      <div class="single-item flex fixed bottom-0 h-35px bg-white flex-auto shadow-fixed w-2/3 md:w-1/3 lg:w-64">
        <!-- eslint-disable max-len -->
        <div class="pl-8 pr-4 w-full flex items-center h-35px pl-4 rounded-lg cursor-pointer hover:bg-sidebarHover">
          <SettingSVG class="h-icon w-icon mr-5 fill-menuIcon"/>
          <a href="/dashboard/settings" class="text-standardCMS text-menuItem flex-auto font-medium">Cài đặt</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ModalPromoPickerContent from '@/components/client/ModalPromoPickerContent.vue';
import ModalSendMsgContent from '@/components/client/ModalSendMsgContent.vue';
import ModalFeedback from '@/components/client/ModalFeedback.vue';

import {
  EllipseSVG,
  ArrowSVG,
  AvatarSVG,
  SettingSVG,
} from '../SVGs.vue';

export default {
  components: {
    EllipseSVG,
    ArrowSVG,
    AvatarSVG,
    SettingSVG,
  },
  data() {
    return {
      menuData: [
        {
          item: 'Tổng quan',
          url: '/dashboard',
          component: 'EllipseSVG',
          subMenu: [],
        },
        {
          item: 'Đơn hàng',
          url: '#',
          component: 'ArrowSVG',
          subMenu: [
            {
              subItem: 'Tạo đơn hàng',
              subUrl: '/dashboard/order-create',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Danh sách đơn hàng',
              subUrl: '/dashboard/order-list',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Quản lý COD',
              subUrl: '/dashboard/order-cod',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Đơn trong giỏ hàng',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
          ],
        },
        {
          item: 'Sản phẩm',
          url: '#',
          component: 'ArrowSVG',
          subMenu: [
            {
              subItem: 'Thêm sản phẩm',
              subUrl: '/dashboard/product-create',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Danh sách sản phẩm',
              subUrl: '/dashboard/product-list',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Danh mục',
              subUrl: '/dashboard/categories',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Đơn trong giỏ hàng',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
          ],
        },
        {
          item: 'Khuyến mãi',
          url: '#',
          component: 'ArrowSVG',
          subMenu: [
            {
              subItem: 'Tạo khuyến mãi',
              subUrl: '/dashboard/promotion-create',
              subComponent: 'EllipseSVG',
              modal: ModalPromoPickerContent,
              modalW: 660,
            },
            {
              subItem: 'Danh sách khuyến mãi',
              subUrl: '/dashboard/promotions',
              subComponent: 'EllipseSVG',
            },
          ],
        },
        {
          item: 'Khách hàng',
          url: '#',
          component: 'ArrowSVG',
          subMenu: [
            {
              subItem: 'Gửi lời nhắn',
              subUrl: '/dashboard/send-msg',
              subComponent: 'EllipseSVG',
              modal: ModalSendMsgContent,
              modalW: 720,
            },
            {
              subItem: 'Danh sách khách hàng',
              subUrl: '/dashboard/customer-list',
              subComponent: 'EllipseSVG',
            },
          ],
        },
        {
          item: 'Bán hàng đa kênh',
          url: '#',
          component: 'ArrowSVG',
          subMenu: [
            {
              subItem: 'Shopee',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Lazada',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Facebook',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
          ],
        },
        {
          item: 'Làm đẹp website',
          url: '#',
          component: 'ArrowSVG',
          subMenu: [
            {
              subItem: 'Tin bài',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Giao diện web',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
            {
              subItem: 'Các trang con',
              subUrl: '#',
              subComponent: 'EllipseSVG',
            },
          ],
        },
        {
          item: 'BÁO CÁO',
          url: '#',
          component: '',
        },
        {
          item: 'GÓP Ý',
          url: '#',
          component: '',
          modal: ModalFeedback,
          modalW: 720,
        },
        {
          item: 'TRỢ GIÚP',
          url: '#',
          component: '',
        },
        {
          item: 'Tài khoản',
          url: '#',
          component: 'AvatarSVG',
          subMenu: [
            {
              subItem: 'Thông tin',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
            {
              subItem: 'Gói dịch vụ',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
            {
              subItem: 'Đăng xuất',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
            {
              subItem: 'Điều khoản dịch vụ',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
            {
              subItem: 'Chính sách bảo mật',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
            {
              subItem: 'Hỗ trợ',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
            {
              subItem: 'Hotline 24/7: 0902 492 111',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
            {
              subItem: 'Email: hotro@emz.vn',
              subUrl: '#',
              subComponent: 'AvatarSVG',
            },
          ],
        },
      ],
    };
  },
  methods: {
    classSingleItem(index) {
      let str = '';
      const d = this.menuData;

      if (d[index].subMenu === undefined || d[index].subMenu.length === 0) str += 'single-item ';

      if (d.length === index + 1) str += 'last-item ';

      return str;
    },
    openModal(m, w = 1200) {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: w, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(m, options, style, events);
    },
  },
};
</script>

<style lang="scss">
  .single-item {
    & > div {
      @apply rounded-none;
      &:hover, &:focus {
        @apply bg-sidebarHover;
        & > svg {
          @apply fill-buttonAndURL;
          -webkit-filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .3));
          filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .3));
        }
        & > a {
          @apply text-buttonAndURL;
        }
      }
      a {
        @apply h-full flex items-center;
      }
    }
    &:first-child {
      @apply mt-4;
    }
  }
  .last-item {
    @apply mb-24 pb-3;
    @screen sm {
      @apply mb-10 pb-0;
    }
  }
  .dropdown {
    .dd-menu {
      li {
        & > div {
          @apply rounded-none;
          &:hover, &:focus {
            @apply bg-sidebarHover;
            & > svg {
              @apply fill-buttonAndURL;
              -webkit-filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .3));
              filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .3));
            }
            & > a {
              @apply text-buttonAndURL;
            }
          }
          a {
            @apply h-full flex items-center;
          }
        }
      }
    }
  }
</style>
