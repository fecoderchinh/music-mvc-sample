<template>
  <div class="bg-teal-500">
    <div class="container">
      <nav class="flex items-center justify-between flex-wrap py-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <NuxtLink to="/">
            <svg
              class="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              />
            </svg>
            <span class="font-semibold text-xl tracking-tight">EMZ</span>
          </NuxtLink>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <NuxtLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/about">Giới thiệu</NuxtLink>
            <NuxtLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/pricing">Bảng giá</NuxtLink>
            <NuxtLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/theme">Kho giao diện</NuxtLink>
          </div>
          <div>
            <span v-if="this.$auth.loggedIn">
              Xin chào: {{ this.$auth.user.fullName }}
              <NuxtLink class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white"
              to="/user/dashboard">Vào quản trị</NuxtLink>
            </span>
            <span v-else>
              <NuxtLink class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" to="/login">Login</NuxtLink>
              <NuxtLink class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" to="/register">Register</NuxtLink>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { SearchNav } from "./SearchNav";

export default {
  components: [SearchNav],
};
</script>

