import React, { Component } from 'react'

import { SearchContainer } from './SearchStyled'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return (
            <SearchContainer>
                <div>
                    {this.props.icon1 ? <span className={`iconfont ${this.props.icon1}`}></span> : <span className="blank"></span>}
                    <div className="searchBox">
                        <div className="search" onClick={() => this.handleClick('search',this.props.type,this.props.returnUrl)}>
                            <b className="iconfont icon-icon_search"></b>
                            <i>搜索 音乐、视频、歌词、电台</i>
                        </div>
                    </div>
                    {this.props.icon2 ? <span className={`iconfont ${this.props.icon2}`}></span> : (this.props.cancel? <></>:<span className="blank"></span>)}
                    {this.props.cancel? <div><span className="cancel" onClick={() => this.handleClick('cancel',this.props.type,this.props.returnUrl)}>取消</span></div> : <></>}
                    
                    
                </div>

            </SearchContainer>
        )
    }

    handleClick(url,type,returnUrl) {
        this.props.onClick(url,type,returnUrl)
    }

}