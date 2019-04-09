import React, { Component } from 'react'

import { FindHeaderContainer } from './FindHeaderStyled'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return (
            <FindHeaderContainer>
                <div>
                    {this.props.icon1 ? <span className={`iconfont ${this.props.icon1}`} onClick={()=>window.history.back()}></span> : <span className="blank"></span>}
                    <div className="box">
                        <span>歌单</span>
                    </div>
                    {this.props.icon2 ? <span className={`iconfont ${this.props.icon2}`}></span> : (this.props.cancel? <></>:<span className="blank"></span>)}
                    {this.props.cancel? <div><span className="cancel" onClick={() => this.handleClick('cancel',this.props.type,this.props.returnUrl)}>取消</span></div> : <></>}
                    
                </div>

            </FindHeaderContainer>
        )
    }

    handleClick(url,type,returnUrl) {
        this.props.onClick(url,type,returnUrl)
    }

}