import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default function SettingsScreen({ navigation }) {
    const header = () => {
        return (
            <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", paddingTop: 50 }}>
                <Text style={{ fontSize: 32, lineHeight: 32, color: "white" }}>
                    Settings
                </Text>
            </View>
        );
    };

    const footer = () => {
        return (
            <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", backgroundColor: "#0C0404" }}>
                <Text style={{ fontSize: 20, lineHeight: 20, color: "gray", top: "30%" }}>
                    thecyberhub Mobile v1.2.0
                </Text>
            </View>
        );
    };



    return (
        <>
            <ScrollView style={{ flex: 0.2, backgroundColor: "#0C0404", }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#26282A", borderWidth: 0.5, borderBottomColor: "gray" }}>
                    {header()}

                    <View style={{ backgroundColor: "#26282A", width: "100%", padding: 10, }}>
                        <Text style={{ color: "gray", fontSize: 25 }}>General</Text>
                        <View>
                            <Pressable
                                android_ripple={{ color: '#4D423E', borderless: false }}
                            >
                                <Text style={{ color: "snow", fontSize: 20, padding: 15 }}>Theme</Text>
                            </Pressable>
                        </View>

                        <View>
                            <Pressable
                                android_ripple={{ color: '#4D423E', borderless: false }}
                            >
                                <Text style={{ color: "snow", fontSize: 20, padding: 15 }}>Help</Text>
                            </Pressable>

                        </View>

                    </View>
                </View>



                <View style={{ backgroundColor: "#26282A", padding: 10, top: 20, borderTopWidth: 0.5, borderColor: "gray" }}>
                    <Text style={{ color: "gray", fontSize: 25 }}>More Options</Text>

                    <Pressable
                        android_ripple={{ color: '#4D423E', borderless: false }}
                    >
                        <Text style={{ color: "snow", fontSize: 20, padding: 15 }}>Share Feedback</Text>
                    </Pressable>


                    <Pressable
                        android_ripple={{ color: '#4D423E', borderless: false }}
                    >
                        <Text style={{ color: "snow", fontSize: 20, padding: 15 }}>Terms of Service</Text>
                    </Pressable>


                    <Pressable
                        android_ripple={{ color: '#4D423E', borderless: false }}
                    >
                        <Text style={{ color: "snow", fontSize: 20, padding: 15 }}>Privacy Policy</Text>
                    </Pressable>


                    <Pressable
                        android_ripple={{ color: '#4D423E', borderless: false }}
                    >
                        <Text style={{ color: "snow", fontSize: 20, padding: 12, }}>Open Source License </Text>
                    </Pressable>

                </View>
            </ScrollView>
            {footer()}
        </>
    );
}