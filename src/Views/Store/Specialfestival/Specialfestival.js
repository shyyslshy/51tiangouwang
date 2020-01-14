import React, { Component } from 'react'
import style from './Specialfestival.module.scss'
import store from '../../../Redux/store'
import Myslider from '../../../Components/Myslider/Myslider'
import {Icon} from 'antd'
export default class Specialfestival extends Component {
    state={
        goodlife:[],
        goodslist:[]
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                goodlife: store.getState().storeReducer.slice(10, 11)[0].data,
                goodslist: store.getState().storeReducer.slice(11, 12)[0].data.items,
                
            })
        })
    }
    
    render() {
        return (
            <div className={style.Specialfestival}>
                {
                    this.state.goodlife.title?
                    <h3 className={style.goodlisftitle}>{this.state.goodlife.title}</h3>:
                    null
                }
                <div className={style.goods}>
                {this.state.goodslist.length?
                        <Myslider>
                {this.state.goodslist.map(i=>
                    <li key={i.id} className={style.gooditem}>
                            <img alt='' src={i.imageUrl} className={style.goodsimg}/>
                            <p className={style.title}>{i.title}</p>
                            <div className={style.discount}>
                            <span className={style.zhekou}>￥{i.price}</span>
                            < Icon type = "shopping-cart" className={style.shopcar} style={{color:'red',fontSize:'.15rem',marginRight:'.06rem'}}/ >
                            </div>
                        </li>
                    )}
                    </Myslider>:null
                    }
                    </div>
            </div>
        )
    }
    
}
