import React, { Component } from 'react'
import {SongItemContaniner} from './SongItemStyled'

class ClassifyIcon extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <SongItemContaniner>
                <div className="songImg"><img src={this.props.img}/></div>
                <div className="songTitle">{this.props.title}</div>
                <span className="icon iconfont icon-headseterji">{this.props.num}万</span>
            </SongItemContaniner>
        )
    }
} 

export default ClassifyIcon