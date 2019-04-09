import React from 'react'

import { TabBar } from 'antd-mobile';

import Find from './find/Find'
import Account from './account/Account'
import Friends from './friends/Friends'
import My from './my/My'
import Video from './video/Video'
import findImg from 'assets/images/tabbar/01.gif'
import videoImg from 'assets/images/tabbar/02.gif'
import myImg from 'assets/images/tabbar/03.gif'
import friendImg from 'assets/images/tabbar/04.gif'
import accountImg from 'assets/images/tabbar/05.gif'
import findActiveImg from 'assets/images/tabbar/01_active.gif'
import videoActiveImg from 'assets/images/tabbar/02_active.gif'
import myActiveImg from 'assets/images/tabbar/03_active.gif'
import friendActiveImg from 'assets/images/tabbar/04_active.gif'
import accountActiveImg from 'assets/images/tabbar/05_active.gif'

export default class findTabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'find',
            hidden: false,
            fullScreen: true,
        };
        
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'absolute', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              <TabBar
                unselectedTintColor="#999"
                tintColor="#d33a31"
                barTintColor="white"
                hidden={this.state.hidden}
              >
                <TabBar.Item
                  title="发现"
                  key="find"
                  
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${findImg}) center center /  25px 25px no-repeat` }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${findActiveImg}) center center /  25px 25px no-repeat` }}
                  />
                  }
                  selected={this.state.selectedTab === 'find'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'find',
                    });
                  }}
                  data-seed="logId"
                >
                  <Find ></Find>
                </TabBar.Item>

                <TabBar.Item
                  title="视频"
                  key="video"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${videoImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${videoActiveImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selected={this.state.selectedTab === 'video'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'video',
                    });
                  }}
                  data-seed="logId"
                >
                  <Video></Video>
                </TabBar.Item>


                <TabBar.Item
                  title="我的"
                  key="my"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${myImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${myActiveImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selected={this.state.selectedTab === 'my'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'my',
                    });
                  }}
                  data-seed="logId"
                >
                  <My></My>
                </TabBar.Item>

                <TabBar.Item
                  title="朋友"
                  key="friend"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${friendImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${friendActiveImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selected={this.state.selectedTab === 'friend'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'friend',
                    });
                  }}
                  data-seed="logId"
                >
                  <Friends></Friends>
                </TabBar.Item>


                <TabBar.Item
                  title="账号"
                  key="account"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${accountImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${accountActiveImg}) center center /  25px 25px no-repeat`
                   }}
                  />
                  }
                  selected={this.state.selectedTab === 'account'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'account',
                    });
                  }}
                  data-seed="logId"
                >
                  <Account></Account>
                </TabBar.Item>
                
              </TabBar>
            </div>
          );

    }
}

