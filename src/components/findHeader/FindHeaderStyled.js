import Styled from 'styled-components'

const FindHeaderContainer = Styled.div `
    width:100%
    height: .5rem
    background-color:#db4137
    div {
        display: flex
        span {
            color:#fff
            height: 100%
            width: .52rem
            line-height: .5rem
            text-align:center
            font-size: .24rem
            display: block
        }
        .blank {
            width: .1rem
        }
        .cancel {
            font-size: .15rem
            display: block
        }
        .box {
            flex:1
            display:flex
            justify-content:center
        }
        
    }
`

export { FindHeaderContainer }