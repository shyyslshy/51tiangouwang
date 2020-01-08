import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.scss'
export default class Tabbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/store" activeClassName={style.active}>逛商场</NavLink></li>
                    <li><NavLink to="/goodgoods" activeClassName={style.active}>好物圈</NavLink></li>
                    <li><NavLink to="/shopping" activeClassName={style.active}>购物</NavLink></li>
                    <li><NavLink to="/overseas" activeClassName={style.active}>海外购</NavLink></li>
                    <li><NavLink to="/center" activeClassName={style.active}>我的</NavLink></li>
                </ul>
            </nav>
        )
    }
}
