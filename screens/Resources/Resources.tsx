import { Pressable, Text, View, StyleSheet } from "react-native";

import Colors from "../../styles/colors";

const Resources = ({ navigation, route }) => {
    const { otherScreens } = route.params;
    const header = (
        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "flex-start" }}>
            <Text style={{ fontSize: 32, lineHeight: 32, color: "white" }}>Resources</Text>
        </View>
    );
    const screens = Object.keys(otherScreens).map((screen) => (
        <Pressable
            key={screen}
            onPress={() => {
                navigation.navigate(otherScreens[screen]);
            }}
            style={({ pressed }) => pressed && styles.pressedLink}
        >
            <View style={styles.link}>
                <Text style={styles.linkText}>{otherScreens[screen]}</Text>
            </View>
        </Pressable>
    ));
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#181818",
            }}
        >
            {header}
            {screens}
        </View>
    );
};
export default Resources;

const styles = StyleSheet.create({
    link: {
        width: 300,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.primaryDarkest,
        margin: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.primaryDarkest,
    },
    pressedLink: {
        opacity: 0.7,
    },
    linkText: {
        color: Colors.white,
        fontSize: 20,
        textAlign: "center",
    },
});
