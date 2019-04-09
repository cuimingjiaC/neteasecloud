import Styled from 'styled-components'

const SearchContainer = Styled.div `
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
        .searchBox {
            flex: 1
            height: .5rem
            display: flex
            align-items: center

            .search {
                width: 100%
                height: .3rem 
                background-color:#e0645c
                border-radius: .3rem

                b {
                    line-height: .3rem
                    margin-left: .2rem
                    font-sise: .24rem
                    color: #e9928c
                }
                i {
                    margin-left: .2rem
                    font-size: .12rem
                    color: #efb2ad
                    line-height: .3rem
                }
            }
        }
        
    }
`

export { SearchContainer }