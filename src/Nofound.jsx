/*
 * @author: zhidl
 * @Date: 2020-06-03 17:22:02
 * @description: 主应用入口
 * @LastEditTime: 2020-06-04 11:06:19
 * @LastEditors: zhidl
 */ 
import {useLocation} from 'react-router-dom'
import React, {useState, useEffect, memo, Fragment} from 'react';
// console.log(useLocation());
function Nofound(props) {
  return (
    <div>
      找不到页面
    </div>
  );
}

export default memo(Nofound);
