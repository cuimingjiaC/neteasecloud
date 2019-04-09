import React, { Component } from 'react'

import {
  Header
} from './findStyled'

export default class FindHeader extends Component {
  constructor(props) {
    super(props)
    this.handleSwich = this.handleSwich.bind(this)

    // this.state = {
    //   dir: 'left',
    //   delayDir: 'left'
    // }
  }
  render() {
    return (
      <Header>
        <div>
          <p onClick={() => this.handleSwich('left')}>个性推荐</p>
          <p onClick={() => this.handleSwich('right')}>主播电台</p>
         
        </div>
        {/* <span>这里有个动画</span> */}
        
      </Header>
    )
  }

  handleSwich(dir) {
    // this.setState({
    //   dir
    // })
    
    // setTimeout(() => {
    //   this.setState({
    //     delayDir: dir
    //   })
    // }, 300)

    this.props.onSwitch(dir)
  }
}
