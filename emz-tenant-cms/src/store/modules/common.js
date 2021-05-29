import { getCity, getDistrictByCityCode, getWardByDistrictCode } from '@/apis/common';

const common = {
    state: {
        cities: [],
        districts: [],
        wards: ''
    },
    getters: {
        cities: state => {
            return state.cities
        },
        districts: state => {
            return state.districts
        },
        wards: state => {
            return state.wards
        }
    },
    mutations: {
        setCity: (state, payload) => {
            state.cities = payload
        },
        setDistrict: (state, payload) => {
            state.districts = payload
        },
        setWard: (state, payload) => {
            state.wards = payload
        },
    },
    actions: {
        getCity: async(context) => {
            if( context.state.cities.length == 0 ){
                const res = await getCity()
                context.commit('setCity', res.data )
            }
        },
        getDistrictByCity: async(context, cityCode) => {
            const res = await getDistrictByCityCode(cityCode)
            context.commit('setDistrict', res.data )
        },
        getWardByDistrictCode: async(context, districtCode) => {
            const res = await getWardByDistrictCode(districtCode)
            context.commit('setWard', res )
        }
    }
}

export default common