import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import React, { useRef, useState } from "react";
//@ts-ignore
import Icon from "react-native-vector-icons/Fontisto"; //@ts-ignore
import Icons from "react-native-vector-icons/Feather";
import * as Linking from "expo-linking";



const Community = () => {
  const [showView, setShowView] = useState(false);


  const header = () => {
    return (
      <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 32, lineHeight: 32, color: "white", top: 20 }}>
          Community
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}>
    {header()}

      <Image
        style={{
          flex: 1,
          justifyContent: "center",
          opacity: 0.2,
          resizeMode: "contain",
          width: "100%",
          top: 40,
        }}
        source={require("../../assets/thecyberworld-green01.png")}
      />
      <View style={{ position: "absolute", zIndex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            lineHeight: 26,
            textAlign: "center",
            fontWeight: "500",
          }}>
          Loved by thousands of hackers
        </Text>
        <View style={{ flex: 1, padding: 15 }}>
          <Text
            style={{ color: "snow", textAlign: "center", fontWeight: "300" }}>
            Community's goal is to help new folks to get started with
            open-source and cyber-security. We build open-source projects for
            hackers and developers
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <TouchableOpacity
            style={{
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
            <Icon name="discord" size={28} color="#7289DA" />

            <Text style={{ color: "white", marginLeft: 5 }}>
              Join Our Discord Channel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {showView ? (
        <View
          style={{
            alignSelf: "flex-end",
            padding: 35,
            bottom: 50,
            zIndex: 0,
            position: "absolute",


          }}>
          <TouchableOpacity style={{ paddingBottom: 15 }}
            onPress={() => {
              Linking.openURL("https://github.com/thecyberworld");
            }}

          >
            <Icons name="github" size={30} color="snow" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingBottom: 15 }}

            onPress={() => {
              Linking.openURL("https://twitter.com/thecyberw0rld");
            }}
          >
            <Icons name="twitter" size={30} color="snow" />
          </TouchableOpacity>
          <TouchableOpacity style={{}}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/thecyberw0rld/");
            }}
          >
            <Icons name="instagram" size={30} color="snow" />
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={{ alignSelf: "flex-end", padding: 30 }}>

        <TouchableOpacity
          style={{ padding: 8, backgroundColor: "gray", borderRadius: 60 }}
          onPress={() => {
            setShowView(!showView);
          }}>
          <Icons name="plus" size={30} color="snow" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Community;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 100,
    backgroundColor: 'red'
  },
  button: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10
  }
});