import React, { Component } from 'react'
import Tophead from './Tophead/Tophead'
import { NavLink, Route,Switch,Redirect } from 'react-router-dom'
import './Detail.module.scss'
import Goods from './Goods/Goods'
import Goodsdetail from './Goodsdetail/Goodsdetail'
import './Detail.module.scss'
import store from '../../Redux/store'
import getDetaillist from '../../Redux/Actions/Detail/Detaillist'
export default class Detail extends Component {
        componentDidMount() {
            store.dispatch(getDetaillist(this.props.match.params.goodid))
        }
    render() {
        return (
            <div>
                <Tophead>
                <span><p><NavLink to='/detail:myid/goods' activeClassName='active'>商品</NavLink></p></span>
                <span><p><NavLink to='/detail:myid/goodsdetail' activeClassName='active'>详情</NavLink></p></span>
                </Tophead>
                {this.props.children}
                <Switch>
                    <Route path='/detail:myid/goods' component={Goods}></Route>
                    <Route path='/detail:myid/goodsdetail' component={Goodsdetail}></Route>
                    <Redirect from='/detail:myid' to='/detail:myid/goods'></Redirect>
                </Switch>
                {
                    this.props.match.params.goodid
                }
            </div>
        )
    }

}
