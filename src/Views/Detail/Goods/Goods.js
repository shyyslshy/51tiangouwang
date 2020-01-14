import React, { Component } from 'react'
import Slideshow from '../../../Components/Slideshow/Slideshow'
import store from '../../../Redux/store'
export default class Goods extends Component {
    state={
        goodlist:[]
    }
     componentDidMount() {
        store.subscribe(() => {
            console.log()
            this.setState({
                goodlist: store.getState().DetailReducer
            })
        })
    }
    render() {
        console.log(this.state.goodlist[1].data.title)
        return (
            <div>
                <Slideshow>
                    <div className={"swiper-slide"}>
                        我是大轮播
                        </div>
                </Slideshow>
                
                <h1>
                    {/* {this.state.goodlist.data.title} */}
                </h1>
                
            </div>
        )
    }
}
