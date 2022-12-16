import React from 'react';
import { CustomTextProps } from '../../CustomText';
import { Container, Title } from './styles';

const TEXT_ROWS = 2;
type Props = CustomTextProps;

export const ModalHeader: React.FC<Props> = ({ content, ...props }) => {
  return (
    <Container>
      <Title content={content} numberOfLines={TEXT_ROWS} {...props} />
    </Container>
  );
};
