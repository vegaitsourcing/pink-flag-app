import { PrimaryButton, WithSafeView } from '@pf/components';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Subtitle } from '../../styles';
import { BirthdayInput } from '../BirthdayInput';
import { CycleInput } from '../CycleInput';
import { DeactivationModal } from '../DeactivationModal';
import { GoogleAccountButton } from '../GoogleAccountButton';
import { MenstruationInput } from '../MenstruationInput';
import { NotificationInput } from '../NotificationInput';
import { SettingsInput } from '../SettingsInput';
import { Container, LinkButton, LinkText, LargeSpacing, MediumSpacing, SmallSpacing } from './styles';

const HIT_SLOP = { top: 10, left: 10, right: 10, bottom: 10 };

//! TODO: Dismiss keyboard when pressing on container
export const Content: React.FC = WithSafeView(() => {
  const [isDeactivationModalVisible, setIsDeactivationModalVisible] = useState(false);
  const { goBack } = useNavigation();

  const toggleDeactivationModal = useCallback(() => setIsDeactivationModalVisible(prevState => !prevState), []);

  return (
    <Container>
      <GoogleAccountButton />
      <Subtitle content="Kako se zoveš?" />
      <SettingsInput placeholder="Tvoje ime" />
      <SmallSpacing />
      <BirthdayInput />
      <MediumSpacing />
      <MenstruationInput />
      <MediumSpacing />
      <CycleInput />
      <MediumSpacing />
      <NotificationInput />
      <LargeSpacing />
      <PrimaryButton content="Sačuvaj izmene" onPress={goBack} />
      <LinkButton hitSlop={HIT_SLOP} onPress={toggleDeactivationModal}>
        <LinkText content="Deaktiviraj kalendar" />
      </LinkButton>
      <DeactivationModal isVisible={isDeactivationModalVisible} hide={toggleDeactivationModal} />
    </Container>
  );
});
