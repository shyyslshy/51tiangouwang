import React, { Component } from 'react'
import store from '../../../Redux/store'
import style from './Flashsale.module.scss'
import { Icon } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Myslider from '../../../Components/Myslider/Myslider'
moment.locale('zh-cn')
export default class Flashsale extends Component {
    state={
        flashsale:[],
        goodslist:[]
    }
    componentDidMount() {
        //时间戳转换
        store.subscribe(() => {
            this.setState({
                flashsale: store.getState().storeReducer.slice(5, 6)[0].data,
                goodslist: store.getState().storeReducer.slice(5, 6)[0].data.items
            })
        })
    }
    render() {
        return (
            <div>
                <div className={style.flashsale}>
                    <img alt='' src={this.state.flashsale.imageUrl} className={style.flashsaleimg}/>
                    <span className={style.time}>距结束<span className={style.deadline}>天</span>:<span className={style.deadline}>时</span>:<span className={style.deadline}>分</span>:<span className={style.deadline}>秒</span></span>
                    <span className={style.showmore}>查看更多<Icon type="right" /></span>
                </div>
                <div className={style.bigboxlunbo}> 
                {
                    this.state.goodslist.length ? < Myslider >
                    {
                        this.state.goodslist.map(i =>
                        <li className={style.lunbo} key={i.itemId}>
                        <img alt='' src={i.imageUrl} className={style.qianggouimg}/>
                        <p className={style.goodtitle}>{i.title}</p>
                        <div className={style.pricebox}>
                            <span className={style.nowprice}>￥ {i.price} </span>
                            {
                                i.discount?<span className={style.discount}>{i.discount}折</span>:null
                            }
                        </div>
                        </li>
                        )
                    }
                </Myslider>:null
                } 
                </div>
            </div>
        )
    }
}
