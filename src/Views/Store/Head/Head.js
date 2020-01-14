import React, { Component } from 'react'
// import getStoreDataList from '../../../Redux/Actions/Store/Storelist'
import store from '../../../Redux/store'
import Slideshow from '../../../Components/Slideshow/Slideshow'
import style from './Head.module.scss'
import Headfunblock from './Headfunblock/Headfunblock'
export class Head extends Component {
    state={
        headslide:[],
        headfunctionlist:[]
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                headslide: store.getState().storeReducer.slice(2, 3),
                headfunctionlist: store.getState().storeReducer.slice(3, 4)
            })
            
        })
    }
    
    render() {
        
        
        return (
            <div>
                < div className = {style.head} 
                style = {
                    {'background': `url${(this.state.headslide.map(item => item.backgroundImageUrl))} no-repeat center`}
                    } >
                <div>假设这是顶部搜索框</div>
                <Slideshow>
                    {
                        this.state.headslide.map((item)=>
                        item.data.items.map((imgitem)=>
                        <div className={"swiper-slide"} key={imgitem.id}>
                            <img alt='' src={imgitem.imageUrl} className={style.slideimg}/>
                        </div>
                        )
                        )
                    }
                </Slideshow>
                    <Headfunblock>
                            {
                                this.state.headfunctionlist.map(item =>
                                    item.data.items.map(i =>
                                    <div key={i.title}>
                                        <img alt='' src={i.imageUrl}/>
                                        <p>{i.title}</p>
                                    </div>
                                    )
                                )
                            }
                    </Headfunblock>
                    </div>

            </div>
        )
    }
}

export default Head
