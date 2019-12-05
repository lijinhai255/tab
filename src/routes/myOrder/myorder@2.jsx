import React, { Component } from 'react'

import './myorder.scss';
import {devideClass,carouselFun} from '../../utils'
class Myorder extends React.Component {
  constructor(props){
    super(props);
    this.state={
      bscroll:{},
      nav:['全部','房产','实用工具','基金股票','社保养老','商业保险'],
      currentIndex:0
      
    }
  }
  carousel = this.refs.wrapper;//获取carousel
  left = 0// 定义变量 用于中专
  lock= false;
  idx=0;
  componentDidMount(){
      const carousel = this.refs.wrapper;
      carousel.addEventListener('touchstart',(e)=>this.touchStart(e))
      carousel.addEventListener('touchmove',(e)=>this.touchMove(e))
      carousel.addEventListener('touchend',()=>this.touchEnd())
  }
  //
  touchStart(e){

    //   // 函数节流
      if (!this.lock) {
        return;
    }

    // 取消过度
    this.refs.wrapper.style.transition = "none";
    // 获取手指触摸时候的位置
   this.left = e.touches[0].clientX;
  }
  touchMove(e){
    // if (!this.lock) {
    //     return;
    // }
    // 获取手指移动时候的位置
    var x = e.touches[0].clientX;
    this.refs.wrapper.style.left = - (360-x)+ "px";
    console.log(x-this.left,this.refs.wrapper.style,2,121)
    
    // 当idx === 0的时候并且此时往右滑动，应该出现的是最后一张图片
    // if (idx === 0 && x > left) {
    //     // carousel.style.left = -width * length + x - left + "px";
    //     return;
    // }
    // 让图片跟随手指移动， 就是改变carousel的定位值
    // carousel.style.left = -idx * width + x - left + "px";
  }
  touchEnd(){
      console.log('结束了')
  }


  //add
 renderNav(){
 return this.state.nav.map((item,index)=><a key={index} className={+this.state.currentIndex===+index?'active':''} onClick={()=>this.onClickNav(index)} >{item}</a>)
 }
 onClickNav(index){
     clearTimeout()
     console.log(index,this.state.currentIndex,121)
     const wraperContent = this.refs.wrapper;
     const wrapchild = wraperContent.childNodes
     index>this.state.currentIndex? wrapchild[index-1].classList.add(`carousel_h_left`):wrapchild[index].classList.add(`carousel_h_left`)
    // wrapchild[this.state.currentIndex].classList.add(`carousel_h_left`)
    setTimeout(()=>{
        wrapchild.forEach((nav)=>{
            if(nav) nav.classList.remove(`active`);
            if(nav) nav.classList.remove(`carousel_h_left`);
        }) 
        wrapchild[index].classList.add('active')
    },1000)
        // this.setState({
        //     currentIndex:index
        // })
 }
 // 
  render() {
    return (
      <div
        className="mainList"
      >
        <div className={'banner'} >
          <p className={'banner_text'}>这个行业彻底火了！人才缺口高达170万</p>
        </div>
        <div className={'content'}>
        <div className={'nav'} ref='nav'>
           {this.renderNav()}
        </div>
        </div>
        <div className={'carousel'} >
            <ul className={'content_wraper'} ref='wrapper'>
              <li className={devideClass('item','active')} style={{background:'green'}}>
              </li>
              <li className={'item'} style={{background:"red"}}>
                2
              </li>
              <li className={'item'}>
                3
            </li>
              <li className={'item'}>
                4
            </li>
            </ul>
        </div>
      </div>
    );
  }
}
export default Myorder