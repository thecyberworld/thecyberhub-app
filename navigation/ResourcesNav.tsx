import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Community from "../screens/Resources/Community";
import Quiz from "../screens/Resources/Quiz";
import Resources from "../screens/Resources/Resources";

const Stack = createNativeStackNavigator();

const resourcesScreenNames = {
    resourcesOptions: "ResourcesOptions",
    community: "Community",
    quiz: "Quiz",
};

const ResourcesNav = () => {
    const { resourcesOptions, ...otherScreens } = resourcesScreenNames;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={resourcesOptions} component={Resources} initialParams={{ otherScreens }} />
            <Stack.Screen name={otherScreens.community} component={Community} />
            <Stack.Screen name={otherScreens.quiz} component={Quiz} />
        </Stack.Navigator>
    );
};
export default ResourcesNav;
