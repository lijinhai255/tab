export const Storage = {
    setItem(key, value) {
        key && value && localStorage.setItem(key, value)
    },
    getItem: (key) => {
        return (key && localStorage.getItem(key)) || ''
    },
    removeItem: (key) => {
        key && localStorage.removeItem(key)
    },
    clear: () => {
        localStorage.clear()
    }
}
//定义 会话存储的方法
export const SessionStorage = {
    setItem(key, value) {
        key && value && sessionStorage.setItem(key, value)
    },
    getItem: (key) => {
        return (key && sessionStorage.getItem(key)) || ''
    },
    removeItem: (key) => {
        key && sessionStorage.removeItem(key)
    },
    clear: () => {
        sessionStorage.clear()
    }
}

export const renderPhoneNumber = (phone) => {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

export const urlkey = (url) => {
    let params = {};
    if (url) {
        let urls = url.split("?");
        if (urls.length > 1) {
            let urls = url.split("?");
            let arr = urls[1].split("&");
            for (let i = 0, l = arr.length; i < l; i++) {
                let a = arr[i].split("=");
                params[a[0]] = a[1];
            }
        }
    }
    return params;
}

export const Validate = {
    validmobile: (value, callback) => {
        if (!value || !/^1\d{10}/.test(value)) {
            return false
        }
        return true
    },
    validPwd: (value, callback) => {
        var m = /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
        if (value.match(m)) {
            callback()
        } else {
            return callback(new Error('密码为6-18位字母和数字组合'))
        }
    },
    validCode: (value, callback) => {
        if (!value || value.length != 6) {
            return callback(new Error('请输入正确的验证码'))
        } else {
            callback()
        }
    },
    validName: (name) => {
        let reg = /^[\u4e00-\u9fa5]{2,}$/;
        return reg.test(name.trim())
    },
    validIDCard: (card) => {
        if (!card) return false;
        card = card.trim()
        let reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        let reg15 = /^[1-9]\d{5}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}$/;
        // console.log(reg.test(card),card)
        return reg.test(card) || reg15.test(card)
    },
    validMarry:(marry)=>{
        if (!marry) return false;
        return true
    }

}
// iphonex xs xr xsmax 判断
export function isIphonX() {
    // iPhone X、iPhone XS
    var isIPhoneX = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812;
    // iPhone XS Max
    var isIPhoneXSMax = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896;
    // iPhone XR
    var isIPhoneXR = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896;
    // console.log(isIPhoneX,isIPhoneXR,isIPhoneXSMax,'机型判断')
    return isIPhoneX || isIPhoneXR || isIPhoneXSMax
}
export function isIphone() {
    return /iphone/gi.test(window.navigator.userAgent)
}
// history 是否存在
export function isHistory() {
    return window.history && window.history.length
}
// 类名拆分
export function devideClass(...args) {
    return args.join(' ');
}

export function toMoneyString(val) {
    if (!val) return '';
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function isNotEmpty(val) {
    return val && val.length;
}

function closeWindow() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        window.WeixinJSBridge.call('closeWindow'); //微信
    } else if (ua.indexOf("alipay") != -1) {
        window.AlipayJSBridge.call('closeWebview'); //支付宝
    } else if (ua.indexOf("baidu") != -1) {
        window.BLightApp.closeWindow(); //百度
    } else {
        window.close(); //普通浏览器
    }
}

// 返回时执行的函数
function _listenerFun() {
    pushHistory(window.location.href)
    popState.cb()
}

function pushHistory(url) {
    var url = url || window.location.href
    window.history.pushState({ page: 1 }, null, url);
}
/**
 *     返回监控
 *     cb   Function  成功的函数
 * 
 */
function popState(cb) {
    // console.log(cb,"cbcbcb")
    popState.cb = cb || function () { }
    pushHistory()
    window.addEventListener('popstate', _listenerFun);

}
function removeState() {
    popState.modal = null
    window.removeEventListener('popstate', _listenerFun);
}

function getNowFormatDate(param) {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var seperator3 = '+';
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();
    if (m >= 1 && m <= 9) {
        m = "0" + m;
    }
    if (d >= 0 && d <= 9) {
        d = "0" + d;
    }
    if (param == 'ymd') {
        var currentdate = y + seperator1 + m + seperator1 + d;
    } else {
        var currentdate = y + seperator1 + m + seperator1 + d
            + seperator3 + h + seperator2 + i
            + seperator2 + s;
    }
    return currentdate;
}

export function debounce(cb, t) {
    let timeout = null;
    return function (...args) {
        if (timeout) {
            return;
        }
        typeof cb === 'function' && cb( ...args)
        timeout = setTimeout(function(){
            timeout = null
        }, t ? t : 1000)
    }
}

