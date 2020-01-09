import React, { Component } from 'react'
import store from '../../../Redux/store'
import { getGoodsgoodVideoDataList } from '../../../Redux/Actions/Shopping/Shoppingvideo'

export default class GoodsgoodVideo extends Component {

    componentDidMount() {
        store.dispatch(getGoodsgoodVideoDataList())
    }
    

    render() {
        return (
            <div>
                GoodsgoodVideo
            </div>
        )
    }
}
