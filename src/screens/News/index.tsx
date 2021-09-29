import React from 'react';

/**
 *
 * Components
 */
import {
   Wrapper,
   Title,
   Subtitle,
   Bold,
   Toolbar,
   Brand,
   Avatar,
   Flex,
   Banner,
   BannerWrapper,
   Message,
   HighLightedFont,
   ArrowRight,
   NewsList,
   NewsItem,
   NewsImage,
} from './styles';

export default function News() {
   return (
      <Wrapper>
         <Toolbar>
            <Flex>
               <Brand/>
            </Flex>
            <Avatar/>
         </Toolbar>

         <Banner>
            <BannerWrapper>
               <Message>
                  <HighLightedFont>Covid-19 News:</HighLightedFont> See the latest coverage about Covid-19
               </Message>
            </BannerWrapper>

            <ArrowRight/>
         </Banner>

         <NewsList>
            <Title>News for you</Title>
            <Subtitle>Top 5 news of the day</Subtitle>

            <NewsItem>
               <NewsImage/>
            </NewsItem>
         </NewsList>
      </Wrapper>
   );
}