//# 图片压缩
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
function canvasPress(file, type = "image/png", wLimit = 2000) {
    var img = new Image();
    img.src = window.URL.createObjectURL(file);
    var imgWidth, imgHeight;
    return new Promise((resolve, reject) =>
        img.onload = function () {
            imgWidth = img.width;
            imgHeight = img.height;
            let ctxW, ctxH;
            if (imgWidth > imgHeight && imgWidth > wLimit) {
                ctxW = wLimit;
                ctxH = wLimit * imgHeight / imgWidth
            } else if (imgHeight > imgWidth && imgHeight > wLimit) {
                ctxH = wLimit;
                ctxW = wLimit * imgWidth / imgHeight
            } else {
                ctxW = imgWidth
                ctxH = imgHeight
            }
            var canvas = document.createElement("canvas");
            canvas.width = ctxW
            canvas.height = ctxH
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, ctxW, ctxH);
            ctx.drawImage(img, 0, 0, ctxW, ctxH);
            // let base64 = canvas.toDataURL(type, .5);
            // return dataURLtoBlob(base64)
            // console.dir(file.type);return;
            canvas.toBlob(function (Blob) {
                resolve(Blob)
            }, 'image/png', .5)
        })
}
function carouselFun(wraperEl, options = {}) {
    console.log(wraperEl, options,"wraperEl")
    var interTimer = options.interTimer || 5;
    var interAutorun = typeof options.interAutorun === 'boolean' ? options.interAutorun : true 
    var moveDirection = options.moveDirection === 'vertical' ? 'vertical' : 'horizontal'
    var wraper = wraperEl
    var itemEls = wraperEl.childNodes
    var itemLen = itemEls.length
    var inter = null;
    var timeout = null;
    if(itemLen<=1)return ;
    var carouselObj = {
        startInter,
        removeInter,
        run: menualRun
    }
    // 当前的展示项
    var nowIndex = 0;
    function startInter() {
        clearInterval(inter)
        inter = setInterval(function () {
            run(1)
        }, interTimer * 1000)
        return carouselObj
    }
    function removeInter(){
        clearInterval(inter)
        inter = null;
        return carouselObj
    }
    interAutorun && interTimer && startInter();
    function devideClass() {
        return Array.prototype.join.call(arguments, ' ')
    }
    function removeClass(node, classStr) {
        console.log(node,classStr,121)
        var str = ''
        classStr = classStr.split(' ')
        node.className.split(' ').forEach(function (item,i) {
            classStr.indexOf(item) < 0 && i === 0 && (str = item);
            classStr.indexOf(item) < 0 && i !== 0 && (str += ' ' + item);
        });
        node.className = str
        console.log(node.className,'ljh')
    }
    function addClass(node, classStr) {
        var cls = node.className.split(' ')
        var classStr = classStr.split(' ')
        classStr.forEach(function (item) {
            cls.indexOf(item) < 0 && (node.className += ' ' + item)
        })
    }
    // 移动的函数
    function move(key, beforeIndex, nowIndex) {
        console.log('也执行了')
        itemEls[beforeIndex].addEventListener('animationend', animationendFun());
        var obj = {
            'horizontal': function(){
                switch (key) {
                    case 1:
                        addClass(itemEls[beforeIndex], 'carousel_h_left')
                        addClass(itemEls[nowIndex], 'carousel_next carousel_h_left')
                        break;
                    case -1:
                        addClass(itemEls[beforeIndex], 'carousel_h_right')
                        addClass(itemEls[nowIndex], 'carousel_prev carousel_h_right')
                        break;
                }
            },
            'vertical':function(){
                switch (key) {
                    case 1:
                        addClass(itemEls[beforeIndex], 'carousel-v-top')
                        addClass(itemEls[nowIndex], 'carousel-next carousel-v-top')
                        break;
                    case -1:
                        addClass(itemEls[beforeIndex], 'carousel-v-bottom')
                        addClass(itemEls[nowIndex], 'carousel-prev carousel-v-bottom')
                        break;
                }
            }
        }
        obj[moveDirection]();
    }
    // 移动结束，清除类名
    function animationendFun() {
        console.log('也只从了')
        // removeClass(this, 'active carousel-h-left carousel-h-right carousel-v-bottom carousel-v-top')
        removeClass(itemEls[nowIndex], 'carousel-next carousel-h-left carousel-h-right carousel-prev carousel-v-top carousel-v-bottom')
        addClass(itemEls[nowIndex], 'active')
        run.moveLock = false;
    }
    /**
     *  轮播执行函数, 计算出当前的元素和下一个元素index和要移动的方向
     *  @params  key  Number  移动的方向
     *               -1  向左移动
     *                1   向右移动
     *  @params  index number  下一个将要显示的索引
     *    当index 存在时，key可以为null、undefined，这时会自动生成一个key，
     *    当然也可以手动指定一个key，规定移动的方向
    */
    function run(key, index) {
        console.log('执行了')
        // 当前展示的 item
        var beforeIndex = nowIndex;
        console.log(beforeIndex,121)
        if (run.moveLock) return carouselObj;
        run.moveLock = true;
        if (index) {
            if (index === beforeIndex) return carouselObj;
            (itemLen > index && index >= 0 && !key) && (key = index > beforeIndex ? 1 : -1)
        }

        switch (key) {
            case 1:
                // 将要展示的 item
                nowIndex = index ? index : (beforeIndex + key) >= itemLen ? 0 : beforeIndex + key
                move(1, beforeIndex, nowIndex)
                break;
            case -1:
                nowIndex = index ? index : (beforeIndex + key) < 0 ? itemLen - 1 : beforeIndex + key
                move(-1, beforeIndex, nowIndex)
                break;
            default:  // 初始化
                // if (itemArr.length <= 1) {
                //     stopCarousel(inter);
                // }
        }
        return carouselObj
    }
    run.prototype.moveLock = false;
    // 手动控制轮播图运动
    function menualRun(key, index){
        clearInterval(inter)
        clearTimeout(timeout)
        run(key, index)
        interAutorun && (timeout = setTimeout(function(){
            startInter()
        },interTimer*1000));
    }
    window.addEventListener('visibilitychange',function(){
        var isHidden = document.hidden
        var visible = document.visibilityState
        isHidden && removeInter()
        !isHidden && startInter()
    })
    return carouselObj;
}
export {
    popState,
    removeState,
    pushHistory,
    getNowFormatDate,
    canvasPress,
    carouselFun
}





