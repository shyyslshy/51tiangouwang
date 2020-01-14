import React, { Component } from 'react'
import style from './Headfunblock.module.scss'
export default class Headfunblock extends Component {
    render() {
        return (
            <div className={style.bigbox}>
                {this.props.children}
            </div>
        )
    }
}
