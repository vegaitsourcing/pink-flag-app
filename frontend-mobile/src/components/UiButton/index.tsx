import { StyleSheet, Pressable } from 'react-native';
import { CustomText } from '../CustomText';

export interface UiButtonProps {
  title: string;
  fontSize: number;
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800';
  color: string;
  backgroundColor: string;
  onPress: () => void;
}

export const UiButton: React.FC<UiButtonProps> = (props: UiButtonProps) => {
  return (
    <Pressable onPress={props.onPress} style={{ ...styles.button, backgroundColor: props.backgroundColor }}>
      <CustomText
        style={{ ...styles.textStyle, color: props.color, fontWeight: props.fontWeight, fontSize: props.fontSize }}>
        {props.title}
      </CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 12,
    elevation: 2,
  },
  textStyle: {
    textAlign: 'center',
  },
});
