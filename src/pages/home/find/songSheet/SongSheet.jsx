import React, { Component } from 'react'

import { SongSheetContainer, BorderTitle, BorderedSpan, Span} from './SongSheetStyled'
import FindHeader from 'components/findHeader/FindHeader'
import SongItem from 'components/songItem/SongItem'
import { connect } from 'react-redux'
import { getListAsync } from 'components/swiper/actionCreator'
import { getSongListAsync} from 'reducer/songList/actionCreator'

const mapState = state => ({
    list: state.list.list,
    songList: state.songList.songList.slice(0,3),
  })

const mapDispatch = dispatch => ({
    loadData(value) {
        dispatch(getListAsync(value))
    },
    loadSongList() {
        dispatch(getSongListAsync())
    }
})

  
class SongSheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTitleName:'全部歌单'
        };
        this.props.loadSongList()
        this.clickSongList = this.clickSongList.bind(this)
    }

    componentDidMount(){
        if (this.props.list.length === 0) {
            this.props.loadData()
        }
    }

    render () {
        // console.log(3,this.props) // 问题：这里当props里的state变化时候为什么执行两次？？？
        return (
            <SongSheetContainer> 
                <FindHeader icon1="icon-previous_step" icon2="icon-icon_index_line"></FindHeader>
             
                <div className="titleImg"></div>
                <div className="classify">
                        <BorderTitle className="title"><span className="titleName">{this.state.showTitleName}</span><span className="iconfont  icon-right"></span></BorderTitle>
                        <div className="classItems">
                            <ul>    
                                {
                                    this.props.songList.map((value,index) =>  {
                                        return (
                                            index !== this.props.songList.length - 1 
                                                ? <li key={index} onClick={()=>{this.clickSongList(value)}}><BorderedSpan>{value.name}</BorderedSpan></li>
                                                : <li key={index} onClick={()=>{this.clickSongList(value)}}><Span>{value.name}</Span></li>
                                    )})
                                }
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

    clickSongList(value){
        this.setState({
            showTitleName: value.name,
        });
        this.props.loadData(value.name)
    }

}

export default connect(mapState, mapDispatch)(SongSheet)