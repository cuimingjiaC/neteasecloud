import React, { Component } from 'react'

import SearchPage from '../search/SearchPage'
import Play from '../play/Play'
import FindPage from './FindPage'
import SongSheet from './songSheet/SongSheet'

import {
    Route,withRouter,Redirect,Switch
  } from 'react-router-dom'

class Find extends Component {
    render () {
        return (
            <div>
                <Switch>
                    {/* <Redirect from="/" to="/find/:type" params={{type: 2}} exact/> */}
                    <Redirect from="/" to="/find/left" exact/>
                    <Route path='/find/:type' render={() => <FindPage />}/>
                    <Route exact path='/search/:type/:bar' render={() => <SearchPage />}/>
                    <Route exact path='/play/:id' render={() => <Play/>}/>
                    <Route exact path='/songSheet' render={() => <SongSheet/>}/>
                </Switch>
            </div>
        )
    }
}
export default withRouter(Find)