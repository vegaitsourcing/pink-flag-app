import React from 'react';
import { Modal, Platform } from 'react-native';
import { Content, Overlay, IOSBottomSafeArea } from './styles';
import { IS_IOS } from '@pf/constants';
import { ModalHeader } from './Header';

interface Props {
  isVisible?: boolean;
  hide: () => void;
  headerTitle?: string;
}

export const BottomModal: React.FC<Props> = ({ isVisible, hide, children, headerTitle }) => {
  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <>
        <Overlay onPress={hide} />
        <Content behavior={Platform.select({ ios: 'padding', android: undefined })}>
          {headerTitle && <ModalHeader content={headerTitle} />}
          {children}
          {IS_IOS && <IOSBottomSafeArea />}
        </Content>
      </>
    </Modal>
  );
};

export { type Props as BottomModalProps };
export { ModalHeader };
