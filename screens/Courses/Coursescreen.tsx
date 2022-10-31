import React from "react";
import { Text, View, Image, FlatList, TouchableHighlight } from "react-native";
import * as Typography from "../../styles/typography";
import styles from "../EventsScreenStyles";
import { DATA } from "./CourseData";
//@ts-ignore
import ExpoFastImage from "expo-fast-image";
import { readBuilderProgram } from "typescript";
import * as Linking from "expo-linking";

const header = () => {
  return (
    <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 32, lineHeight: 32, color: "white" }}>
        Free Courses
      </Text>
    </View>
  );
};

const section = () => {
  return (
    <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
      {DATA.map((item) => (
        <Text
          style={{ fontSize: 25, lineHeight: 29, color: "white" }}
          key={item.id}>
          {item.sectionsHeading}
        </Text>
      ))}
    </View>
  );
};
//@ts-ignore
const Item = ({ data }) => (
  <View style={{ flex: 1 }}>
    <View key={data.id}>
      {/* {console.log(data.item.YTChannelImageLink)} */}
      {/* <Text
        style={{ ...Typography.title, color: "white", textAlign: "center", marginTop: 30 }}>
        {data.sectionsHeading}
      </Text> */}
      <View
        style={{
          backgroundColor: "#1a1c1d",
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 40,
          borderRadius: 10,
        }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "gray",
              borderColor: "white",
              position: "absolute",
              zIndex: 1,
              borderRadius: 7,
              margin: 5,
              opacity: 0.8,
            }}>
            <Text style={{ color: "#000", fontWeight: "400", padding: 8 }}>
              {data.topLine}
            </Text>
          </View>
          <TouchableHighlight
            onPress={() => {
              Linking.openURL(data.videoLink);
            }}
            >
          <ExpoFastImage
            style={{ maxWidth: "100%", height: 200, borderRadius: 10 }}
            source={{ uri: data.YTChannelImageLink }}
          />
          </TouchableHighlight>



        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#2f80ed",
              borderRadius: 7,
              alignSelf: "flex-start",
            }}>
            <Text
              style={{
                color: "#000",
                padding: 5,
                textAlign: "center",
                alignSelf: "flex-start",
              }}>
              {data.tag}
            </Text>
          </View>

          <View style={{}}>
            {/* <Text style={{ color: "white", }}>
              1st October 2022•
            </Text> */}
            <Text
              style={{
                color: "white",
                fontSize: 20,
                paddingHorizontal: 5,
                alignSelf: "flex-start",
              }}
              onPress={() => {
                Linking.openURL(data.videoLink);
              }}>
              {data.videoHeading}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "95%",
            height: 1.5,
            backgroundColor: "gray",
            alignSelf: "center",
          }}
        />
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
            <TouchableHighlight
            onPress={() => {
              Linking.openURL(data.channelLink);
            }}
            >
                   <ExpoFastImage
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri: data.channelLogo }}
            
          />
</TouchableHighlight>

          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "normal",
                fontSize: 15,
                color: "white",
              }}
              onPress={() => {
                Linking.openURL(data.channelLink);
              }}>
              {data.channelName}
            </Text>
            <Text style={{color: "gray"}}>{data.timeStamp}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const CourseScreen = () => {
  // const data = DATA.reduce((data, item)=>({
  //   ...data,
  //   [item.sectionsHeading]: [...(data.sectionsHeading || []), item]
  // }), {})

  // console.log(data);
  //@ts-ignore

  const renderItem = ({ item }) => (
    <>
      <Item data={item} />
    </>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#010606" }}>
      {header()}

      <View style={{ flex: 0.8 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default CourseScreen;
