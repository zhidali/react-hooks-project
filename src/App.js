/*
 * @author: zhidl
 * @Date: 2020-06-03 17:22:02
 * @description: 主应用入口
 * @LastEditTime: 2020-06-04 11:31:54
 * @LastEditors: zhidl
 */ 
import {useLocation} from 'react-router-dom'
import React, {useState, useEffect, memo, Fragment} from 'react';
// console.log(useLocation());
function App(props) {
  return (
    <div className='app'>
      {props.children}
    </div>
  );
}

export default memo(App);
