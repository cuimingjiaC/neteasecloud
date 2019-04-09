import Styled from 'styled-components'
import border from 'components/styled/border'

const FindContainer = Styled.div `
    height: 2.16rem
    width:100%

    .swiper-left{
      overflow:scroll
      margin-top:-1px

      .swiperBg{
        background-color:#db4137
        height:1.1rem
        margin-bottom:.3rem
      }
    }
`

const Classify = Styled.div`
  height: 1.2rem
  width:100%
  border-bottom:1px solid #e2e3e4

  ul {
    display:flex
    li {
      width:25%
      text-align:center
      display:flex
      flex-direction:column
      align-items: center

      .imgIcon{
        width:.5rem
        height:.5rem
        border-radius:.25rem
        background-color:#f34d40
        margin:.2rem 0 .1rem 0
        display: flex
        justify-content:center
        align-items:center
        color:#fff
      
        span{
          font-size:.3rem
        }
      }
    }
  }
`

const BorderedClassify = border({
  component: Classify,
  color: '#e2e3e4',
  width: '0 0 1px 0'
})

const Header = Styled.header `
  height: .5rem;
  margin-top: -.1rem
  background: #db4137;

  div {
    width:100%
    height:.53rem
    display: flex
    align-items:center
    
    p{
      width:50%
      text-align:center
      color: #fff
      font-size:.16rem
    }
  }
`
const RecommendSongs = Styled.div`
  width:100%
  height:3rem
  padding: .1rem
  .title {
    height: .50rem
    line-height: .50rem
    width:100%
    font-size:.16rem
    font-weight:600
  }

  .songsList {
    display:flex
    flex-wrap:wrap
    justify-content: space-between
    .songItem{
      width: 32%
      height:1.7rem
      
    }
  }

`

export {
    FindContainer,
    Header,
    BorderedClassify,
    RecommendSongs
}