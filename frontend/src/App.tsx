import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp, Login} from './screens';
import {useAxiosInterceptors} from './hooks';
import {useAuthStore} from './store';
import Navigation from './navigation/Navigation';
import {PaperProvider} from 'react-native-paper';
import {theme} from './styles/theme';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const {isAuthenticated} = useAuthStore();
  useAxiosInterceptors();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <Stack.Screen name="MainNavigation" component={Navigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
