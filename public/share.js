function shareToApp(obj,successCb,cancelCb) {
  wx.config({
    debug: false,
    appId: obj.appId,
    timestamp: obj.timestamp,
    nonceStr: obj.nonceStr,
    signature: obj.signature,
    jsApiList: [ // 所有要调用的 API 都要加到这个列表中
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'hideMenuItems',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'translateVoice',
      'startRecord',
      'stopRecord',
      'onRecordEnd',
      'playVoice',
      'pauseVoice',
      'stopVoice',
      'uploadVoice',
      'downloadVoice',
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'getNetworkType',
      'openLocation',
      'getLocation',
      'hideOptionMenu',
      'showOptionMenu',
      'closeWindow',
      'scanQRCode',
      'chooseWXPay',
      'openProductSpecificView',
      'addCard',
      'chooseCard',
      'openCard'
    ],
  });
  wx.ready(function () { //必须写在wx.ready里面
    console.log(window.location.href,1213)
    var link = window.location.href;
    var imgPath = obj.imgPath;
    var title = obj.title;
    var desc = obj.desc;
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgPath, // 分享图标
      success: function () {
        typeof successCb == 'function' && successCb()
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
          typeof cancelCb == 'function' && cancelCb()
      }
    });
    wx.onMenuShareAppMessage({
      title:title,
      desc: desc,
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgPath, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            typeof successCb == 'function' && successCb()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            typeof cancelCb == 'function' && cancelCb()
        }
    });
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: desc,
      link: link, // 分享链接
      imgUrl: imgPath, // 分享图标
        success: function () {
            typeof successCb == 'function' && successCb()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            typeof cancelCb == 'function' && cancelCb()
        }
    });
    wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc:desc,
      link: link, // 分享链接
      imgUrl: imgPath, // 分享图标
        success: function () {
            typeof successCb == 'function' && successCb()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            typeof cancelCb == 'function' && cancelCb()
        }
    });
    wx.onMenuShareQZone({
      title:title,
      desc: desc,
      link: link, // 分享链接
      imgUrl: imgPath, // 分享图标
        success: function () {
            typeof successCb == 'function' && successCb()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            typeof cancelCb == 'function' && cancelCb()
        }
    });
  });
}