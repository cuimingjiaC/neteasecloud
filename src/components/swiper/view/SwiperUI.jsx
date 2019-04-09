import React from 'react'

import {
  SwiperContainer
} from './SwiperStyled'

import { Carousel, ActivityIndicator } from 'antd-mobile';

export default props => (
  <SwiperContainer>
    {
      props.isLoaded ? (
        <Carousel
          autoplay
          infinite
        >
          {
            props.list.map(value => (
              <img 
                key={value.id} 
                src={value.coverImgUrl} 
                alt={value.name}
                style={{width:'96%',height:'1.4rem',borderRadius:'10px',display:"inline-block"}}
                onClick={()=>{window.location.href='/play/'+ value.id}}
              />
            ))
          }
        </Carousel>
      ) : (
        <ActivityIndicator animating />
      )
    }
  </SwiperContainer>
)