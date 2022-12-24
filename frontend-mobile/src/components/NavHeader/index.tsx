import { ArrowBackSvg, SettingsSvg } from '@pf/assets';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { CloseButton } from '../ModalHeader/styles';
import { Container, OptionsButton, Row, SafeArea, StyledLogo, styles } from './styles';

interface OwnProps {
  onSettingsPress?: () => void;
}

type Props = NativeStackHeaderProps & OwnProps;
const HIT_SLOP = { top: 10, left: 10, right: 10, bottom: 10 };

export const NavHeader: React.FC<Props> = ({ onSettingsPress, back, navigation: { goBack } }) => {
  return (
    <SafeArea>
      <Container style={styles.shadow}>
        <Row>
          {back && (
            <CloseButton hitSlop={HIT_SLOP} onPress={goBack}>
              <ArrowBackSvg />
            </CloseButton>
          )}
          <StyledLogo />
          <OptionsButton hitSlop={HIT_SLOP} onPress={onSettingsPress}>
            <SettingsSvg />
          </OptionsButton>
        </Row>
      </Container>
    </SafeArea>
  );
};
