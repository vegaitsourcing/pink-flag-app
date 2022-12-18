import styled from '@emotion/native';
import { CustomText } from '@pf/components';
import { unit } from '@pf/utils';

const HEIGHT = 42;
const OVERLAY_COLOR = 'white';
const OVERLAY_OPACITY = '0.4';

export const Container = styled.TouchableOpacity`
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: ${unit(HEIGHT)};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.$2};
`;

export const StyledCustomText = styled(CustomText)`
  font-size: ${({ theme }) => theme.fontSize.$5};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: ${({ theme }) => theme.lineHeight.$4};
  font-weight: ${({ theme }) => theme.fontWeight.$400};
`;

export const DisabledOverlay = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: ${OVERLAY_OPACITY};
  background-color: ${OVERLAY_COLOR};
`;
