import React from "react";
import { Text, View, Image, FlatList } from "react-native";

import styles from "./EventsScreenStyles";
import Capture from "../assets/Capture.png";
import * as Typography from "../styles/typography";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];

const header = () => {
    return (
        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ ...Typography.largeTitle, color: "white" }}>All Events</Text>
        </View>
    );
};

const Item = ({ title }) => (
    <View style={styles.item}>
        <View style={{ flex: 0.3 }}>
            <Image style={{ width: 300, height: 80 }} source={Capture} />
        </View>
        <View style={{ flex: 0.3, paddingVertical: 10 }}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>TheCyberCTF</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "white", fontSize: 12 }}>1st October 2022•</Text>
                <Text style={{ color: "white", fontSize: 12, textDecorationLine: "underline", paddingHorizontal: 5 }}>
                    Discord
                </Text>
            </View>
        </View>
        <View style={{ flex: 0.4 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
                We host every weekend for the community for free. Take participate in the CTF and win exciting prizes
                and this is free for everyone. Join Discord now.
            </Text>
        </View>
    </View>
);

const EventsScreen = () => {
    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
        <View style={{ flex: 1, backgroundColor: "#010606" }}>
            {header()}
            <View style={{ flex: 0.8 }}>
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
        </View>
    );
};

export default EventsScreen;
