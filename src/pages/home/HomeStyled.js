import Styled from 'styled-components'

const HomeContainer = Styled.div `

  .am-tabs-content-wrap{
    padding-top: ${props => (props.pathName === '/find/left' ? '0.88rem' : 
      (props.pathName === '/songSheet' ? '.5rem': '0' ))}
  }

  .am-tabs-tab-bar-wrap {
    background-color:#eeeef3

  }
  .am-tab-bar-bar {
    background-color:#eeeef3 !important
  }

  .am-tab-bar-item {
    height: ${document.documentElement.clientHeight}px
  }

 
`

export {
  HomeContainer
}