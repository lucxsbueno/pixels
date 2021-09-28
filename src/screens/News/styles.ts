import styled from 'styled-components/native';

export const Wrapper = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const Title = styled.Text`
   font-size: 24px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.primary};
`;

export const Bold = styled.Text`
   font-family: ${({ theme }) => theme.fonts.bold};
`;