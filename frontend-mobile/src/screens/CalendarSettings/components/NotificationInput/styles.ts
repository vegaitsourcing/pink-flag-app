import { CustomText } from '@pf/components';
import styled from '@emotion/native';
import { unit } from '@pf/utils';

const RIGHT_SPACING = 10;

export const Container = styled.Pressable`
  flex-direction: row;
`;

export const Title = styled(CustomText)`
  margin-right: ${unit(RIGHT_SPACING)};
  font-size: ${({ theme }) => theme.fontSize.$5};
  line-height: ${({ theme }) => theme.lineHeight.$4};
  font-weight: ${({ theme }) => theme.fontWeight.$700};
`;
