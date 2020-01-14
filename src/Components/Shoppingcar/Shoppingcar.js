import React, { Component } from 'react'
import {Icon} from 'antd'
import style from './Shoppingcar.module.scss'
export default class Shoppingcar extends Component {
    render() {
        return (
            <div className={style.shopcar}>
                <Icon type="shopping-cart"  style={{fontSize:'.2rem'}} />
            </div>
        )
    }
}
