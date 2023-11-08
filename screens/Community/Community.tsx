import Iconn from "@expo/vector-icons/EvilIcons";
import Icons from "@expo/vector-icons/Feather";
import Icon from "@expo/vector-icons/Fontisto"; //@ts-ignore
import * as Linking from "expo-linking";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Community = () => {
    const header = () => {
        return (
            <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 32, lineHeight: 32, color: "white", top: 20 }}>Community</Text>
            </View>
        );
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#181818",
            }}
        >
            {header()}

            <Image
                style={{
                    flex: 1,
                    justifyContent: "center",
                    opacity: 0.2,
                    resizeMode: "contain",
                    width: "70%",
                    top: -100,
                }}
                source={require("../../assets/thecyberworld-green01.png")}
            />
            <View style={{ position: "absolute", zIndex: 1, top: 180 }}>
                <Text
                    style={{
                        color: "white",
                        fontSize: 25,
                        lineHeight: 25,
                        textAlign: "center",
                        fontWeight: "700",
                    }}
                >
                    Loved by thousands of hackers
                </Text>
                <View style={{ flex: 1, padding: 10 }}>
                    <Text style={{ color: "#BFBFBF", textAlign: "center", fontWeight: "300", fontSize: 17 }}>
                        Community's goal is to help new folks to get started with open-source and cyber-security. We
                        build open-source projects for hackers and developers
                    </Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: "60%",
                            flexDirection: "row",
                            borderColor: "#5663F7",
                            backgroundColor: "#5663F7",
                            padding: 7,
                            borderWidth: 1,
                            alignItems: "center",
                            borderRadius: 6,
                            top: 10,
                        }}
                        onPress={() => {
                            Linking.openURL("https://discord.com/invite/QHBPq6xP5p");
                        }}
                    >
                        <Icon name="discord" size={28} color={"white"} />

                        <Text style={{ color: "white", marginLeft: 5 }}>Join Our Discord Channel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, top: 20, alignSelf: "center", flexDirection: "row" }}>
                    <Icons
                        name="twitter"
                        size={30}
                        color={"#F5F5DC"}
                        onPress={() => {
                            Linking.openURL("https://twitter.com/thecyberw0rld");
                        }}
                        style={{ padding: 15 }}
                    />
                    <Icons
                        name="github"
                        size={30}
                        color={"#F5F5DC"}
                        onPress={() => {
                            Linking.openURL("https://github.com/thecyberworld");
                        }}
                        style={{ padding: 15 }}
                    />
                    <Iconn
                        name="sc-telegram"
                        size={40}
                        color={"#F5F5DC"}
                        onPress={() => {
                            Linking.openURL("https://t.me/s/thecyberw0rld");
                        }}
                        style={{ padding: 15 }}
                    />
                    <Icons
                        name="instagram"
                        size={30}
                        color={"#F5F5DC"}
                        onPress={() => {
                            Linking.openURL("https://www.instagram.com/thecyberw0rld/");
                        }}
                        style={{ padding: 15 }}
                    />
                </View>
            </View>

            <View
                style={{
                    padding: 35,
                    top: 20,
                    width: "100%",
                }}
            >
                <Text style={{ color: "white", textAlign: "center", fontSize: 23 }}>Join our Community</Text>
                <Text></Text>
                <TouchableOpacity
                    style={{ padding: 10, backgroundColor: "#1A2421", width: "100%", borderRadius: 7 }}
                    onPress={() => {
                        Linking.openURL("https://www.youtube.com/c/thecyberworld");
                    }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icons name="youtube" size={30} color="white" />
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "500", marginLeft: "30%" }}>
                            YouTube
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity
                    style={{ padding: 10, backgroundColor: "#1A2421", width: "100%", borderRadius: 7 }}
                    onPress={() => {
                        Linking.openURL("https://www.thecyberhub.org/");
                    }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require("../../assets/thecyberworld-green01.png")}
                            style={{ height: 35, width: 35 }}
                        />
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "500", marginLeft: "20%" }}>
                            Thecyberhub.org
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text></Text>
            </View>
        </View>
    );
};

export default Community;
