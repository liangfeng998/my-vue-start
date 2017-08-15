import {login, logout, getInfo} from '@/api/loginService';
import {getToken, setToken, removeToken} from '@/utils/auth';
import {getAdminInfo} from '@/api/demoService'

const user = {
    state: {
        adminInfo: {
            id: '',
            avatar: 'default.jpg'
        },
        token: getToken(),
        name: '',
        roleType: ''
    },

    mutations: {
        saveAdminInfo: (state, adminInfo) => {
            state.adminInfo = adminInfo;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLETYPE: (state, role) => {
            state.roleType = role;
        }
    },

    actions: {
        async getAdminData({commit}) {
            try {
                const res = await getAdminInfo()
                if (res.status == 1) {
                    commit('saveAdminInfo', res.data);
                } else {
                    throw new Error(res)
                }
            } catch (err) {
                console.log('您尚未登陆或者session失效')
            }
        },
        // 获取用户信息
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getAdminInfo().then(response => {
                    const data = response.data;
                    //Todo:先测试一下
                    commit('SET_ROLETYPE', 'admin');
                    if (data) {
                        commit('SET_NAME', data.user_name);
                        commit('SET_AVATAR', data.avatar);
                    }
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },
        // 登录
        Login({commit}, userInfo) {
            const email = userInfo.email.trim();
            return new Promise((resolve, reject) => {
                login(email, userInfo.password).then(response => {
                    const data = response.data;
                    setToken(data.token);
                    commit('SET_TOKEN', data.token);
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },
        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_ROLES', []);
                    removeToken();
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },
        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            });
        }
    }
};

export default user;
