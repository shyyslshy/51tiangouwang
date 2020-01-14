import React, { Component } from 'react'
import {Icon} from 'antd'
import { withRouter } from 'react-router'
import style from './Backbutton.module.scss'
class Backbutton extends Component {
    render() {
        return (
            <div onClick={this.handleclick} className={style.goback}>
                < Icon type = "left" style={{fontSize:'.2rem'}} />
            </div>
        )
    }
        handleclick = () => {
            this.props.history.goBack()
        }
}
export default withRouter(Backbutton)
