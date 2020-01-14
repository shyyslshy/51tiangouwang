import React, { Component } from 'react'
import style from './Hotpop.module.scss'
import store from '../../../Redux/store'
import {Icon} from 'antd'
import Myslider from '../../../Components/Myslider/Myslider'
export default class Hotpop extends Component {
    state={
        titlelist:[],
        goodslist:[]
    }
    componentDidMount() {
        store.subscribe(() => {
        this.setState({
            titlelist: store.getState().storeReducer.slice(8,9)[0].data,
            goodslist: store.getState().storeReducer.slice(9,10)[0].data.items
        })
        })
    }
    render() {
        return (
            <div className={style.top}>
                <div className={style.titlebox}>
                    <div className={style.title}>{this.state.titlelist.title}</div>
                    <span className={style.more}>{this.state.titlelist.description}<Icon type="right"/></span>
                </div>
                <div className={style.goods}>
                    {
                        this.state.goodslist.length?
                        < Myslider >
                        {this.state.goodslist.map(i=>
                        <li key={i.id} className={style.gooditem}>
                            <img alt='' src={i.imageUrl} className={style.goodsimg}/>
                            <p className={style.price}>￥{i.price}</p>
                            <div className={style.discount}>
                            <span className={style.zhekou}>{i.discount}折</span>
                            < Icon type = "shopping-cart" className={style.shopcar} style={{color:'red',fontSize:'.15rem',marginRight:'.06rem'}}/ >
                            </div>
                        </li>)}
                        </Myslider>:
                        null
                    }
                </div>
            </div>
        )
    }
}
