import React, { Component } from 'react'
import store from '../../Redux/store'
import getStoreDataList from '../../Redux/Actions/Store/Storelist'
// import style from './Store.module.scss'

export default class Store extends Component {

    componentDidMount() {
        store.dispatch(getStoreDataList())
    }
    

    render() {
        return (
            <div>
                Store
            </div>
        )
    }
}
