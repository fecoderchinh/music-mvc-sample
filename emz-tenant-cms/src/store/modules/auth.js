import { currentUser } from '../../helpers/user'
const user = currentUser()

const auth = {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        role: ''
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        },
        currentUser: state => {
            return state.currentUser
        },
        role: state => {
            return state.role
        }
    },
    mutations: {
        login: (state, payload) => {
            state.isLoggedIn = true
            state.role = payload.role
            state.currentUser = Object.assign({}, { user: payload.user }, {token: payload.token}, { role: payload.role } )
            localStorage.setItem('user', JSON.stringify(state.currentUser))
            
        },
        logout: (state) => {
            localStorage.removeItem('user')
            state.isLoggedIn = false
            state.currentUser = null
            state.role = ''
        },
    },
    actions: {
        login: (context, payload) => {
            context.commit('login', payload)
        },
        logout: ({commit}) => {
            commit('logout')
            
        }
    }
}

export default auth