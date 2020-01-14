import React, { Component } from 'react'
import style from './Timelimited.module.scss'
import Axios from 'axios'

export default class Timelimited extends Component {

    componentDidMount() {
        Axios.get('/shopping/page/sec/tab.node?pageType=82&id=2855&_=1578368208507').then(res => {
            // console.log(res)
        })
    }
    

    render() {
        return (
            <div className = {style.Timelimited}>
                <img src="./a.jpg" alt=""/>
                <div className = {style.Timelimited_details}>
                    <div className = {style.Timelimited_details_up}>
                        <div className = {style.Timelimited_details_up_updetail}>
                            <span className = {style.Timelimited_details_up_updetail_ziying}>自营</span>
                            <span className = {style.Timelimited_details_up_updetail_title}>【3盒|补水保湿+滋养抗皱+焕白提亮】JM 水光蜂蜜+黄金蚕丝+海洋珍珠面膜组合 10片/盒</span>
                        </div>
                        <div className = {style.Timelimited_details_up_downdetail}></div>
                    </div>
                </div>
            </div>
        )
    }
}
