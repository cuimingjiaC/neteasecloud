import React, { Component } from 'react'

import { SongSheetContainer } from './SongSheetStyled'
import Search from 'components/search/Search'
import FindHeader from 'components/findHeader/FindHeader'

export default class SongSheet extends Component {
    render () {
        return (
            <SongSheetContainer> 
                <FindHeader icon1="icon-previous_step" icon2="icon-icon_index_line"></FindHeader>
               {/* <Search onClick={this.handleClickSearch} ></Search> */}
               <div class="titleImg">
                   {/* <img src="http://p1.music.126.net/5Y5hQKiHJgqtcl720LJOqA==/109951163983362598.jpg"/> */}
               </div>
            </SongSheetContainer>
        )
    }
}