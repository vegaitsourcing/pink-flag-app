import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';

export const WithSafeView = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
  const ComponentWithSafeAreaView: React.FC<P> = ({ ...props }) => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.avoidingView}
        automaticallyAdjustContentInsets={false}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bounces={false}>
        <Component {...(props as P)} />
      </KeyboardAwareScrollView>
    );
  };

  return ComponentWithSafeAreaView;
};
