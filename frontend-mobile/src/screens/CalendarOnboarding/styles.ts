import styled from '@emotion/native';
import PagerView from 'react-native-pager-view';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledPagerView = styled(PagerView)`
  flex: 1;
`;
