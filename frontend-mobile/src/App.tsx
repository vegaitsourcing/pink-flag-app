import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@pf/navigation';
import { ThemeProvider } from '@emotion/react';
import { AppTheme } from '@pf/theme';
import { Provider } from 'react-redux';
import { store } from '@pf/store';

const App: React.FC = () => {
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
