import { unit } from '@pf/utils';
import styled from '@emotion/native';

const OVERLAY_OPACITY = '0.3';
const MODAL_BORDER_RADIUS = 20;
const IOS_SAFE_AREA_OFFSET = 24;

export const Overlay = styled.Pressable`
  flex: 1;
  background-color: black;
  opacity: ${OVERLAY_OPACITY};
`;

export const Content = styled.KeyboardAvoidingView`
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: white;
  border-top-left-radius: ${unit(MODAL_BORDER_RADIUS)};
  border-top-right-radius: ${unit(MODAL_BORDER_RADIUS)};
`;

export const IOSBottomSafeArea = styled.View`
  height: ${unit(IOS_SAFE_AREA_OFFSET)};
`;
