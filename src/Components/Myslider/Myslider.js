import React, { Component } from 'react'
import style from './Myslider.module.scss'
export default class Myslider extends Component {
    render() {
        return (
            <div className={style.coverInfo}>
	<ul>
            {this.props.children}
    </ul>
</div>

        )
    }
}
