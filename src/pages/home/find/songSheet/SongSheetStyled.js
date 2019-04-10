import Styled from 'styled-components'
import border from 'components/styled/border'

const SongSheetContainer = Styled.div`
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





export {
    SongSheetContainer,
    BorderTitle,
    BorderedSpan,
    Span
}