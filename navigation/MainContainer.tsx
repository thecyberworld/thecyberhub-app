import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Screens
// import DetailsScreen from '../screens/DetailsScreen';
// import Community from "../screens/Resources/Community";
import ResourcesNav from "./ResourcesNav";
import CourseScreen from "../screens/Courses/Coursescreen";
import EventsScreen from "../screens/EventsScreen";
import HomeScreen from "../screens/HomeScreen";
import JobsScreen from "../screens/JobsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../styles/colors";

//Screen names
const screenNames = {
    homeName: "Home",
    detailsName: "Details",
    eventsName: "Events",
    settingsName: "Settings",
    jobsName: "Jobs",
    courseName: "Courses",
    resources: "Resources",
};

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    const { homeName, eventsName, settingsName, detailsName, jobsName, courseName, resources } = screenNames;
    return (
        <NavigationContainer>
            <Tab.Navigator
                intialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        const rn = route.name;
                        switch (rn) {
                            case homeName:
                                iconName = focused ? "home" : "home-outline";
                                break;
                            case detailsName:
                                iconName = focused ? "list" : "list-outline";
                                break;
                            case eventsName:
                                iconName = focused ? "list" : "list-outline";
                                break;
                            case settingsName:
                                iconName = focused ? "settings" : "settings-outline";
                                break;
                            case jobsName:
                                iconName = focused ? "briefcase-sharp" : "briefcase-outline";
                                break;
                            case courseName:
                                iconName = focused ? "library" : "library-outline";
                                break;
                            case resources:
                                iconName = focused ? "folder" : "folder-outline";
                                break;
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: Colors.primaryLightest,
                    tabBarStyle: {
                        backgroundColor: Colors.greyDarkest,
                        padding: 10,
                        height: 70,
                    },
                    tabBarLabelStyle: {
                        padding: 10,
                    },
                })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                {/* <Tab.Screen name={detailsName} component={DetailsScreen} /> */}
                <Tab.Screen name={eventsName} component={EventsScreen} />
                <Tab.Screen name={jobsName} component={JobsScreen} />
                <Tab.Screen name={courseName} component={CourseScreen} />
                <Tab.Screen name={resources} component={ResourcesNav} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
