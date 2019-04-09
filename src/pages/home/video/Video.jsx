import React, { Component } from 'react'
import VideoPage from './VideoPage'
import { Route } from 'react-router-dom'
import SearchPage from '../search/SearchPage'

export default class My extends Component {
    render () {
        return (
            <div>
                <Route exact path='/' render={() => <VideoPage />}/>
                <Route exact path='/search' render={() => <SearchPage />}/>
            </div>
        )
    }
}