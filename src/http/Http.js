import axios from 'axios'
import Store from '../store/index'

const baseURL = process.env.URI_API_CMD === 'start' ? '/' :  process.env.URI_API_BASEURL;
function hideLoading(){
    let loading = Store.showLoading*1 - 1
    if(loading< 1){
        // setTimeout(() => {
            Store.toggleLoading( 0 )
        // }, 500);
        return false;
    }
    Store.toggleLoading( loading )
}
function showLoading() {
    let loading = Store.showLoading + 1
    Store.toggleLoading( loading )
}
// 没有loading的接口
// const noLoadingAr
// http request 拦截器
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.interceptors.request.use((config) => {
    showLoading()
    if (Store.isLogin) {
        config.headers["token"] = Store.users && Store.users.access_token ? Store.users.access_token : ''
    }
    return config
}, error => {
    Store.Toast('网络异常')
    return Promise.reject(error)
})


// http response 拦截器
axios.interceptors.response.use(response => {
    let res = response.config
    hideLoading()
    return response
}, error => {
    hideLoading();
    let errs = error && error.response
    if( errs && errs.status === 302) {
        localStorage.clear()
        (window.location.href = '/signin');
    }
    return Promise.reject(error)
})

const defaultOptions = {
    baseURL: baseURL,
    method: 'get',
    // timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials:false,
}

const  Http = {
    base: (options) => {
        return new Promise((resolve, reject) => {
            axios({...defaultOptions, ...options}).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    get: function (url, params) {
        let options = {
            url:url,
            method: 'get',
            params:params
        };
        return this.base(options);
    },
    post: function (url, params) {
        let options = {
            url:url,
            method: 'post',
            data:params,
        };
        return this.base(options);
    },
    
    put: function (url, params) {
        let options = {
            url:url,
            method: 'put',
            data:params
        };
        return this.base(options);
    },
    delete: function (url, params) {
        let options = {
            url:url,
            method: 'delete',
            data:params
        };
        return this.base(options);
    },

}

export default Http;
