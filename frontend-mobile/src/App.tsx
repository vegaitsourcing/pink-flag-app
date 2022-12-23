import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@pf/navigation';
import { ThemeProvider } from '@emotion/react';
import { AppTheme } from '@pf/theme';
import { Provider } from 'react-redux';
import { store } from '@pf/store';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={AppTheme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
