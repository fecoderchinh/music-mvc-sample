<template>
  <main class="bg-cmsDarkGreen min-h-screen min-w-screen pb-30px">
    <div class="container">
      <header>
        <div class="flex items-center justify-between p-5">
          <div>
            <NuxtLink to="/">Logo</NuxtLink>
          </div>
          <div>
            <h3 class="cms-typo text-white text-base sm:hidden">
              Bạn chưa có tài khoản?
              <NuxtLink class="ml-30px" to="/register">Đăng ký</NuxtLink>
            </h3>
            <button
              type="button"
              class="md:hidden sm:block text-gray-500 hover:text-white focus:text-white focus:outline-none focus:shadow-none"
            >
              <!---->
              <svg viewBox="0 0 14 15" class="h-6 w-6 fill-white">
                <polygon
                  id="path-1"
                  points="14,1.9 12.6,0.5 7,6.1 1.4,0.5 0,1.9 5.6,7.5 0,13.1 1.4,14.5 7,8.9 12.6,14.5 14,13.1 8.4,7.5"
                  class="st1"
                ></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div class="px-5 hidden">
          <h3 class="cms-typo text-white text-base">
            <NuxtLink to="/register">Đăng ký</NuxtLink>
          </h3>
        </div>
      </header>
    </div>
    <div class="container">
      <div class="auth__login container">
        <div class="grid grid-cols-4">
          <div class="col-span-1 sm:hidden"></div>
          <div class="col-span-2 sm:col-span-4">
            <div class="w-full">
              <div class="bg-white p-30px rounded-lg">
                <h3 class="text-8 text-labelAndTitle cms-typo text-center">
                  Đăng nhập
                </h3>
                <p class="mt-5 cms-typo text-lg text-menuItem text-center">
                  Bán hàng . Tạo đơn . Thêm sản phẩm . Làm đẹp website …
                </p>
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form
                    @submit.prevent="handleSubmit(submitForm)"
                    action="/login"
                    method="post"
                    autocomplete="off"
                  >
                    <ValidationProvider
                      name="phone"
                      rules="required|min:10"
                      v-slot="{ errors }"
                    >
                      <div
                        class="cms-input relative flex-auto mt-30px cms__label-inside"
                      >
                        <input
                          tabindex="1"
                          v-model="form.phone"
                          autocomplete="off"
                          type="tel"
                          id="login-input-sdt"
                          name="phone"
                          class="typed bg-white cms-typo focus:outline-none border rounded w-full pl-5"
                        />
                        <label for="login-input-sdt">Số điện thoại</label>
                        <button
                          class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
                        ></button>
                        <p
                          v-show="errors.length > 0"
                          class="text-red-500 text-xs italic"
                        >
                          Số điện thoại không hợp lệ
                        </p>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider
                      name="password"
                      rules="required|min:8"
                      v-slot="{ errors }"
                    >
                      <div
                        class="cms-input relative flex-auto mt-30px cms__label-inside"
                      >
                        <input
                          tabindex="2"
                          v-model="form.password"
                          autocomplete="off"
                          type="password"
                          id="login-input-mk"
                          name="password"
                          class="typed bg-white cms-typo focus:outline-none border rounded w-full pl-5"
                        />
                        <label for="login-input-mk">Mật khẩu</label>
                        <button
                          class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
                        ></button>
                        <p
                          v-show="errors.length > 0"
                          class="text-red-500 text-xs italic"
                        >
                          Mật khẩu ít nhất 8 ký tự
                        </p>
                      </div>
                    </ValidationProvider>

                    <div class="cms-button-wrapper">
                      <button
                        type="submit"
                        class="text-center inline-block block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px"
                      >
                        Đăng nhập
                      </button>
                    </div>
                    <p class="text-lg cms-typo text-placeholderStyle mt-30px">
                      Bạn quên mật khẩu?
                      <NuxtLink class="text-buttonAndURL ml-15px" to="/forgot"
                        >Lấy lại mật khẩu</NuxtLink
                      >
                    </p>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
          <div class="col-span-1 sm:hidden">
            <div class="w-full px-5">
              <div
                class="bg-white bg-cover w-full h-515px bg-center p-30px rounded-lg relative"
                style="background-image: url('/img/bond.png')"
              >
                <div
                  class="absolute bottom-50px left-50 transform -translate-x-1/2 w-full text-center"
                >
                  <h3 class="cms-typo text-white text-6">You are best!</h3>
                  <p class="cms-typo text-white text-lg">
                    Simple . Fast . Amazing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  layout: "auth",
  data() {
    return {
      form: {
        phone: null,
        password: null,
      },
    };
  },
  methods: {
    async submitForm() {
      this.$nuxt.$loading.start();

      await this.$auth.loginWith("local", {
        data: {
          phone: this.form.phone,
          password: this.form.password,
        },
      });

      this.$nuxt.$loading.finish();

      // this.$axios.post('users/login', this.form )
      //     .then( response => {
      //         this.$nuxt.$loading.finish();
      //         this.$auth.setUserToken( response.data.token )
      //     })
      //     .catch( error => {
      //         this.$nuxt.$loading.finish();
      //         this.$toast.error( error.response.data.message );
      //     });
    },
  },
};
</script>
