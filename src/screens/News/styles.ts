import styled from 'styled-components/native';

import BrandImage from './../../../assets/images/brand.png';
import ArrowRightImage from './../../../assets/images/ArrowRight.png';
import FutureHouse from './../../../assets/images/FutureHouse.png';

export const Wrapper = styled.View``;

export const Title = styled.Text`
   font-size: 19px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
   font-size: 15px;
   margin-top: 3px;
   margin-bottom: 20px;
   font-family: ${({ theme }) => theme.fonts.medium};
   color: ${({ theme }) => theme.colors.opaque};
`;

export const Bold = styled.Text`
   font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Toolbar = styled.View`
   flex-direction: row;
   width: 100%;
   padding: 60px 25px 25px;
   background-color: ${({ theme }) => theme.colors.background };
`;

export const Brand = styled.ImageBackground.attrs({
   source: BrandImage,
   resizeMode: 'contain'
})`
   width: 102px;
   height: 31px;
`;

export const Avatar = styled.Image.attrs({
   source: { uri: 'https://storage.googleapis.com/wp-noticias/2020/09/ae5c9893-elon-musk-300x300-1.png' }
})`
   width: 35px;
   height: 35px;
   border-radius: 35px;
`;

export const Flex = styled.View`
   flex: 1;
`;

export const Banner = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
   border: 1px solid ${({ theme }) => theme.colors.border };
   border-radius: 10px;
   margin: 0px 25px;
   padding: 20px;
`;

export const BannerWrapper = styled.View`
   flex: 1;
`;

export const Message = styled.Text`
   font-size: 16px;
   font-family: ${({ theme }) => theme.fonts.medium };
   color: ${({ theme }) => theme.colors.opaque };
   line-height: 22px;
`;

export const HighLightedFont = styled.Text`
   color: ${({ theme }) => theme.colors.primary };
`;

export const ArrowRight = styled.Image.attrs({
   source: ArrowRightImage
})`
   width: 24px;
   height: 24px;
`;

export const NewsList = styled.View`
   padding: 25px 25px;
   
`;

export const NewsItem = styled.View`

`;

export const NewsImage = styled.Image.attrs({
   source: FutureHouse
})`
   width: 100%;
   height: 130px;
   border-radius: 8px;
`;
