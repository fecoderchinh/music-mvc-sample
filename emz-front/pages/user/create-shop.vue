<template>
<main class="bg-cmsDarkGreen min-h-screen min-w-screen pb-30px">
	<div class="container">
		<header>
			<div class="flex items-center justify-between p-5">
				<div>
					<NuxtLink class="text-white" to="/">Logo</NuxtLink>
				</div>
				<div>
					<h3 class="cms-typo text-white text-base sm:hidden">
                        <svg viewBox="0 0 214.78 214.78" class="w-10 h-10 inline mr-4 fill-cmsGray no-effect" 
                        style="shape-rendering: geometricprecision; text-rendering: geometricprecision; fill-rule: evenodd; clip-rule: evenodd;">
                        <path d="M107.39 0l0 0c59.3,0 107.39,48.09 107.39,107.39l0 0c0,59.3 -48.09,107.39 -107.39,107.39l0 0c-59.29,-0 -107.38,-48.09 -107.38,-107.39l-0 0c0,-59.3 48.09,-107.39 107.39,-107.39l0 -0zm56.38 147.23l0 5.26c0,6.2 -5.07,11.28 -11.28,11.28l-90.21 0c-6.2,0 -11.28,-5.07 -11.28,-11.28l0 -5.26c0,-13.72 15.97,-21.99 31.01,-28.57 0.56,-0.19 0.94,-0.38 1.5,-0.75 1.13,-0.56 2.44,-0.56 3.57,0.19 6.01,3.95 12.97,6.2 20.3,6.2 7.33,0 14.28,-2.25 20.3,-6.01 1.13,-0.75 2.44,-0.75 3.57,-0.19 0.56,0.19 0.94,0.38 1.5,0.75 15.03,6.39 31.01,14.66 31.01,28.38zm-56.38 -96.22c15.46,0 28,13.88 28,31.01 0,17.13 -12.54,31.01 -28,31.01 -15.46,0 -28,-13.88 -28,-31.01 0,-17.13 12.54,-31.01 28,-31.01z" class="fil0"></path></svg>
                        <NuxtLink to="/user/dashboard">{{ this.$auth.user.fullName }}</NuxtLink>
                    </h3>
					<button type="button" class="md:hidden sm:block text-gray-500 hover:text-white focus:text-white focus:outline-none focus:shadow-none">
						
						<svg viewBox="0 0 14 15" class="h-6 w-6 fill-white">
							<polygon id="path-1" points="14,1.9 12.6,0.5 7,6.1 1.4,0.5 0,1.9 5.6,7.5 0,13.1 1.4,14.5 7,8.9 12.6,14.5 14,13.1 8.4,7.5" class="st1"></polygon>
						</svg>
					</button>
				</div>
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
							<h3 class="text-8 text-labelAndTitle cms-typo">Tạo thông tin cho website mới</h3>
							<p class="mt-5 cms-typo text-lg text-menuItem">Thông tin này để khách hàng dễ dàng liên hệ với shop của bạn.</p>
							<ValidationObserver v-slot="{ handleSubmit }">
                  <form @submit.prevent="handleSubmit(submitForm)" action="/login" method="post" autocomplete="off">
                      <ValidationProvider name="shopDomain" rules="required|min:6" v-slot="{ errors }">
                          <div class="cms-input relative flex-auto mt-15px cms__label-inside">
                              <input v-model="form.shopDomain" type="text" id="create-input-shopDomain" name="shopDomain" class="bg-white cms-typo focus:outline-none border rounded w-full pl-5 pr-40 typed">
                              <label for="create-input-shopDomain">Địa chỉ web<sup class="text-red-500">*</sup></label>
                              <button class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none hover:shadow-none focus:shadow-none">
                                  <h3 class="cms-typo text-labelAndTitle text-lg"><span class="text-placeholderStyle">Sumi.</span>dmz.vn </h3>
                              </button>
                              <p v-show="errors.length>0" class="text-red-500 text-xs italic">Địa chỉ web tối thiểu 6 ký tự alphabet, không chứa các ký tự đặc biệt</p>
                          </div>
                      </ValidationProvider>

                                <ValidationProvider name="shopOwnerName" rules="required|min:10" v-slot="{ errors }">
                                    <div class="cms-input relative flex-auto mt-15px cms__label-inside">
                                        <input v-model="form.shopOwnerName" type="text" id="create-input-shopowner" name="shopOwnerName" class="bg-white cms-typo focus:outline-none border rounded w-full pl-5 typed">
                                        <label for="create-input-shopowner">Tên chủ website<sup class="text-red-500">*</sup></label>
                                        <button class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"></button>
                                        <p v-show="errors.length>0" class="text-red-500 text-xs italic">Vui lòng nhập Tên chủ website</p>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider name="email" rules="required|email|min:10" v-slot="{ errors }">
                                    <div class="cms-input relative flex-auto mt-15px cms__label-inside">
                                        <input v-model="form.email" type="text" id="create-input-shopowneremail" name="email" class="bg-white cms-typo focus:outline-none border rounded w-full pl-5 typed">
                                        <label for="create-input-shopowneremail">Email liên hệ chủ website<sup class="text-red-500">*</sup></label>
                                        <button class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"></button>
                                        <p v-show="errors.length>0" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                                    </div>
                                </ValidationProvider>


                                <ValidationProvider name="shopName" rules="required|min:10" v-slot="{ errors }">
                                    <div class="cms-input relative flex-auto mt-30px cms__label-inside">
                                        <input v-model="form.shopName" type="text" id="create-input-shopName" name="shopName" 
                                        class="bg-white cms-typo focus:outline-none border rounded w-full pl-5 typed">
                                        <label for="create-input-shopName">Tên cửa hàng<sup class="text-red-500">*</sup></label>
                                        <button class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"></button>
                                        <p v-show="errors.length>0" class="text-red-500 text-xs italic">Vui lòng nhập tên cửa hàng</p>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider name="shopAddress" rules="required|min:10" v-slot="{ errors }">
                                    <div class="cms-input relative flex-auto mt-15px cms__label-inside">
                                        <input v-model="form.shopAddress" type="text" id="create-input-shopaddress" name="shopAddress" class="bg-white cms-typo focus:outline-none border rounded w-full pl-5 typed">
                                        <label for="create-input-shopaddress">Địa chỉ cửa hàng<sup class="text-red-500">*</sup></label>
                                        <button class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"></button>
                                        <p v-show="errors.length>0" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                                    </div>
                                </ValidationProvider>

                                
                                <div class="grid grid-cols-2 gap-5">
                                    <div class="col-span-1 sm:col-span-2">
                                        <ValidationProvider name="city" rules="required" v-slot="{ errors }">
                                            <div class="cms-select cms__label-inside mt-15px">
                                                <div class="cms-select__wrapper">
                                                    <select v-model="form.city" id="create-select-city" name="city" class="cms-select__wrapper-item bg-white h-10 text-14px px-4 pr-8 rounded">
                                                        <option :value="i.code" v-for="i in provinces">{{ i.name }}</option>
                
                                                    </select>
                                                    <label for="create-select-city">Tỉnh thành<sup class="text-red-500">*</sup></label>
                                                    <div class="pointer-events-none absolute top-50 transform -translate-y-1/2 right-0 flex items-center px-2 text-gray-700">
                                                        <svg viewBox="0 0 10 5" class="fill-menuIcon h-3 w-3">
                                                            <polygon id="Icon" points="0,0 5,5 10,0 " class="st0"></polygon>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p v-show="errors.length>0" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                                            </div>
                                            
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-span-1 sm:col-span-2">
                                        <ValidationProvider name="phone" rules="required|min:10" v-slot="{ errors }">
                                            <div class="cms-input relative flex-auto mt-15px cms__label-inside">
                                                <input v-model="form.phone" type="text" id="create-input-shopphone" name="phone" 
                                                    class="bg-white cms-typo focus:outline-none border rounded w-full pl-5 typed">
                                                <label for="create-input-shopphone">Số điện thoại cửa hàng<sup class="text-red-500">*</sup></label>
                                                <button class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"></button>
                                                <p v-show="errors.length>0" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                                            </div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                

                                <div class="cms-button-wrapper">
                                    <button type="submit"
                                        class="text-center inline-block block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px"> 
                                        Tạo website </button>
                                </div>

                            </form>
                            </ValidationObserver>

						</div>
					</div>
				</div>
				<div class="col-span-1 sm:hidden"></div>
			</div>
		</div>
	</div>
