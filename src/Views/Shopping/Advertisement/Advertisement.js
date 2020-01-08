import React, { Component } from 'react'
import style from './Advertisement.module.scss'
import store from '../../../Redux/store'
export default class Advertisement extends Component {

    state = {
        advertisementImg: '',
    }

    componentDidMount() {
        store.subscribe(()=>{
            console.log('Advertisement数据',store.getState().shoppingReducer[7].data.items[0].imageUrl)
            this.setState({
                advertisementImg: store.getState().shoppingReducer[7].data.items[0].imageUrl
            })
        })
    }

    render() {
        return (
            <div className={style.advertisementImg}>
                <img src={this.state.advertisementImg} alt="" className={style.advertisementImg_img}/>
            </div>
        )
    }
}
