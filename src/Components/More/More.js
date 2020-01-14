import React, { Component } from 'react'
import {Icon,Popconfirm, message } from 'antd'
import style from './More.module.scss'
export default class More extends Component {
    render() {
        const text = '这是显示更多';
        function confirm() {
            message.info('Clicked on Yes.');
        }
        return (
            <div className={style.more}>
                    <Popconfirm
                    placement="bottomRight"
                    title={text}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                    icon={<Icon type="null"/>}
                >
                < Icon type = "more"  style={{fontSize:'.2rem'}} / >
                </Popconfirm>
            </div>
        )
    }
}
