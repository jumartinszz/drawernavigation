import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';

import Contact from './src/screens/Contact';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>

    <StatusBar style="auto" />
    </NavigationContainer>
  );
}

