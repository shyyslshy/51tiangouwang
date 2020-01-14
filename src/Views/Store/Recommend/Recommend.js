import React, { Component } from 'react'
import Singlecommodities from '../../../Components/Singlecommodities/Singlecommodities'
import store from '../../../Redux/store'
import style from './Recommend.module.scss'
import mystyle from '../../../Components/Singlecommodities/Singlecommodities.module.scss'
import {Icon} from 'antd'
import { withRouter } from 'react-router'
class Recommend extends Component {
    state = {
        title: [],
        goodslist: []
    }
    
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                title: store.getState().storeReducer.slice(12, 13)[0].data,
                goodslist: store.getState().storeReducer.slice(13)

            })
        })
    }
    render() {
        
        return (
            <div className={style.Specialfestival}>
                {
                    this.state.title.title?
                    <h3 className={style.title}>{this.state.title.title}</h3>:
                    null
                }
                    {this.state.goodslist.length?
                        <Singlecommodities>
                            {this.state.goodslist.map(i => 
                                <li className={mystyle.gooditem} key={i.data.id}  onClick={()=>this.handleclick(i.data.id)}>
                                    <img src={i.data.imageUrl} alt='' className={mystyle.img}/>
                                        <p className={mystyle.title}>{i.data.title}</p>
                                        <div className={mystyle.detailbar}>
                                        <span className={mystyle.price}>￥{i.data.price}</span>
                                    < Icon type = "shopping-cart" className={mystyle.shopcar} style={{color:'red',fontSize:'.15rem',marginRight:'.06rem'}}/ >
                                </div>
                            </li>
                                    )
                            }
                        </Singlecommodities>:null
                        }
            </div>
        )
    }
    handleclick = (id) => {
        this.props.history.push(`/detail${id}`)
    }
    componentWillUnmount(){
        this.setState({
            title: [],
            goodslist: []
        })
    }
}
export default withRouter(Recommend)
