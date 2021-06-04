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
              Bạn đã có tài khoản?
              <NuxtLink class="ml-30px" to="/login">Đăng nhập</NuxtLink>
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
            <NuxtLink to="/login">Đăng nhập</NuxtLink>
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
                  Bắt đầu 15 ngày hoàn toàn miễn phí
                </h3>
                <p class="mt-5 cms-typo text-lg text-buttonAndURL text-center">
                  Hoặc đăng ký ngay - Khuyến mãi đến 50% chào mừng khai trương!
                </p>
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form
                    @submit.prevent="handleSubmit(submitForm)"
                    action="/dang-ky"
                    method="post"
                    autocomplete="off"
                  >
                    <ValidationProvider
                      name="fullName"
                      rules="required|min:8"
                      v-slot="{ errors }"
                    >
                      <div
                        class="cms-input relative flex-auto mt-15px cms__label-inside"
                      >
                        <input
                          tabindex="1"
                          v-model="form.fullName"
                          type="text"
                          id="login-input-fullName"
                          name="fullName"
                          class="typed bg-white cms-typo focus:outline-none border rounded w-full pl-5"
                        />
                        <label for="login-input-fullName"> Tên của bạn</label>
                        <button
                          class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
                        ></button>
                      </div>
                      <p
                        v-show="errors.length > 0"
                        class="text-red-500 text-xs italic"
                      >
                        Nhập tên của bạn tối thiểu 8 ký tự
                      </p>
                    </ValidationProvider>

                    <ValidationProvider
                      name="phone"
                      rules="required|min:10"
                      v-slot="{ errors }"
                    >
                      <div
                        class="cms-input relative flex-auto mt-30px cms__label-inside"
                      >
                        <input
                          tabindex="2"
                          v-model="form.phone"
                          autocomplete="off"
                          type="text"
                          id="login-input-sdt"
                          name="phone"
                          class="typed bg-white cms-typo focus:outline-none border rounded w-full pl-5"
                        />
                        <label for="login-input-sdt"> Số điện thoại </label>
                        <button
                          class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
                        ></button>
                      </div>
                      <p
                        v-show="errors.length > 0"
                        class="text-red-500 text-xs italic"
                      >
                        Số điện thoại không hợp lệ
                      </p>
                    </ValidationProvider>

                    <ValidationProvider
                      name="password"
                      rules="required|min:8"
                      v-slot="{ errors }"
                    >
                      <div
                        class="cms-input relative flex-auto mt-15px cms__label-inside"
                      >
                        <input
                          tabindex="3"
                          v-model="form.password"
                          autocomplete="off"
                          type="password"
                          id="login-input-mk"
                          name="password"
                          class="typed bg-white cms-typo focus:outline-none border rounded w-full pl-5"
                        />
                        <label for="login-input-mk"> Mật khẩu </label>
                        <button
                          class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none group hover:shadow-none focus:shadow-none"
                        >
                          <svg
                            viewBox="0 0 22 16"
                            class="w-5 fill-placeholderStyle group-hover:filter-none"
                          >
                            <path
                              id="path-1"
                              d="M11,0.5C6,0.5,1.7,3.6,0,8c1.7,4.4,6,7.5,11,7.5s9.3-3.1,11-7.5C20.3,3.6,16,0.5,11,0.5L11,0.5z M11,13c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S13.8,13,11,13L11,13z M11,5C9.3,5,8,6.3,8,8s1.3,3,3,3s3-1.3,3-3S12.7,5,11,5L11,5z"
                              class="st1"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <p
                        v-show="errors.length > 0"
                        class="text-red-500 text-xs italic"
                      >
                        Mật khẩu ít nhất 8 ký tự
                      </p>
                    </ValidationProvider>

                    <div class="cms-button-wrapper">
                      <button
                        type="submit"
                        class="text-center inline-block block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px"
                      >
                        Đăng ký
                      </button>
                    </div>
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
        fullName: null,
        phone: null,
        password: null,
      },
    };
  },
  methods: {
    submitForm() {
      this.$nuxt.$loading.start();
      this.$axios
        .post("clients/register", this.form)
        .then(async (response) => {
          this.$nuxt.$loading.finish();
          await this.$auth.setUserToken(response.data.token).then(() => {});
          await this.$auth.fetchUser();
          // await this.$auth.setUser(response.data.user)
          this.$router.push("/");
        })
        .catch((error) => {
          this.$nuxt.$loading.finish();
          this.$toast.error(error.response.data.message);
        });
    },
  },
};
</script>
