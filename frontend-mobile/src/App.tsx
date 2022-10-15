import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@pf/navigation';
import { ThemeProvider } from '@emotion/react';
import { AppTheme } from '@pf/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
