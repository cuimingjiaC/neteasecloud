import React, { Component } from 'react'

import { 
    SongSheetContainer, 
    BorderTitle, 
    BorderedSpan, 
    Span,
    AllSongList,
    BorderedTitleBox
} from './SongSheetStyled'
import FindHeader from 'components/findHeader/FindHeader'
import SongItem from 'components/songItem/SongItem'
import { connect } from 'react-redux'
import { getListAsync } from 'components/swiper/actionCreator'
import { getSongListAsync} from 'reducer/songList/actionCreator'
import http from 'utils/fetch'

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
            showTitleName:'全部歌单',
            display:'none',
            headSwitch: 'one',
            catList:[],
            isChoosed: null
        };
        this.props.loadSongList()
        this.clickSongList = this.clickSongList.bind(this)
        this.changeAllSongList = this.changeAllSongList.bind(this)
        this.goBack = this.goBack.bind(this)
        this.getCatlist()
    }

    componentDidMount(){
        if (this.props.list.length === 0) {
            this.props.loadData()
        }
    }

    render () {
        // console.log(3,this.props) // 问题：这里当props里的state变化时候为什么执行两次？？？答：返回数据执行一次，回来的数据又修改又·执行一次
        return (
        <div>
            <SongSheetContainer> 
                {
                    this.state.headSwitch === 'one'  
                    ? <FindHeader icon1="icon-previous_step" title="歌单" icon2="icon-icon_index_line" onFirstIconClick={()=>{this.goBack()}}></FindHeader>
                    :  <FindHeader icon1="icon-down" title="筛选歌单" firstIconType="down" onFirstIconClick={()=>{this.changeAllSongList(false,this.state.showTitleName)}}></FindHeader>
                }
                    
               
                <div className="titleImg"></div>
                <div className="classify">
                        <BorderTitle className="title" onClick={()=>{this.changeAllSongList(true,this.state.showTitleName)}}><span className="titleName">{this.state.showTitleName}</span><span className="iconfont  icon-right"></span></BorderTitle>
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

            <AllSongList display={this.state.display}>
                <div className={this.state.allSongListShow ?  'showInDown': 'leaveOutDown'}>
                    {
                        this.state.headSwitch === 'two'  
                        ?   <FindHeader icon1="icon-down" title="筛选歌单" firstIconType="down" onFirstIconClick={()=>{this.changeAllSongList(false,this.state.showTitleName)}}></FindHeader>
                        :   <FindHeader icon1="icon-previous_step" title="歌单" icon2="icon-icon_index_line" onFirstIconClick={()=>{this.goBack()}}></FindHeader>
                    }
                    <div className="scrollContainer">

                        <div className="allTitle">
                            <BorderedTitleBox className={`titleBox  choose${this.state.isChoosed==='全部歌单'}`}  isChoosed={this.state.className==='全部歌单'} onClick={()=>{this.chickItem('全部歌单')}}>
                                <span>全部歌单</span>
                                <span className={`duigouTitle${this.state.isChoosed==='全部歌单'}`}>
                                    <div className={`iconfont icon-duigoux duigouTitleIcon${this.state.isChoosed==='全部歌单'}`}></div>
                                </span>
                            </BorderedTitleBox>
                        </div>

                        <div className="songscClassifyContainer">
                            {
                                this.state.catList.map((value)=>{
                                    return (
                                        <div className="songsListItem" key={value.key}>
                                            <div className="itemTitle">
                                                <p className='iconfont icon-icon_index_line'></p>
                                                <p>{value.value}</p>
                                            </div>
                                            {
                                                value.sub.map((subValue,index) => { 
                                                    return (
                                                        <div className={`item choose${this.state.isChoosed===subValue.name}`}  key={index} onClick={()=>{this.chickItem(subValue.name)}}>
                                                            <span>{subValue.name}</span>
                                                            <span className={`hot  hot${subValue.hot.toString()}`}>HOT</span>
                                                            
                                                                <span className={`duigou${this.state.isChoosed===subValue.name}`}>
                                                                    <span className={`iconfont icon-duigoux duigouIcon${this.state.isChoosed===subValue.name}`}></span>
                                                                </span>
                                                            
                                                           
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* className={`item` choose${this.state.className===''} `} */}
                </div>
            </AllSongList>
        </div>
        )
    }

    goBack() {
        window.history.back()
    }
    chickItem(subName){
        this.changeAllSongList(false,subName)
    }
    changeAllSongList(tag,name) {
        this.setState({
            allSongListShow: tag,
            display:'true',
            headSwitch: tag === true ? 'two'  : 'one',
            isChoosed:name,
            showTitleName:name
        })
    } 

    clickSongList(value){
        this.setState({
            showTitleName: value.name,
        });
        this.props.loadData(value.name)
    }

    async getCatlist() {
        let result = await http.get('/api/playlist/catlist')
        var categories = []
        for (var key in result.categories){
            var obj = {
                'key': key,
                'value': result.categories[key],
                'sub':[]
            }
            categories.push(obj)
        }
       
        categories.map(value=>{
            result.sub.map(v => {
                if(value.key === v.category){
                    value.sub.push(v)
                }
            })
        })
        this.setState({
            catList:categories
        })
        // console.log(categories)
    }

}

export default connect(mapState, mapDispatch)(SongSheet)