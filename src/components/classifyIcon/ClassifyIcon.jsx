import React, { Component } from 'react'
import {ClassifyIconContaniner} from './ClassifyIconStyled'

class ClassifyIcon extends Component {
    render(){
        return (
            <ClassifyIconContaniner>
                <div className="imgIcon">
                    <span className={`icon iconfont + ${this.props.icon}`} ></span>
                </div>
                <span>{this.props.title}</span>
            </ClassifyIconContaniner>
        )
    }
} 

export default ClassifyIcon