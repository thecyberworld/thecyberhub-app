import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, Pressable } from "react-native";

import Colors from "../../styles/colors";

const GoBackButton = () => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    width: 80,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 3,
                    alignSelf: "flex-start",
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: Colors.grey,
                },
                pressed && { opacity: 0.7 },
            ]}
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Ionicons name="arrow-back" color={Colors.grey} size={16} />
            <Text style={{ color: Colors.grey, fontSize: 14 }}>Go Back</Text>
        </Pressable>
    );
};

export default GoBackButton;
