import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Test from './src/components/test';
import Taist from './src/components/taist';
import Use from './src/components/use';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Other') {
            iconName = 'moon';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#841584",
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen
          name="Home"
          component={Taist}
          options={{title: 'Home'}}
        />
        <Tab.Screen name="Profile" component={Use} />
        <Tab.Screen name="Other" component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <ScrollView>
    //     <StatusBar style="auto" />
    //     <Taist/>
    //     <Test firstname="Lisa" lastname="Lucas"/>
    //     <Use/>
    //   </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
