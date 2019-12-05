import Http from "./Http"
// import Store from '../store/index'
const API = {
    /*登录 xin_ljh
    * phone :手机号
    * code ： 验证码 000000
    * */
    login: function (phone, code) {
        let f = new FormData()
        f.append('phone', phone)
        f.append('code', code)
        return Http.post("/frontend/login", f);
    },
    home(){
        return Http.get('frontend/home')
    },
    getCityDeploy(){
        /***
         *    获取地区接口（新增）
         *    {
                "code": 200,
                "message": "",
                "data": [
                    {
                    "id": "2",
                    "pid": "1",
                    "name": "石家庄市",
                    "city_code": "130100",
                    "grade": "2",
                    "create_time": "0000-00-00 00:00:00",
                    "update_time": "2019-11-21 10:38:47",
                    "is_delete": "0"
                    },
                ]
               }
         */
        return Http.get('frontend/getCityDeploy')
    },
    /** 
    * 获取图形验证码 xin_ljh
    *  get 请求
    *  phone 手机后
    */
    getCodeImg: function (phone) {
        return Http.get(`/third/getimgcode?phone=${phone}`)
    },
    /**
     * 发送短信验证码接口 xin_ljh
     * post 
     * phone 手机号
     * code 图形验证码
    */
    getCode: function (phone, code) {
        let f = new FormData()
        f.append('phone', phone)
        f.append('code', code)
        return Http.post(`/third/sendcode`, f)
    },
    /**
     * 获取 邀请码 xin_ljh
     * post 
    */
    getVitCode: function (openid) {
        let f = new FormData()
        f.append('open_id', openid)
        return Http.post("/frontend/getUserCode", f)
    },
    /**
     * 注册 xin_ljh
     * post 
     * phone 手机号
     * code 验证码
     * inviteCode 邀请码
     * openid open_id
    */
    register: function (phone, code, inviteCode, openid) {
        let f = new FormData()
        f.append('phone', phone)
        f.append('code', code)
        f.append('inviteCode', inviteCode)
        f.append('open_id', openid)
        return Http.post("/frontend/register", f)
    },
    /**
     *8.提交审核结果-平安 xin_ljh
     *post
     *参数:
     *order_id
     *analyse_result  #2成功，3失败
    */
    commitPingAn: function (order_id, analyse_result) {
        let f = new FormData()
        f.append('order_id', order_id)
        f.append('analyse_result', analyse_result)
        return Http.post("/frontend/AuditResults", f)

    },
    commitAuthorize: function(order_id, status){
        /**
         *   order_id 
             authorize_status  #授权结果 1完成 -1失败
         */
        let f = new FormData()
        f.append('order_id', order_id)
        f.append('status', status)
        return Http.post("/frontend/authorize", f)
    },
    /**
     * 9 数据分析结果获取接口 xin_ljh
     * post
     *参数:
     *order_id
     {
          "code": 200,
          "message": "",
          "data": {
         "analyse_result": "2"  #'0未处理，2成功，3失败'
         }
     }
    */
    getAnalyslsData: function (order_id) {
        let f = new FormData();
        f.append("order_id", order_id)
        return Http.post("frontend/AnalyseResult", f)

    },
    /***
     * 
     * /
      /*重置密码发短信
     * phone：手机号
     * value:
     * */
    registerPassword: function (mobile, code) {
        return Http.post("/authentication/resetPasswordMsg", {
            "mobile": mobile,
            "code": code
        });
    },
    /*注册发短信
    * phone：手机号
    * value:
    * */
    registerMsg: function (mobile, code) {
        return Http.post("authentication/register/msg", {
            "mobile": mobile,
            "code": code
        });
    },
    /**
    *注册获取验证码
    *mobile：手机号
    **/
    registerImg: function (mobile) {
        return Http.get(`/authentication/img/${mobile}`)
    },

    /**
     * 验证短信
     *
     * mobile: 注册手机号
     * code: 短信验证码
     * 返回
     * status 0
     */

    validate_msgCode: function (mobile, code) {
        return Http.get(`authentication/validate/msgCode/${mobile}/${code}`);
    },

    /**
     * 验证手机号是否注册过
     * mobile: 手机号
     * 返回参数：
    "map": {
        "code": "0", //0 已注册    1未注册
        "message": "手机号已经注册"
    }
     */
    validate_mobile: function (mobile) {
        return Http.get(`authentication/validate/${mobile}`);
    },


    /*注册
   * mobile：手机号
   * password：密码
   * message：短信验证码
   * origin: A android  D H5
   * */
    // register: function (mobile, password, message) {
    //     return Http.post("authentication/register", {
    //         mobile,
    //         password,
    //         message,
    //         origin: Store.origin
    //     });
    // },

    /*重置密码发短信
    * mobile：手机号
    * */
    resetPasswordMsg: function (mobile) {
        return Http.post("authentication/resetPasswordMsg", {
            mobile
        });
    },

    /*重置密码
    * mobile：手机号
    * password：密码
    * nickName：别名
    * message：短信验证码
    * */
    resetPassword: function (mobile, message, password) {
        return Http.post("authentication/resetPassword", {
            mobile,
            password,
            message
        });

    },
    /*退出登录
    *customerId：客户id
    *token：token
    *  */
    logout: function (customerId, token) {
        return Http.post("authentication/logout", {
            customerId: customerId,
            token: token
        });
    },
    /*首页
    token: token
    */
    IndexEnter: function () {
        return Http.post("frontend/home");
    },
    /*我的订单
    token
    page  默认1
    page_size 默认10
    */
    MYorder: function (page, page_size) {
        let f = new FormData()
        f.append('page', page)
        f.append('page_size', page_size)
        return Http.post("frontend/orderList", f)
    },
    /* 客户基本信息接口 
         参数:
         token 
         name  : 用户名字
         phone : 用户手机号
         userid_card_num :用户的身份证号
         product_id : 产品id 从query中获取 
    */
    Interface: function (user, spouse, product_id) {
        let f = new FormData()
        f.append('name', user.name);
        f.append('phone', user.phone);
        f.append('userid_card_num', user.id);
        f.append('product_id', product_id);
        f.append('marriage', user.marriage);
        f.append('city_code', user.city_code);
        f.append('spouse_name', spouse.spouse_name);
        f.append('spouse_phone', spouse.spouse_tel);
        f.append('spouse_userid_card_num', spouse.spouse_idcard);
        return Http.post("frontend/BasicInformation", f);
    },
    /*
      获取身份证审核结果
      order_id 
    */
    CardImg: function (order_id) {
        let f = new FormData();
        f.append('order_id', order_id);
        return Http.post("frontend/CardImgVerify", f);
    },
    /*提交验证码接口
      参数:
      order_id 
      number  #发送次数
      code   #验证码
    */
    Verificationss: function (order_id, number, code) {
        console.log(order_id, number, code)
        let f = new FormData();
        f.append('order_id', order_id);
        f.append('number', number);
        f.append('code', code);
        return Http.post("frontend/referSms", f);
        // return Promise.resolved(12312)
    },
    /*
    验证码未收到上报
    参数:
    order_id 
    */
    notReceived: function (order_id) {
        let f = new FormData();
        f.append('order_id', order_id);
        return Http.post("frontend/NotReceivedSms", f)
    },
    /*
     身份证图片上传接口
     post
     需要登陆
     order_id 订单id
     card_img_f 身份证正面
     card_img_s 身份证反面
    */
    addCarding: function (order_id, card_img_f, card_img_s) {
        //   return 111
        let f = new FormData();
        f.append('order_id', order_id);
        f.append('card_img_f', card_img_f);
        f.append('card_img_s', card_img_s);
        return Http.post("frontend/addCardImg", f);
    },
    /*
      完善信息接口
      name
      userid_card_num
    */
    improveIn: function (name, userid_card_num) {
        let f = new FormData();
        f.append('name', name);
        f.append('userid_card_num', userid_card_num);
        return Http.post("frontend/improveInformation", f);
    },
    /*
    根据订单号获取客户信息
    order_id=18
    */
    orderCustomer: function (order_id) {
        let f = new FormData();
        f.append('order_id', order_id);
        return Http.post("frontend/orderCustomer", f);
        // return Http.post("frontend/NotReceivedSms", f)
    },
    addCarding: function (order_id, card_img_f, card_img_s) {
        /*
         身份证图片上传接口
         post
         需要登陆
         order_id 订单id
         card_img_f 身份证正面
         card_img_s 身份证反面
        */
        //   return 111
        let f = new FormData();
        f.append('order_id', order_id);
        f.append('card_img_f', card_img_f);
        f.append('card_img_s', card_img_s);
        return Http.post("frontend/addCardImg", f);
    },
    addCarImg: function (order_id, car_dash_board_img, car_driving_license_img ){
        /**
         *   order_id 
             car_dash_board_img #车辆仪表盘
             car_driving_license_img #车辆行驶证
         */
        let f = new FormData();
        f.append('order_id', order_id);
        f.append('car_dash_board_img', car_dash_board_img);
        f.append('car_driving_license_img', car_driving_license_img);
        return Http.post("frontend/addCarImg", f);
    },
    orderCarImgStatus: (order_id, status)=>{
        /**
         *  跳过车辆信息上传
         *  frontend/orderCarImgStatus
         *  order_id 
            status  #结果 0正常 -1跳过
         * 
         */
        let f = new FormData();
        f.append('order_id', order_id)
        f.append('status', status)
        return Http.post('frontend/orderCarImgStatus', f)
    },
    /*
      完善信息接口
      name
      userid_card_num
    */
    improveIn: function (name, userid_card_num, city_code) {
        let f = new FormData();
        f.append('name', name);
        f.append('userid_card_num', userid_card_num);
        f.append('city_code', city_code);
        return Http.post("frontend/improveInformation", f)
    },
    firstSMS(order_id) {
        /**
         * post
            参数:
            order_id
            返回信息：
            {
            "code": 200,
            "message": "",
            "data": {
                "code_one_process":  #0未处理，1成功，-1失败
            }
            }
         */
        let f = new FormData();
        f.append('order_id', order_id);
        return Http.post("frontend/CodeOneProcess", f)
    },
    orderOpinionStatus: (order_id, status)=> {
        /**
         *   frontend/orderOpinionStatus
         *   审核意见是否同意（新增）
         *   order_id 
         *   status  #结果 1同意 -1不同意
         */
        let f = new FormData()
        f.append('order_id', order_id)
        f.append('status', status)
        return Http.post('frontend/orderOpinionStatus', f)
    },
    getAreaList( grade, p_code ){
        /**
         *   获取地区接口
         *      grade=1  获取省
                grade=2  获取地级市
                p_code=上级编码
         */
        let f = new FormData()
        f.append('grade', grade)
        f.append('p_code', p_code||'')
        return Http.post('frontend/getAreaList', f)
    }
}

export default API

