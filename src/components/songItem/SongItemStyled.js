import Styled from 'styled-components'

const SongItemContaniner = Styled.div`
.songImg{
    height:1.2rem
    width: 100%
    
    img{
      height:1.2rem
      width: 100%
      border-radius: .02rem
    }
  }

  .songTitle{
    padding:.05rem
    font-size:.12rem
    color:#323233
    height: .46rem
    overflow:hidden
  }
  .icon-headseterji{
    position:relative
    top:-1.65rem
    float:right
    color:#fff
  }
` 

export {
    SongItemContaniner
}