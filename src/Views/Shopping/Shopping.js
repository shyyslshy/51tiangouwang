import React, { Component } from 'react'
import style from './Shopping.module.scss'
import store from '../../Redux/store'
// import Axios from 'axios'
import { getShoppingDataList } from '../../Redux/Actions/Shopping/Shoppingdatalist'
import Middlenav from './Middlenav/Middlenav'
import Advertisement from './Advertisement/Advertisement'
import Goodlist from './Goodslist/Goodlist'
import Shoppingtitile from './Shoppingtitle.js/Shoppingtitile'
import Pagehead from '../../Components/Pagehead/Pagehead'

export default class Shopping extends Component {

    componentDidMount() {
        store.dispatch(getShoppingDataList()).then(res => {
            console.log("首页取回数据成功======异步存store成功",store.getState())
        })
    }
    
    render() {
        return (
            <div className = {style.shopping}>
                <Pagehead/>
                <Middlenav/>
                <Advertisement/>
                <Shoppingtitile shoppingtitile = "限时抢购"/>
                <Goodlist TimeLimited = {this.props} />
                <Shoppingtitile shoppingtitile = "好物圈视频"/>
                <Shoppingtitile shoppingtitile = "为你推荐"/>
            </div>
        )
    }

    componentWillUnmount() {
        
    }
    
}
