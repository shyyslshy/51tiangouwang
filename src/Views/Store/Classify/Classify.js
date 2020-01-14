import React, { Component } from 'react'
import store from '../../../Redux/store'
import style from './Classify.module.scss'
import Myslider from '../../../Components/Myslider/Myslider'
export default class Classify extends Component {
    state={
        classifylist:[]
    }
    
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                classifylist: store.getState().storeReducer.slice(4, 5)[0].data.items
            })
        })
    }
    render() {
        return (
            <div className={style.classify}>
                {
                    this.state.classifylist.length ? < Myslider>
                    {
                        this.state.classifylist.map((item)=>
                        <li className={style.bigbox} key={item.title}>
                            <img alt='' src={item.imageUrl}/>
                            <p>{item.title}</p>
                        </li>
                        )
                    }
                </Myslider>:null
                }
                
            </div>
        )
    }
}
