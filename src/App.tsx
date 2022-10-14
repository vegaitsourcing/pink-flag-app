import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@pf/navigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
