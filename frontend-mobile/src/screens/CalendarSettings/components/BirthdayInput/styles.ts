import styled from '@emotion/native';
import { unit } from '@pf/utils';
import { SettingsInput } from '../SettingsInput';

const SPACING = 16;

export const Container = styled.View``;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const Spacing = styled.View`
  width: ${unit(SPACING)};
`;

export const StyledSettingsInput = styled(SettingsInput)`
  text-align: center;
`;

export const Wrapper = styled.TouchableOpacity`
  flex: 1;
`;
export const YearWrapper = styled.TouchableOpacity`
  flex: 2;
`;