</main>
</template>

<script>
export default {
    layout: 'auth',
    middleware: 'auth',
    data(){
        return {
            provinces: [],
            form :{
                
                shopName: null,
                shopDomain: null,
                shopOwnerName: null,
                shopAddress: null,
                phone: null,
                city: null,
                email: null,
            }
        }
    },
    created() {
        this.getProvinces()
    },
    methods: {
        getProvinces(){
            this.$axios.get('provinces')
                .then( response => {
                    this.provinces = response.data
                })

        },
        submitForm(){
            this.$nuxt.$loading.start();
            this.$axios.post('shop/create-shop', this.form )
                .then( response => {
                    this.$nuxt.$loading.finish();
                    // this.$router.push('/user/dashboard')
                })
                .catch( error => {
                    this.$nuxt.$loading.finish();
                    this.$toast.error( error.response.data.message );
                });
                    
        }
    },
}
</script>

<style lang="scss">
  .cms {
    &-select {
      @apply w-full text-gray-600;
      &__wrapper {
        @apply inline-block relative w-full;
        &-item {
          @apply cms-typo block appearance-none w-full border;
          &:focus {
            @apply outline-none shadow-outline;
          }
        }
      }
      &.cms {
        &__label-inside {
          @apply cms-typo relative;
          select {
            @apply pt-6 pb-5px pl-5 rounded-lg h-auto text-labelAndTitle #{!important};
          }
          label {
            @apply mt-0 ml-5 text-14px text-placeholderStyle select-none;
            @apply absolute top-0 mt-5px left-0;
            @apply transition-all duration-150 ease-in-out;
          }
        }
        &__validate {
          select {
            @apply border-cmsRed;
          }
          &.fill-validate {
            @apply bg-cmsRed rounded-lg;
            .cms {
              &__validate {
                &-message {
                  @apply text-white #{!important};
                }
              }
            }
          }
        }
      }
      .cms {
        &__validate {
          &-message {
            @apply cms-typo text-cmsRed text-14px ml-5 py-5px;
          }
        }
      }
    }
  }
</style>
