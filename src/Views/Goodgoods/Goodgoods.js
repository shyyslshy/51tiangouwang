import React, { Component } from 'react'
import Swiper from '../../Components/Swiper/Swiper'
import GoodgoodMiddlenav from './GoodgoodMiddlenav/GoodgoodMiddlenav'
import Goodgoodrecommd from './Goodgoodrecommd/Goodgoodrecommd'
import Goodgoodvideo from './Goodgoodvideo/Goodgoodvideo'
import Commonfooter from '../../Components/Commonfooter/Commonfooter'
import Topbar from '../../Components/Topbar/Topbar'
import store from '../../Redux/store'
import { GoodgoodsData } from '../../Redux/Actions/Goodgoods/GoodgoodsData'
import { recommend } from '../../Redux/Actions/Goodgoods/Recommedlist'
export default class Goodgoods extends Component {

    componentDidMount() {
        store.dispatch(GoodgoodsData())
        store.dispatch(recommend())
        // store.dispatch(recommend())
    }

    render() {
        return (
            <div>
                Goodgoods
                <Topbar/>
                <Swiper/>
                <GoodgoodMiddlenav/>
                <Goodgoodrecommd/>
                <Goodgoodvideo/>
                <Commonfooter/>
            </div>
        )
    }

    componentWillUnmount() {
        
    }
    
}
