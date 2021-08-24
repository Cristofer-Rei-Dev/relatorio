import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/Home/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Report from './src/pages/Report/Report';
import RegisterTime from './src/pages/RegisterTime/RegisterTime';
import Study from './src/pages/Study/Study';
import Lists from './src/pages/Lists/Lists';
import SettingsScreen from './src/pages/Settings/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabBottom} options={{ headerShown: false }} />
      <Stack.Screen name="Config" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

const TabBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "";

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Report':
              iconName = 'insights';
              break;
            case 'Study':
              iconName = 'groups';
              break;
            case 'List':
              iconName = 'phone';
              break;
            case 'Config':
              iconName = 'settings';
              break;
            case 'Goals':
              iconName = 'lightbulb';
              break;
            default:
              iconName = route.name.toLowerCase();
              break;
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{
        tabStyle: styles.tabsStyle,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: styles.tabs,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen
        name="RegisterTime"
        component={RegisterTime}
        options={() => ({
          tabBarIcon: () => (
            <View style={{ marginBottom: '30%' }}>
              <LinearGradient
                style={styles.iconTabRound}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={['#D500F9', '#4A148C']}
              >
                <Icon name="add" size={26} color='#FFF' />
              </LinearGradient>
            </View>
          ),
        })}
      />
      <Tab.Screen name="Study" component={Study} />
      <Tab.Screen name="List" component={Lists} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer >
  );
};

export default App;

const styles = StyleSheet.create({
  tabs: {
    borderTopWidth: 0,
  },
  tabsStyle: {
    backgroundColor: '#161b33',
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  hidden: {
    height: 0,
    width: 0,
  }
});
