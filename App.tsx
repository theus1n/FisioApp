import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AgendaScreen from './screens/AgendaScreen';
import ContactScreen from './screens/ContactScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import AboutScreen from './screens/AboutScreen';

import { AuthProvider, useAuth } from './context/AuthContext';

export type RootStackParamList = {
  Home: undefined;
  Agenda: undefined;
  Contact: undefined;
  Exercise: undefined;
  Feedback: undefined;
  About: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppRoutes() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return null; // pode colocar um spinner aqui

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Agenda" component={AgendaScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Exercise" component={ExerciseScreen} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AuthProvider>
  );
}
