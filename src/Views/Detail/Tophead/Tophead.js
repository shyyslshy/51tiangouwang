import React, { Component } from 'react'
import Backbutton from '../../../Components/Backbutton/Backbutton'
import style from './Tophead.module.scss'
import { withRouter } from 'react-router'
import More from '../../../Components/More/More'
import Shoppingcar from '../../../Components/Shoppingcar/Shoppingcar'
class Tophead extends Component {
    render() {
        return (
            <div className={style.bigbox}>
                <Backbutton></Backbutton>
                {this.props.children}
                <Shoppingcar></Shoppingcar>
                <More></More>
            </div>
        )
    }
}
export default withRouter(Tophead)
