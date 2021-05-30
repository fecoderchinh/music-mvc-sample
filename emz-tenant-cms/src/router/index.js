import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/client/Dashboard.vue';
import OrderCreate from '../views/client/OrderCreate.vue';
import OrderAdded from '../views/client/OrderAdded.vue';
import OrderMessage from '../views/client/OrderMessage.vue';
import OrderNote from '../views/client/OrderNote.vue';
import OrderShipped from '../views/client/OrderShipped.vue';
import OrderList from '../views/client/OrderList.vue';
import OrderCOD from '../views/client/OrderCOD.vue';
import ProductCreate from '../views/client/ProductCreate.vue';
import ProductList from '../views/client/ProductList.vue';
import Categories from '../views/client/Categories.vue';
import CategoryCreate from '../views/client/CategoryCreate.vue';
import Stock from '../views/client/Stock.vue';
import Promotions from '../views/client/Promotions.vue';
import PromotionCreate2 from '../views/client/PromotionCreate2.vue';
import CustomerList from '../views/client/CustomerList.vue';
import Customer from '../views/client/Customer.vue';
import VoucherCreate from '../views/client/VoucherCreate.vue';
import ComboCreate from '../views/client/ComboCreate.vue';
import Connect from '../views/client/Connect.vue';

import SettingConnectPayment from '../views/client/SettingConnectPayment.vue';
import Shipping from '../views/client/Shipping.vue';
import ShippingFeeSettings from '../views/client/ShippingFeeSettings.vue';
import UserRoles from '../views/client/UserRoles.vue';
import SettingsGeneral from '../views/client/SettingsGeneral.vue';
import Domain from '../views/client/Domain.vue';
import Blog from '../views/client/Blog.vue';
import Page from '../views/client/Page.vue';
import Theme from '../views/client/Theme.vue';
import SendMessage from '../views/client/SendMessage.vue';
import Report from '../views/client/Report.vue';
import Package from '../views/client/Package.vue';

// settings
import Settings from '../views/client/Settings.vue';
import Warehouse from '../views/client/settings/Warehouse';

// auths
import Auth from '../views/auth/Auth.vue';
import AuthLogin from '../views/auth/AuthLogin.vue';
import AuthRegister from '../views/auth/AuthRegister.vue';
import AuthRegisterError from '../views/auth/AuthRegisterError.vue';
import AuthCreate from '../views/auth/AuthCreate.vue';
import AuthCreateError from '../views/auth/AuthCreateError.vue';
import AuthReset from '../views/auth/AuthReset.vue';
import AuthNewPassword from '../views/auth/AuthNewPassword.vue';
import AuthTabLogin from '../views/auth/AuthTabLogin.vue';

import SiteManager from '../views/site-manager/SiteManager.vue';
import SitePicker from '../views/site-manager/SitePicker.vue';

import Store from '../views/theme/Store.vue';
import THome from '../views/theme/THome.vue';
import TCategory from '../views/theme/TCategory.vue';
import TDetail from '../views/theme/TDetail.vue';
import MenuSettings from "@/views/client/MenuSettings";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
    meta: {
      authRequired: true,
    }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      authRequired: true,
    },
    children: [

      {
        path: 'order-create', // empty item
        component: OrderCreate,
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'order-added', // has item
        component: OrderAdded,
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'order-message', // notify
        component: OrderMessage,

      },
      {
        path: 'order-note', // note
        component: OrderNote,
      },
      {
        path: 'order-shipped', // shipped
        component: OrderShipped,
      },
      {
        path: 'order-list', // list
        component: OrderList,
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'order-cod', // list COD
        component: OrderCOD,
      },
      {
        path: 'product-create', // product create
        component: ProductCreate,
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'product-list', // product list
        component: ProductList,
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'categories', // product categories
        component: Categories,
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'category-create', // category create
        component: CategoryCreate,
      },
      {
        path: 'stock', // stock
        component: Stock,
      },
      {
        path: 'promotions', // promotions
        component: Promotions,
      },
      {
        path: 'promotion-create', // promotion create
        component: PromotionCreate2,
      },
      {
        path: 'customer-list', // customer list
        component: CustomerList,
      },
      {
        path: 'customer', // customer
        component: Customer,
      },
      {
        path: 'voucher-create', // voucher create
        component: VoucherCreate,
      },
      {
        path: 'combo-create', // combo create
        component: ComboCreate,
      },
      {
        path: 'connect', // connect
        component: Connect,
      },
      {
        path: 'settings', // settings
        component: Settings,
      },
      {
        path: 'connect-payment', // ket noi thanh toan
        component: SettingConnectPayment,
      },
      {
        path: 'shipping', // shipping
        component: Shipping,
      },
      {
        path: 'shipping-fee-settings', // Shipping Fee Settings
        component: ShippingFeeSettings,
      },
      {
        path: 'warehouse', // Warehouse
        component: Warehouse,
      },
      {
        path: 'user-roles', // UserRoles
        component: UserRoles,
      },
      {
        path: 'settings-general', // SettingsGeneral
        component: SettingsGeneral,
      },
      {
        path: 'domain', // Domain
        component: Domain,
      },
      {
        path: 'blog', // Blog
        component: Blog,
      },
      {
        path: 'page', // Page
        component: Page,
      },
      {
        path: 'theme', // Theme
        component: Theme,
      },
      {
        path: 'send-msg', // SendMessage
        component: SendMessage,
      },
      {
        path: 'report', // Report
        component: Report,
      },
      {
        path: 'package', // Package
        component: Package,
      },
      {
        path: 'menu-settings', // QUAN LY MENU
        component: MenuSettings,
      },
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        component: AuthLogin,
      },
      {
        path: 'register',
        component: AuthRegister,
      },
      {
        path: 'register-error',
        component: AuthRegisterError,
      },
      {
        path: 'create',
        component: AuthCreate,
      },
      {
        path: 'create-error',
        component: AuthCreateError,
      },
      {
        path: 'reset',
        component: AuthReset,
      },
      {
        path: 'new-password',
        component: AuthNewPassword,
      },
      {
        path: 'tab-login',
        component: AuthTabLogin,
      },
    ],
  },
  {
    path: '/site-manager',
    name: 'Site Manager',
    component: SiteManager,
    children: [
      {
        path: 'picker',
        component: SitePicker,
      },
    ],
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
    children: [
      {
        path: '/store/home',
        component: THome,
      },
      {
        path: '/store/category',
        component: TCategory,
      },
      {
        path: '/store/detail',
        component: TDetail,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL ,
  routes,
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.authRequired)) {
    if (localStorage.getItem('user') == null) {
      next({
        path: '/auth/tab-login',
        params: { nextUrl: to.fullPath }
      })
    }
    else {
      next()
    }

  }else {
    next()
  }
})


export default router;
