import * as React from 'react';
import 'react-native-gesture-handler';

import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherDetailScreen from './WeatherDetailScreen';
import CityList from './CityList';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <CityList navigation={navigation} />
    <StatusBar style="auto" />
  </View>
);

const DetailScreen = ({ navigation, route }) => (
    <View style={styles.constructor}>
        <WeatherDetailScreen navigation={navigation} route={route} />
        <StatusBar style="auto" />
    </View>
)

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Cities' }}
          />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ title: 'weather'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});
