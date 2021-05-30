<template>
<ValidationObserver v-slot="{ handleSubmit }">
  <form @submit.prevent="handleSubmit(onSubmit)">
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">
    
    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm chi nhánh
      </h3>
    </div>

    <div class="w-full" slot="body">
      
      <div class="grid grid-cols-6 gap-5">
        
        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptendd" class="select-none cursor-pointer">Tên địa điểm<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <ValidationProvider 
              vid="formData.addressTitle"
              name="Tên địa điểm" rules="required" v-slot="{ errors }">
               
            <InputType
              input-type="text"
              v-model="formData.addressTitle"
              id="modal-nhaptendd"
              name="addressTitle"
              placeholder="Nhập tên địa điểm"
              input-class="cms-input__default">
            </InputType>
            <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptensdt" class="select-none cursor-pointer">Số điện thoại<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <ValidationProvider 
              vid="phone"
              name="Số điện thoại" 
              rules="required|vietnamphone" 
              v-slot="{ errors }">
              <InputType
                input-type="text"
                id="modal-nhaptensdt"
                name="phone"
                v-model="formData.phone"
                placeholder="Nhập số điện thoại"
                input-class="cms-input__default">
              </InputType>
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptenemail" class="select-none cursor-pointer">Email</label>
          </div>
          <div class="w-full">
            
            <InputType
              input-type="text"
              id="modal-nhaptenemail"
              name="email"
              v-model="formData.email"
              placeholder="Nhập email"
              input-class="cms-input__default">
            </InputType>
            
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptendc" class="select-none cursor-pointer">Địa chỉ<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <ValidationProvider 
              vid="address"
              name="Địa chỉ" 
              rules="required"
              v-slot="{ errors }">
            <InputType
              input-type="text"
              id="modal-nhaptendc"
              name="address"
              v-model="formData.address"
              placeholder="Nhập địa chỉ"
              input-class="cms-input__default">
            </InputType>
            <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>

        <!-- <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quốc gia</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="optionDataSelect1"/>
          </div>
        </div> -->

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Tỉnh / Thành phố<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <ValidationProvider 
              vid="city"
              name="Tỉnh / Thành phố" 
              rules="required"
              v-slot="{ errors }">
            <SelectOption name="city" 
              @change="onChangeCity"
              v-model="formData.city"
              :option-data="cities"/>
            <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>

          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quận/ huyện<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <ValidationProvider 
              vid="district"
              name="Quận/ huyện" 
              rules="required"
              v-slot="{ errors }">
              <SelectOption 
                 @change="onChangeDistrict"
                v-model="formData.district"
                :option-data="districts"/>
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Phường/ Xã<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <ValidationProvider 
              vid="ward"
              name="Phường/ Xã" 
              rules="required"
              v-slot="{ errors }">
            <SelectOption v-model="formData.ward" :option-data="wards"/>
            <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>


      </div>

    </div>

    <template slot="footer">
      <div class="md:flex">
        <div class="p-0 flex-1 md:flex items-center">
          <div class="cms-checkbox ml-0 no-mr">
            <input 
              type="checkbox"
              id="check-is-primary"
              v-model="formData.isShippingAddress"
              />
            <label for="check-is-primary" 
              class="text-standardCMS text-menuItem text-14px">
                <span class="square"><span class="square-inner"></span></span>
                <h3 class="ml-2">Địa chỉ lấy hàng</h3>
            </label>
          </div>

          <div class="cms-checkbox ml-2 no-mr">
            <input 
              type="checkbox"
              id="check-is-default"
              v-model="formData.isDefault"
              />
            <label for="check-is-default" 
              class="text-standardCMS text-menuItem text-14px">
                <span class="square"><span class="square-inner"></span></span>
                <h3 class="ml-2">Địa chỉ mặc định</h3>
            </label>
          </div>

         
        </div>

        <ul class="md:text-right sm:mt-5 list-none flex-1 items-center">
          <li class="inline mr-5">
            <button @click="$emit('close')" type="button" class="cms-button cms-button-white">
             Hủy
            </button>
          </li>
          <li class="inline">
            <button type="submit"
              class="cms-button cms-button-blue">
              Lưu
            </button>
          </li>
        </ul>
      </div>
    </template>
    
  </Modal>
  </form>
  </ValidationObserver>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';
import { create, get as getStoreDataEdit, update } from '@/apis/store-address.js';
import { mapGetters } from "vuex";

const defaultData = {
  addressTitle: '',
  phone: '',
  email: '',
  address: '',
  country: 'VN',
  city: '',
  district: '',
  ward: '',
  isShippingAddress: false,
  isDefault: false,
}

export default {
  components: {
    Modal,
    SelectOption,
    InputType
  },
  props: [
    'initData'
  ],
  data(){
    return {
      formData: defaultData,
    };
  },
  computed: {
    ...mapGetters([
      "cities",
      "districts",
      "wards"
    ])
  },
  created() {
    this.$store.dispatch('getCity');
    if( this.initData ){
      this.$store.dispatch('getDistrictByCity', this.initData.city );
      this.$store.dispatch('getWardByDistrictCode', this.initData.district );
    }
  },
  mounted() {
    if( this.initData ){ this.getEditData() }
  },
  methods: {
    
    async onSubmit() {
      if( this.initData ){
        const updateData = Object.keys(this.formData).reduce((object, key) => {
          if (key !== 'id' && key !== 'fullAddress' ) {
            object[key] = this.formData[key]
          }
          return object
        }, {})

        const response = await update( this.initData.id, updateData );
        if( response ){
          this.$toastr.s('Sửa thành công')
        }
      }else{
        const response = await create(this.formData);
        if( response ){
          this.$toastr.s('Tạo thành công')
        }

        
      }
     
    },

    getEditData(){
      getStoreDataEdit(this.initData.id).then( res => this.formData = res )
    },

    onChangeCity(e){
      this.$store.dispatch('getDistrictByCity', e.target.value )
      this.$store.dispatch('resetWard');
      this.district = '';
      this.ward = '';
    },
    onChangeDistrict(e){
      this.$store.dispatch('getWardByDistrictCode', e.target.value );
      this.ward = '';
    }
  },
 
};
</script>

<style lang="scss">
.error{
  font-size: 12px;
  color: red;
}
</style>
