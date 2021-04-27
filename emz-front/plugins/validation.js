import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, min, email, regex, alpha, integer } from 'vee-validate/dist/rules';


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required',required);
extend('min', min);
extend('email', email   );
extend('regex', regex);
extend('alpha', alpha);
extend('integer', integer);
