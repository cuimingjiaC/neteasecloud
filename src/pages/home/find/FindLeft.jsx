import React, { Component } from 'react'
import Swiper from 'components/swiper/view/Swiper'
import { FindContainer, BorderedClassify, RecommendSongs} from './findStyled'
import ClassifyIcon from 'components/classifyIcon/ClassifyIcon'
import SongItem from 'components/songItem/SongItem'
import { connect } from 'react-redux'

const mapState = state => ({
    list: state.list.list.slice(0, 6)
  })

class FindLeft extends Component {
   
    render () {
        return (
            <div className="swiper-left">
                <div className="swiperBg"><Swiper></Swiper></div>
               
                <BorderedClassify>
                    <ul>
                        <li>
                            <ClassifyIcon icon="icon-icon_video" title="私人FM"></ClassifyIcon>
                            {/* <div className="imgIcon">
                                <span className="icon iconfont icon-icon_video"></span>
                            </div>
                            <span>私人FM</span> */}
                        </li>
                        <li>
                            <ClassifyIcon icon="icon-icon_calendar" title="每日推荐"></ClassifyIcon>
                        </li>
                        <li onClick={this.clickHandel}>
                            <ClassifyIcon icon="icon-music" title="歌单"  ></ClassifyIcon>
                        </li>
                        <li>
                            <ClassifyIcon icon="icon-icon_index_line" title="排行榜"></ClassifyIcon>
                        </li>
                    </ul>
                </BorderedClassify>
                <RecommendSongs>
                    <div className="title" onClick={()=>{window.location.href='/songSheet'}}>推荐歌单  <span className="icon iconfont icon-right"></span></div>
                    <div className="songsList">
                        {
                            this.props.list.map(value => (
                                <div className="songItem" key={value.id}>
                                    {/* <SongItem img={value.song.album.picUrl} title={value.song.name} num={(value.song.id+'').slice(0,3)}></SongItem> */}
                                    <SongItem img={value.coverImgUrl} title={value.name} num={value.playCount}></SongItem>
                                </div>
                            ))
                        }                    
                    </div>
                </RecommendSongs>
            </div>
        )
    }

    clickHandel(url){
        window.location.href='/songSheet'
    }
}

export default connect(mapState)(FindLeft)