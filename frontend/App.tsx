import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import setupAxiosInterceptors from './src/hooks/axios-interceptor.hook';
import {useAuthStore} from './src/store/auth';
import Navigation from './src/navigation/Navigation';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const {isAuthenticated} = useAuthStore();
  setupAxiosInterceptors();

  return (
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
  );
}

export default App;
