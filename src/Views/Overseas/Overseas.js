import React, { Component } from 'react'
import store from '../../Redux/store'
import getOverSeaDataList from '../../Redux/Actions/Overseas/Overseasdatalist'

export default class Overseas extends Component {

    componentDidMount() {
        store.dispatch(getOverSeaDataList())
    }

    render() {
        return (
            <div>
                Overseas
            </div>
        )
    }
}
