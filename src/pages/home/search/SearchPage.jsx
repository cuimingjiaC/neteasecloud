import React, { Component } from 'react'
import { SearchPageContainer } from './SearchPageStyled'
import Search from 'components/search/Search'

import {
    withRouter
  } from 'react-router-dom' 

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.lasturl="/"+ this.props.match.params.type + "/"+this.props.match.params.bar
        this.handleClick = this.handleClick.bind(this)
    }
    render () {
        return (
            <SearchPageContainer> 
                <Search onClick={this.handleClick} cancel="true" type={this.props.match.params.type} returnUrl={this.lasturl}></Search>
            </SearchPageContainer>
        )
    }

    handleClick(url,type,returnUrl){
        if(url==='cancel'){
            if(type==='find'){
                this.props.history.push(returnUrl)
            }
        } else {
            this.props.history.push(url)
        }
    }
}
export default withRouter(SearchPage)