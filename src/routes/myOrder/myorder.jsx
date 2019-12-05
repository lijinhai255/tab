import React, { Component } from 'react'

import appstyle from './myorder.module.scss';
import BScroll from "better-scroll"
class Myorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bscroll: {},
      nav: ['全部', '房产', '实用工具', '基金股票', '社保养老', '商业保险'],
      currentIndex: 0

    }
  }
  componentDidMount() {
    // console.log(this.refs.wrapper,"121")

    this._initScroll()
    //定义方法 用于nav 样式切换

  }
  _initScroll() {
    const wrapper = this.refs.wrapper
    const navwrap = this.refs.navwrap
    // 获取所有的子元素 indexListContent.children[1].children; 
    const navs = this.refs.nav;
    const item_1 = this.refs.item_1;
    this.itmeScroll1 = new BScroll(item_1,{
      scrollX: true,
      click: true,
     
    })
    navs.style.width = `${this.state.nav.length * 1.4}rem`
    const navchild = navs.childNodes
    this.navScroll = new BScroll(navwrap, {
      scrollX: true,
      click: true
    })
    // 初始化scroll
    this.bscroll = new BScroll(wrapper, {
      eventPassthrough: true,
      scrollX: true,
      scrollY: true,
      momentum: false,
      //是否滑到下一张 距离判断
      snap: {
        threshold: 0.1,
        // 无缝滚动
        // loop:true
      },
      probeType: 3,
       //上滑加载
       pullUpLoad:{
        //离底部还有多少距离 px
        threshold:50
      },
      //下拉刷新
      pullDownRefresh:{
        //离底部还有多少距离 px
        threshold:-50,
        //停留的位置 距离顶部多少px
        stop:30
    }

    })
    this.bscroll.on("scrollEnd", () => this._onScrollEnd(this.state.bscroll, navchild))
    // 定义上滑方法
    this.bscroll.on('pullingUp',()=>this._pullupFun())
    // 定义加载方法
    this.bscroll.on('pullingDown',()=>this._pulldownFun())
  }
  _pullupFun(){
    //告诉bscroll已经完成了上滑操作
    this.bscroll.finishPullUp();
    //刷新dom
    this.bscroll.refresh();
    console.log('上滑方法执行了')
  }
  //
  _pulldownFun(){
    //告诉bscroll已经完成了上滑操作
    this.bscroll.finishPullDown();
    this.bscroll.refresh()
    console.log('加载方法执行了')
  }

  _onScrollEnd(bscroll, navchild) {
    navchild.forEach((nav) => {
      if (nav) nav.classList.remove(`${appstyle.active}`);
    })
    console.log(this.bscroll.getCurrentPage().pageX)
    navchild[this.bscroll.getCurrentPage().pageX].classList.add(`${appstyle.active}`);
    
  }
  //add
  renderNav() {
    return this.state.nav.map((item, index) => <a key={index} className={+this.state.currentIndex === +index ? appstyle.active : ''} onClick={() => this.onClickNav(index)} >{item}</a>)
  }
  onClickNav(index) {
    console.log(index)
    this.bscroll.goToPage(index, 0, 10, 'easing')
    // console.log(childWrap,121)
  }
  render() {
    return (
      <div
        className={appstyle.mainList}
      >
        <div className={appstyle.banner}>
          <p className={appstyle.banner_text}>这个行业彻底火了！人才缺口高达170万</p>
        </div>
        <div className={appstyle.content} ref='navwrap'>
          <div className={appstyle.nav} ref='nav'>
            {this.renderNav()}
          </div>
        </div>
        <div className={appstyle.carousel} ref='wrapper'>
          <ul className={appstyle.carousel_copntent}  >
            <li className={appstyle.carousel_item} 
              style={{position:"relative"}}
              ref="item_1"
               >
              <div 
              className={appstyle.content} 
                >
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
              </div>
             </li>
            <li className={appstyle.carousel_item}>
            <div 
              className={appstyle.content} 
                >
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
              </div>
            
              </li>
            <li className={appstyle.carousel_item}>
              3
            </li>
            <li className={appstyle.carousel_item}>
              4
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Myorder