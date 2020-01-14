import React, { Component } from 'react'
import store from '../../../Redux/store'
import style from './Hqlife.module.scss'
export default class Hqlife extends Component {
    state={
        goodlife:[],
        goodslist:[]
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                goodlife: store.getState().storeReducer.slice(6, 7)[0].data,
                goodslist: store.getState().storeReducer.slice(7, 8)[0].data.items,
                
            })
        })
    }
    
    render() {
        return (
            <div className={style.goodlifeblock}>
                {
                    this.state.goodlife.title?
                    <h3 className={style.goodlisftitle}>{this.state.goodlife.title}</h3>:
                    null
                }
                <ul className={style.goodbigbox}>
                {
                    this.state.goodslist.length?
                    this.state.goodslist.map(i=>
                        <li key={i.id} className={style.goodbox}>
                            <img alt='' src={i.imageUrl} className={style.goodimg}/>
                            <div className={style.goodstitle}>
                                <p className={style.title}>{i.title}</p>
                                <p className={style.subtitle}>{i.subTitle}</p>
                            </div>
                        </li>
                        ):null
                        
                    }
                    </ul>
                
            </div>
        )
    }
}
