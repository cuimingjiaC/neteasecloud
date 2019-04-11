import Styled, { keyframes } from 'styled-components'
import border from 'components/styled/border'


const SongSheetContainer = Styled.div`
    height:.2rem

    .am-tabs-content-wrap{
        background-color:#eeeff0
        padding-top: 0.88rem !important
      }
      .am-tab-bar-item{

      }
    
    .songListContainer {
       width:100%
       height:${document.documentElement.clientHeight-100}px
    }
    .titleImg {
        width:100%
        height:1.45rem
        opacity:0.9
        background-size: 100% 100%
        background-image:url(http://p1.music.126.net/5Y5hQKiHJgqtcl720LJOqA==/109951163983362598.jpg)
    }
    .classify {
        height: .7rem
        width: 100%
        line-height: .7rem
        padding: 0 .1rem

        .titleName {
            margin-right:.02rem   
        }

        .classItems {
            float:right
            ul {
                li {
                    float: left                   
                }
                li:last-child span{
                    border:none !important
                }
            }
        }
    }

    .songsList {
        display:flex
        flex-wrap:wrap
        justify-content: space-between
        padding: 0 .1rem
        .songItem{
            width: 48%
            height:1.7rem
          
        }
      }

`

const Span = Styled.span `
    padding: 0 .1rem
    color: #646566
`

const BorderedSpan = border({
    component: Span,
    color: '#646566',
    width: '0 1px 0 0'
})

const BorderTitle = border({
    component: Styled.span `
        border-radius: .15rem
        padding:  .08rem .1rem 
        color:#323233
    `,
    color: '#646566',
    width: '1px',
    radius: '15'
    
})


const slide_in = keyframes`
  from {
    bottom:${-document.documentElement.clientHeight}px;
  }
  to {
    bottom:0px;
  }
`;

const slide_out = keyframes`
  from {
    top:0px;
  }
  to {
    top:${document.documentElement.clientHeight}px;
  }
`;

const AllSongList = Styled.div `
    display: ${ props => props.display } 

    
    
    .showInDown {
        background: #eeeff0;
       
        width: 100%
        z-index:999
        height: ${document.documentElement.clientHeight}px;
        position: fixed;
        animation: ${slide_in} 300ms ease-in forwards 

        padding-top:60px
        overflow:hidden
    }

    .leaveOutDown {
        background: #eeeff0;
        padding-top:60px
        width: 100%
        z-index:999
        height: ${document.documentElement.clientHeight}px;
        position: fixed;
        animation: ${slide_out} 300ms ease-in forwards 
    }

    .scrollContainer{
        height:100%
        overflow:scroll
        margin-top:-.1rem
    }

    .testbox{
        overflow:scroll
        height:500px
        background-color:green
       
        .test{
            width:100px;
            height:100px
            margin:10px
        }
    }

    .allTitle {
        width:100%
        height: .6rem
        line-height:.6rem
        background-color:#fbfcfd
        position:relative
    }
    
    .songscClassifyContainer {
        .songsListItem {
            margin-top:.1rem
            background-color: #fbfcfd
            overflow:hidden
            .itemTitle {
                margin-top: -1px;
                margin-left: -1px;
                box-sizing:border-box;

                width:25%
                height:.94rem
                border:1px solid #e5e5e5
                float:left
                text-align:center
                display:flex
                flex-direction:column
                justify-content:center
            }
            .item{
                margin-top: -1px;
                margin-left: -1px;
                box-sizing:border-box;
                
                width:25%
                height: .47rem
                border:1px solid #e5e5e5
                float:left
                text-align:center
                display:flex
                justify-content:center
                align-items:center
                overflow:hidden
                position:relative
                .hot{
                    width:60%
                    height:28%
                    background-color:#d33a31
                    font-size:10px
                    text-align:center
                    color:#fff
                    position:absolute
                    left:-14px
                    top:7px
                    transform:rotate(-45deg)
                }
                .hotfalse{
                    visibility:hidden
                }
                .hottrue{
                    visibility:visible
                }
            }
        }

    }

`

const titleBox = Styled.div`
    height: .47rem
    line-height: .47rem
    width:96%
    position:absolute !important
    top:0
    bottom:0
    left:0
    right:0
    margin:auto
    text-align:center
    font-size:.16rem
    color:#333334
`
const BorderedTitleBox = border({
    component: titleBox,
    color: '#e5e5e5',
    width: '1px'
})




export {
    SongSheetContainer,
    BorderTitle,
    BorderedSpan,
    Span,
    AllSongList,
    BorderedTitleBox
}