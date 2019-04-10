import React, { Component } from 'react'

import  HomeTabs  from './HomeTabs';
import { withRouter } from 'react-router-dom'

import {
    HomeContainer
  } from './HomeStyled'

class Home extends Component {
    render () {
        return (
            <HomeContainer pathName={this.props.location.pathname}>
                <HomeTabs></HomeTabs>
            </HomeContainer>
        )
    }
}

export default withRouter(Home)