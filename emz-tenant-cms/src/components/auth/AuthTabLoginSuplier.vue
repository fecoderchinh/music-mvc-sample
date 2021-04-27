<template>
  <!-- eslint-disable max-len -->
  <AuthBox boxClass="bg-white p-30px rounded-b-lg">
    <template slot="content">
      <h3 class="text-8 text-labelAndTitle cms-typo text-center">Đăng nhập</h3>
      <p class="mt-5 cms-typo text-lg text-menuItem text-center">Bán hàng  . Tạo đơn  .  Thêm sản phẩm  . Làm đẹp website …</p>
      <ValidationObserver ref="formLogin" v-slot="{ handleSubmit }">
      <form  @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider vid="phone" name="phone" rules="required|vietnamphone" v-slot="{ errors, failedRules }">
        <InputType
          input-type="text"
          tabIndex="1"
          id="login-input-sdt"
          name="phone"
          main-class="mt-30px cms__label-inside"
          input-class="pl-5"
          button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
          v-model="valPhone">
          <label slot="label" for="login-input-sdt">
            Số điện thoại
          </label>
        </InputType>
        <p class="text-red-500" v-if="failedRules.required">Vui lòng nhập số điện thoại</p>
        <p class="text-red-500" v-if="failedRules.vietnamphone">Số điện thoại của Việt nam chưa đúng</p>
        <p class="text-red-500" v-else>{{ errors[0] }}</p>
        
        </ValidationProvider>

        <ValidationProvider vid="password" name="password" rules="required" v-slot="{ errors, failedRules }">
        <InputType
          input-type="password"
          tabIndex="2"
          id="login-input-mk"
          name="login-input-mk"
          main-class="mt-30px cms__label-inside"
          input-class="pl-5"
          button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none"
          v-model="valPassword">
          <label slot="label" for="login-input-mk">
            Mật khẩu
          </label>
        </InputType>
        <p class="text-red-500" v-if="failedRules.required">Vui lòng nhập mật khẩu</p>
        <p class="text-red-500" v-else>{{ errors[0] }}</p>
        </ValidationProvider>
      
        <button
          type="submit" 
          class="block leading-50px cms-typo text-lg text-white h-50px bg-cmsLightGreen hover:bg-cmsDarkGreen w-full rounded-lg mt-30px">
          Đăng nhập
        </button>

      </form>
      </ValidationObserver>
      <p class="text-lg cms-typo text-placeholderStyle mt-30px">Bạn quên mật khẩu? <a href="/auth/reset" class="text-buttonAndURL ml-15px">Lấy lại mật khẩu</a></p>

    </template>
  </AuthBox>
</template>

<script>
import AuthBox from '@/components/auth/AuthBox.vue';
import InputType from '@/components/client/InputType.vue';
import http from '@/config/http'

export default {
  components: {
    AuthBox,
    InputType
  },
  data() {
    return {
      valPhone: '',
      valPassword: '',
      submitStatus: 'PENDING'
    };
  },
  // created() { },
  methods: {
    onSubmit(){
     
        http.post('clients/login', {
          phone: this.valPhone,
          password: this.valPassword,
        }).then( response => {
          this.$store.dispatch('login', response.data )
          this.$router.push('/dashboard')
        }).catch(e => {
    
            this.$refs.formLogin.setErrors({
              'password': [ e.response.data.message ]
            });
            return;
        })
      
    }
  },
};
</script>

<style lang="scss"></style>
