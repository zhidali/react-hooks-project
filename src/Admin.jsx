/*
 * @author: zhidl
 * @Date: 2020-06-03 17:22:02
 * @description: 主应用入口
 * @LastEditTime: 2020-06-04 11:32:06
 * @LastEditors: zhidl
 */

import { useLocation } from 'react-router-dom';
import React, { useState, useEffect, memo, Fragment } from 'react';
import './assets/css/app.less';
// console.log(useLocation());
function App(props) {
	return (
		<div className="container">
			<div className="sidebar">侧边导航栏</div>
			<div className="main">
				<div className="header">
					<span className="username">Hi, sir</span>
				</div>
				<div className="wrapper">{props.children}</div>
				<div className="footer">
					<span className="copyright">Copyright@2020 你瞅啥</span>
				</div>
			</div>
		</div>
	);
}

export default memo(App);
