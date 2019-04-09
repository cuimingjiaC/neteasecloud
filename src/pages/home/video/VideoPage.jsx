import React, { Component } from 'react'
import { VideoContainer } from './videoStyled'

import Search from 'components/search/Search'
import { withRouter } from 'react-router-dom'

class VideoPage extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return (
            <VideoContainer> 
                <Search onClick={this.handleClick} icon1="icon-icon_video" icon2="icon-icon_index_line"></Search>
            </VideoContainer>
        )
    }
    handleClick(url){
        if(url==='cancel'){
            this.props.history.push('')
        } else {
            this.props.history.push(url)
        }
    }
}

export default withRouter(VideoPage)