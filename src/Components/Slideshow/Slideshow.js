import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import style from './Slidershow.module.scss'
export default class Slideshow extends Component {
    state={
        sliderestate: [{
            slidesPerView: 4,
            spaceBetween: 40,
            centeredSlides: false,//是否第一个剧中显示
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }]
    }
    componentWillMount(prevState){
        this.setState({
            
        })
    }
    render() {
        return (
            <div>
                <div className={"swiper-container" + ' ' + style.default}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container', {...this.state.sliderestate[0]});
    }
}
