import React, { Component } from 'react'

import appstyle from './myorder.module.scss';
import BScroll from "better-scroll"
class Myorder extends React.Component {
  constructor(props){
    super(props);
    this.state={
      bscroll:{},
      nav:['全部','房产','实用工具','基金股票','社保养老','商业保险'],
      currentIndex:0
      
    }
  }
  componentDidMount(){
    // console.log(this.refs.wrapper,"121")
    
    this._initScroll()
    //定义方法 用于nav 样式切换
    
  }
  _initScroll(){
    const wrapper = this.refs.wrapper
    const navs = this.refs.nav;
    const navchild = navs.childNodes
    // 初始化scroll
    this.bscroll = new BScroll(wrapper,{
      eventPassthrough: true,
      scrollX:true,
      scrollY:false,
      momentum:false,
      //是否滑到下一张 距离判断
      snap:{
            threshold:0.1,
            // 无缝滚动
            // loop:true
        },
        probeType:3
      
      })
     this.bscroll.on("scrollEnd",()=>this._onScrollEnd(this.state.bscroll,navchild))
  }
  //
  _onScrollEnd(bscroll,navchild){
    navchild.forEach((nav)=>{
      if(nav) nav.classList.remove(`${appstyle.active}`);
  })
    navchild[this.bscroll.getCurrentPage().pageX].classList.add(`${appstyle.active}`);
  }
  //add
 renderNav(){
 return this.state.nav.map((item,index)=><a key={index} className={+this.state.currentIndex===+index?appstyle.active:''} onClick={()=>this.onClickNav(index)} >{item}</a>)
 }
 onClickNav(index){
  this.bscroll.goToPage(1)
 }
  render() {
    return (
      <div
        className={appstyle.mainList}
      >
        <div className={appstyle.banner}>
          <p className={appstyle.banner_text}>这个行业彻底火了！人才缺口高达170万</p>
        </div>
        <div className={appstyle.content}>
        <div className={appstyle.nav} ref='nav'>
           {this.renderNav()}
        </div>
        </div>
        <div className={appstyle.carousel} ref='wrapper'>
            <ul className={appstyle.carousel_copntent}>
              <li className={appstyle.carousel_item}>
                1
              </li>
              <li className={appstyle.carousel_item}>
                2
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