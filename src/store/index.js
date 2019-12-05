import { action , observable, computed,autorun } from 'mobx'
import { Storage, isApp } from '../utils/index'
import api from '../http/API'
import { removeState } from '../utils/index'

class Store {
    // @observable isLogin = ""
    @observable toastMsg = ''
    @observable showLoading = 0
    @observable RouteNow ="/"
    @observable users = Storage.getItem("loginUser") && JSON.parse(Storage.getItem("loginUser"))
    @observable product = Storage.getItem("product") && JSON.parse(Storage.getItem("product"))
    @computed get isLogin(){
        return !!this.users
    }
    @action toggleLoading(val){
        this.showLoading = val*1
    }
    @action Toast(msg, time){
        this.toastMsg = msg
        setTimeout(() => {
            this.toastMsg = ''
        }, time || 3000);
    }

    @action updateUser(val) {
        this.users = val;
        Storage.setItem("loginUser", JSON.stringify(val))
    }
    @action updateProduct(val) {
        this.users = val;
        Storage.setItem("product", JSON.stringify(val))
    }

}
let Stores = new Store()

export default Stores