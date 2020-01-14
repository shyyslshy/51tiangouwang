import React, { Component } from 'react'
import store from '../../Redux/store'
import getStoreDataList from '../../Redux/Actions/Store/Storelist'
// import Slideshow from '../../Components/Slideshow/Slideshow'
import Head from './Head/Head'
import Classify from './Classify/Classify'
import Flashsale from './Flashsale/Flashsale'
import style from './Store.module.scss'
import Hqlife from './Hqlife/Hqlife'
import Hotpop from './Hotpop/Hotpop'
import Specialfestival from './Specialfestival/Specialfestival'
import Recommend from './Recommend/Recommend'
export default class Store extends Component {
    componentDidMount() {
        store.dispatch(getStoreDataList())
    }
    render() {
        return (
            <div>
                <Head></Head>
                <Classify></Classify>
                <Flashsale></Flashsale>
                <Hqlife></Hqlife>
                <Hotpop></Hotpop>
                <Specialfestival></Specialfestival>
                <Recommend></Recommend>
            </div>
        )
    }
}
