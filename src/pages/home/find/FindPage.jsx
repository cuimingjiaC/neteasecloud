import React, { Component } from 'react'
import { FindContainer, BorderedClassify} from './findStyled'

import Search from 'components/search/Search'
import FindHeader from './FindHeader'
import FindLeft from './FindLeft'
import FindRight from './FindRight'

import {
    withRouter,Route
  } from 'react-router-dom' 

class FindPage extends Component {
    constructor(props) {
        super(props)
        this.handleClickSearch = this.handleClickSearch.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
    }
    render () {
        return (
            <FindContainer> 
                <Search onClick={this.handleClickSearch} icon1="icon-icon_im_voice" icon2="icon-icon_index_line" type="find" returnUrl={this.props.location.pathname}></Search>
                <FindHeader onSwitch={this.handleSwitch}></FindHeader>
                <div className="swiper">
                    <Route path='/find/left' render={() => <FindLeft />}/>
                    <Route path='/find/right' render={() => <FindRight />}/>
                </div>
                {/* <div className="classify"> */}
                
                {/* </div> */}

            </FindContainer>
        )
    }
    handleClickSearch(url,type,returnUrl){
        if(url==='cancel'){
            this.props.history.push('')
        } else {
            this.props.history.push('/'+url+returnUrl)
        }
    }

    handleSwitch(dir) {
        this.props.history.push(dir)
    }
}

export default withRouter(FindPage)