import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../styles/colors';
// Screens
import HomeScreen from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';
import EventsScreen from '../screens/EventsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CourseScreen from '../screens/Courses/Coursescreen';

//Screen names
const homeName = 'Home';
// const detailsName = 'Details';
const eventsName = 'Events'
const settingsName = 'Settings';
const courseName = 'Courses';


const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        intialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } 
            // else if (rn === detailsName) {
            //   iconName = focused ? 'list' : 'list-outline';
            // }  
            else if (rn === eventsName) {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (rn === courseName) {
              iconName = focused ? 'library' : 'library-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.primaryLightest,
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: {
            backgroundColor: Colors.greyDarkest,
            padding: 10,
            height: 70,
          },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        {/* <Tab.Screen name={detailsName} component={DetailsScreen} /> */}
        <Tab.Screen name={eventsName} component={EventsScreen} />
        <Tab.Screen name={courseName} component={CourseScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
