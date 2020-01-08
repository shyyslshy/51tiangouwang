import React, { Component } from 'react'
import style from './Shoppingtitile.module.scss'
export default class Shoppingtitile extends Component {
    render() {
        return (
            <div className = {style.Shoppingtitile}>
                { this.props.shoppingtitile }
            </div>
        )
    }
}
