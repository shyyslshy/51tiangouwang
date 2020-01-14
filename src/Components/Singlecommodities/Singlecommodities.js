import React, { Component } from 'react'
import style from './Singlecommodities.module.scss'
export default class Singlecommodities extends Component {
    render() {
        return (
            <div className={style.goodsbox}>
                    <ul className={style.allgoods}>
                            {this.props.children}
                    </ul>
            </div>
        )
    }
}
