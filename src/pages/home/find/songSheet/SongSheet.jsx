import React, { Component } from 'react'

import { SongSheetContainer, BorderTitle, BorderedSpan, Span} from './SongSheetStyled'
import Search from 'components/search/Search'
import FindHeader from 'components/findHeader/FindHeader'
import SongItem from 'components/songItem/SongItem'
import { connect } from 'react-redux'
import { getListAsync } from 'components/swiper/actionCreator'

const mapState = state => ({
    list: state.list.list,
    showTitleName:'全部歌单'
  })

  const mapDispatch = dispatch => {
    return {
      loadData() {
        dispatch(getListAsync())
      }
    }
  }

  
class SongSheet extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount(){
        if (this.props.list.length === 0) {
            this.props.loadData()
          }
    }

    render () {
        return (
            <SongSheetContainer> 
                <FindHeader icon1="icon-previous_step" icon2="icon-icon_index_line"></FindHeader>
               {/* <Search onClick={this.handleClickSearch} ></Search> */}
               <div className="titleImg"></div>
               <div className="classify">
                    <BorderTitle className="title"><span className="titleName">{this.props.showTitleName}</span><span className="iconfont  icon-right"></span></BorderTitle>
                    <div className="classItems">
                        <ul>
                            <li><BorderedSpan>摇滚</BorderedSpan></li>
                            <li><BorderedSpan>华语</BorderedSpan></li>
                            <li><Span>民谣</Span></li>
                        </ul>
                    </div>
               </div>

               <div className="songsList">
                    {
                        // this.props.list.map(value => (
                        //     <div className="songItem" key={value.id}>
                        //         <SongItem img={value.song.album.picUrl} title={value.song.name} num={(value.song.id+'').slice(0,3)}></SongItem>
                        //     </div>
                        // ))
                        
                        this.props.list.map(value => {
                            return (
                                <div className="songItem" key={value.id}>
                                    {/* <SongItem img={value.song.album.picUrl} title={value.song.name} num={(value.song.id+'').slice(0,3)}></SongItem> */}
                                    <SongItem img={value.coverImgUrl} title={value.name} num={value.playCount} height={170}></SongItem>
                                </div>
                            )
                        })
                           
                    }                    
                </div>

              

            </SongSheetContainer>
        )
    }
}

export default connect(mapState, mapDispatch)(SongSheet)