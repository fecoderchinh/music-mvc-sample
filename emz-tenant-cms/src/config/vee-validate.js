import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, 
    localize } from 'vee-validate';
import vi from 'vee-validate/dist/locale/vi.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
})
localize('vi', vi)

extend('vietnamphone', value => {
    if( /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value) ){
        return true
    }
    return 'Số điện thoại Việt nam không hợp lệ'
})

// Install components globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)