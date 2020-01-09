import React, { Component } from 'react'
import style from './Middlenav.module.scss'
import store from '../../../Redux/store'
// import { getShoppingDataList } from '../../Redux/Actions/Shoppingdatalist'
export default class Middlenav extends Component {

    state = {
        shoppingMiddleList: [],
    }

    UNSAFE_componentWillMount() {
        store.subscribe(() => {
            // console.log(store.getState().shoppingReducer[6].data.items)
            this.setState({
                shoppingMiddleList: store.getState().shoppingReducer[6].data.items
            })
        })
    }
    
    render() {
        var shoppingMiddleList = this.state.shoppingMiddleList.map(item => 
            <div onClick={() => {this.handleClick(item.clickUrl)}} key={item.id} className={style.middlenav_every}>
                <img src={item.imageUrl} alt={item.title} className={style.middlenav_every_img}/>
                <p className={style.middlenav_every_p}>{item.title}</p>
            </div>
        )
        return (
            <div className={style.middlenav}>
                { shoppingMiddleList }
            </div>
        )
    }

    handleClick (urlId) {
        console.log(urlId)
    }
}
