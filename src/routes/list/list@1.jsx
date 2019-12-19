import React, { Component } from 'react'

import appstyle from './list.module.scss';
import BScroll from "better-scroll"
class list extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bscroll: {},
      nav: ['全部', '房产', '实用工具', '基金股票', '社保养老', '商业保险'],
      currentIndex: 0
    }
  }
  nav = {
    from: 0,
    maxScroll: 0,
    reqId: null
  }
  bscroll=null
  navScroll = null
  componentDidMount() {
    // console.log(this.refs.wrapper,"121")
    this._initScroll()
    this.nav.maxScroll = this.navMain.offsetWidth - window.screen.width
  }
  _initScroll() {
    const wrapper = this.refs.wrapper
<<<<<<< .mine
    const navwrap = this.refs.navwrap
    // 获取所有的子元素 indexListContent.children[1].children; 
    const navs = this.refs.nav;
    navs.style.width = `${this.state.nav.length * 1.4}rem`
    const navchild = navs.childNodes
    this.navScroll = new BScroll(navwrap, {
      scrollX: true,
      scrollY: false,
      click: true
    })
||||||| .r2332
    const navwrap = this.refs.navwrap
    // 获取所有的子元素 indexListContent.children[1].children; 
    const navs = this.refs.nav;
    navs.style.width = `${this.state.nav.length * 1.4}rem`
    const navchild = navs.childNodes
    this.navScroll = new BScroll(navwrap, {
      scrollX: true,
      click: true
    })
=======
    // this.navScroll = new BScroll(navwrap, {
    //   scrollX: true,
    //   click: true,
    //   bounce: false,
    //   bounceTime: 0,

    // })
>>>>>>> .r2421
    // 初始化scroll
    this.bscroll = new BScroll(wrapper, {
      eventPassthrough: true,
      scrollY: true,
      probeType: 3,
      //上滑加载
      pullUpLoad: {
        //离底部还有多少距离 px
        threshold: 100,
        stop: 30
      },
      //下拉刷新
      pullDownRefresh: {
        //离底部还有多少距离 px
        threshold: -50,
        //停留的位置 距离顶部多少px
        stop: 30
      }
    })
    // 定义上滑方法
    this.bscroll.on('pullingUp', () => this._pullupFun())
    // 定义加载方法
    this.bscroll.on('pullingDown', () => this._pulldownFun())
  }
  _pullupFun() {
    const list = this.refs.list
<<<<<<< .mine
    list.classList.add(`${appstyle.pullUp}`);
||||||| .r2332
    list.classList.add(`${appstyle.pullDown}`);
    console.log(list,"121")
=======
    list.classList.add(`${appstyle.pullDown}`);
    console.log(list, "121")
>>>>>>> .r2421
    //告诉bscroll已经完成了上滑操作
    this.bscroll.finishPullUp();
    // //刷新dom
    this.bscroll.refresh();
    console.log('上滑方法执行了')

  }
  //
  _pulldownFun() {
    const list = this.refs.list
    list.classList.add(`${appstyle.pullDown}`);
<<<<<<< .mine
||||||| .r2332
    console.log(list,"121")
=======
    console.log(list, "121")
>>>>>>> .r2421
    this.bscroll.finishPullDown();
    this.bscroll.refresh()
    console.log('加载方法执行了')
    setTimeout(() => {
      list.classList.remove(`${appstyle.pullDown}`);
    }, 2000)
  }
  //add
  renderNav() {
    return this.state.nav.map(
      (item, index) => <a
        key={index}
        className={+this.state.currentIndex === +index ? appstyle.active : ''}
        onClick={(ev) => this.onClickNav(index, ev.target)} >
        {item}
      </a>
    )
  }
  onClickNav(currentIndex, target) {
    let _this = this
    var left = target.offsetLeft -100 > 0 ? 
    (target.offsetLeft -100) > this.nav.maxScroll ?
    this.nav.maxScroll : target.offsetLeft -100 : 0
    let step = left > this.nav.from ? 1 : -1
    if( this.nav.from !== left ){
      window.cancelAnimationFrame(this.nav.reqId)
      this.nav.reqId = window.requestAnimationFrame(move);
      function move(){
        _this.nav.from += step
        console.log(step, _this.nav.from, left)
        _this.navwrap.scrollLeft = _this.nav.from
        if(_this.nav.from*step > left || _this.nav.from <= 0) {
          _this.nav.from = left  
          return window.cancelAnimationFrame(_this.nav.reqId);
        }
        _this.nav.reqId = window.requestAnimationFrame(move)
      }
    }
    // this.navwrap.scrollLeft = left
    this.setState({
      currentIndex
    })
  }
  render() {
    return (
      <div
        className={appstyle.mainList}
      >
        <div className={appstyle.banner}>
          <p className={appstyle.banner_text}>这个行业彻底火了！人才缺口高达170万</p>
        </div>
        <div className={appstyle.navWraper} ref={ r=> this.navwrap = r }>
          <div className={appstyle.nav} ref={ r=> this.navMain = r }>
            {this.renderNav()}
          </div>
        </div>
        <div className={appstyle.carousel} ref='wrapper'>
          <ul className={appstyle.carousel_copntent}  >
            <li className={appstyle.carousel_item}
              style={{ position: "relative" }}
              ref="list"
<<<<<<< .mine
               >
||||||| .r2332
               >
              <div 
              className={appstyle.content} 
                >
=======
            >
              <div
                className={appstyle.content}
              >
>>>>>>> .r2421
                <div className={appstyle.content_content}>
                  <dl>
                    <dt><img src="" /></dt>
                    <dd>
                      <h2> 半年仅赚2.28万，香飘飘奶茶不香了 </h2>
                      <p>咋回事儿？</p>
                      <p><span className={appstyle.left}>2019-10-28 <label className={appstyle.right}>11:52</label></span></p>
                    </dd>
                  </dl>
                  <dl>
                    <dt><img src="" /></dt>
                    <dd>
                      <h2> 半年仅赚2.28万，香飘飘奶茶不香了 </h2>
                      <p>咋回事儿？</p>
                      <p><span className={appstyle.left}>2019-10-28 <label className={appstyle.right}>11:52</label></span></p>
                    </dd>
                  </dl>
                  <dl>
                    <dt><img src="" /></dt>
                    <dd>
                      <h2> 半年仅赚2.28万，香飘飘奶茶不香了 </h2>
                      <p>咋回事儿？</p>
                      <p><span className={appstyle.left}>2019-10-28 <label className={appstyle.right}>11:52</label></span></p>
                    </dd>
                  </dl>
                  <dl>
                    <dt><img src="" /></dt>
                    <dd>
                      <h2> 半年仅赚2.28万，香飘飘奶茶不香了 </h2>
                      <p>咋回事儿？</p>
                      <p><span className={appstyle.left}>2019-10-28 <label className={appstyle.right}>11:52</label></span></p>
                    </dd>
                  </dl>
                  <dl>
                    <dt><img src="" /></dt>
                    <dd>
                      <h2> 半年仅赚2.28万，香飘飘奶茶不香了 </h2>
                      <p>咋回事儿？</p>
                      <p><span className={appstyle.left}>2019-10-28 <label className={appstyle.right}>11:52</label></span></p>
                    </dd>
                  </dl>
                  <dl>
                    <dt><img src="" /></dt>
                    <dd>
                      <h2> 半年仅赚2.28万，香飘飘奶茶不香了 </h2>
                      <p>咋回事儿？</p>
                      <p><span className={appstyle.left}>2019-10-28 <label className={appstyle.right}>11:52</label></span></p>
                    </dd>
                  </dl>
                  <dl>
                    <dt><img src="" /></dt>
                    <dd>
                      <h2> 半年仅赚2.28万，香飘飘奶茶不香了 </h2>
                      <p>咋回事儿？</p>
                      <p><span className={appstyle.left}>2019-10-28 <label className={appstyle.right}>11:52</label></span></p>
                    </dd>
                  </dl>
                </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default list