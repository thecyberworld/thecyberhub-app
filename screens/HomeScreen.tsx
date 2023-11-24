import { Alert, View, Text, TouchableOpacity } from "react-native";

import VideoDisplay from "../components/VideoDisplay";
import Colors from "../styles/colors";
import * as Spacing from "../styles/spacing";
import * as Typography from "../styles/typography";

export default function HomeScreen({ navigation }) {
    return (
        <>
            <VideoDisplay
                requiredBgImage={require("../assets/temp-bg.png")}
                videoUri={{ uri: "https://imgur.com/Q8km3ih.mp4" }}
            />
            <View
                style={{
                    flex: 0,
                    top: "30%",
                    padding: Spacing.m,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 39,
                }}
            >
                <Text
                    style={{
                        ...Typography.largeTitleEmphasized,
                        color: Colors.greyLightest,
                        marginBottom: Spacing.m,
                        textAlign: "center",
                    }}
                >
                    Cyber Security Made Easy.
                </Text>
                <Text
                    style={{
                        ...Typography.bodyEmphasized,
                        color: Colors.primaryLightest,
                        textAlign: "center",
                        padding: Spacing.m,
                        marginBottom: Spacing.m,
                    }}
                >
                    Cyber Security is a field that is growing at an exponential rate.
                </Text>
                <TouchableOpacity onPress={() => Alert.alert('This is the "Home" screen.')}>
                    <Text
                        style={{
                            ...Typography.body,
                            padding: Spacing.m,
                            color: Colors.primary,
                            borderWidth: 0.3,
                            borderColor: Colors.secondaryLight,
                            borderRadius: Spacing.s,
                        }}
                    >
                        {`Get Started  >`}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
