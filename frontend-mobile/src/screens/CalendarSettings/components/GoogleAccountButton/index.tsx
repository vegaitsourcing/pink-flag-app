import { GoogleSvg } from '@pf/assets';
import React from 'react';
import { Avatar, Container, ContentArea, LeftArea, RightArea, Subtitle, Title } from './styles';

const GOOGLE_ICON_SIZE = 24;

export const GoogleAccountButton: React.FC = () => {
  return (
    <Container>
      <LeftArea>
        <Avatar />
      </LeftArea>
      <ContentArea>
        <Title content="Sign in as Milica" />
        <Subtitle content="m.petrovic@gmail.com" />
      </ContentArea>
      <RightArea>
        <GoogleSvg height={GOOGLE_ICON_SIZE} width={GOOGLE_ICON_SIZE} />
      </RightArea>
    </Container>
  );
};
