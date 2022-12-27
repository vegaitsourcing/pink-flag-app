import { PrimaryButton } from '@pf/components';
import React, { useCallback } from 'react';
import { Modal } from 'react-native';
import { Content, Description, Overlay, StyledTransparentButton, Title } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BUTTON_COLOR = '#EC6767';

interface Props {
  isVisible?: boolean;
  onConfirm?: () => void;
  onDecline?: () => void;
  hide: () => void;
}

export const DeactivationModal: React.FC<Props> = ({ isVisible, hide, onConfirm, onDecline }) => {
  const { top: safeTopSpacing } = useSafeAreaInsets();

  const handleOnConfirm = useCallback(() => {
    onConfirm?.();
    hide();
  }, [hide, onConfirm]);

  const handleOnDecline = useCallback(() => {
    onDecline?.();
    hide();
  }, [hide, onDecline]);

  return (
    <Modal animationType="fade" visible={isVisible} transparent>
      <>
        <Overlay onPress={hide} />
        <Content top={safeTopSpacing}>
          <Title content="Deaktivacija kalendara" />
          <Description
            content={`Ukoliko se odlučiš da deaktiviraš kalendar svi tvoji podaci uneti do sada će biti izbrisani. \n\nOvu akciju ne možeš da opozoveš.`}
          />
          <PrimaryButton content="Razumem, deaktiviraj kalendar" onPress={handleOnConfirm} background={BUTTON_COLOR} />
          <StyledTransparentButton content="Odustani" onPress={handleOnDecline} />
        </Content>
      </>
    </Modal>
  );
};
