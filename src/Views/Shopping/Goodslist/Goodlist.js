import React, { Component } from 'react'
import style from './Goodlist.module.scss'
import distanceTimeLimited from '../../../Fuction/Distancetimelimited'
import URLsubstirng from '../../../Fuction/URLsubstring'
import store from '../../../Redux/store'
export default class Goodlist extends Component {

    state = {
        shoppinggoodslist: []
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                shoppinggoodslist: store.getState().shoppingReducer.slice(9,33)
            })
        })
    }
    
    render() {
        var shoppinggoodslist = this.state.shoppinggoodslist.map(item => 
            <div className = {style.shoppinggoodslist} key = {item.data.id} onClick = {() => {this.handleCLick(item.data.clickUrl)}}>
                <div className = {style.shoppinggoodslist_head}>
                    <p className = {style.shoppinggoodslist_head_title}>{item.data.title}</p>
                    <p>距结束{distanceTimeLimited(item.data.endTime)}天</p>
                </div>
                <div className = {style.shoppinggoodslist_goods} >
                    { item.data.items.map(item => 
                        <div className = {style.shoppinggoodslist_goods_every} key = {item.itemId}>
                            <img src = {item.imageUrl} alt=""/>
                            <div className = {style.title}>{item.title}</div>
                            <div className = {style.price}>￥{item.price}</div>
                        </div>
                    )}
                </div>
            </div>
        )
        return (
            <div>
                { shoppinggoodslist }
            </div>
        )
    }

    handleCLick (urlId) {
        // console.log('111',newURL,this.props,'woquhuihsusdf')
        var newURL = URLsubstirng(urlId)
        this.props.TimeLimited.history.push(`/shopping/${newURL}`)
    }
}
