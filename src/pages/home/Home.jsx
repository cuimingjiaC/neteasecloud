import React, { Component } from 'react'

import  HomeTabs  from './HomeTabs';

import {
    HomeContainer
  } from './HomeStyled'

export default class Home extends Component {
    render () {
        return (
            <HomeContainer>
                <HomeTabs></HomeTabs>
            </HomeContainer>
        )
    }
}