import { auto } from "@popperjs/core";
import React from "react";
import { Text, View, Image, FlatList } from "react-native";
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
      <Text style={{ ...Typography.largeTitle, color: "white" }}>
        Free Courses
      </Text>
    </View>
  );
};

const section = () => {
  return (
    <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>
      {DATA.map((item) => (
        <Text style={{ ...Typography.title, color: "white" }} key={item.id}>
          {item.sectionsHeading}
        </Text>
      ))}
    </View>
  );
};

const Item = ({ data }) => (
  <View style={{flex: 1}}>
    <View key={data.id}>
      {/* {console.log(data.item.YTChannelImageLink)} */}
      {/* <Text
        style={{ ...Typography.title, color: "white", textAlign: "center", marginTop: 30 }}>
        {data.sectionsHeading}
      </Text> */}
      <View style={{ backgroundColor: '#1a1c1d',  margin: 10, marginTop: 50, borderRadius: 10}}>
     

        <View style={{flex: 1}}>
          <View style={{backgroundColor:"gray", borderColor: "white",position:"absolute", zIndex: 1,borderRadius: 7, margin: 5}}>
         <Text style={{ color:"white", padding: 8}}>{data.topLine}</Text>
         </View>
          <ExpoFastImage
            style={{ maxWidth: "100%", height: 200, borderRadius: 10}}
            source={{ uri: data.YTChannelImageLink }}
            
          />
          

       </View>
        <View style={{ padding: 10, }}>
        <Text style={{color: "#000",padding: 5,  borderRadius: 10, backgroundColor: "#2f80ed",textAlign: "center",alignSelf: "flex-start" }}>{data.tag}</Text>

          <View style={{}}>
            {/* <Text style={{ color: "white", }}>
              1st October 2022•
            </Text> */}
            <Text
              style={{
                color: "white",
                fontSize: 20,
                paddingHorizontal: 5,
                alignSelf: "flex-start" 
              }}
              onPress = { ()=> {
                Linking.openURL(data.videoLink)
              }}
              >
              {data.videoHeading}
            </Text>
          </View>
        </View>
        <View style={{width: "95%",height: 1.5, backgroundColor:"gray", alignSelf: "center"}} />
        <View style={{ flexDirection: "row",alignItems: "center", padding: 10}}>

          <ExpoFastImage
            style={{ width: 50, height: 50, borderRadius: 25,}}
            source={{ uri: data.channelLogo }}
          />
                  

         <View style={{marginLeft: 10}}>
          <Text style={{textAlign:"center",fontWeight: "normal", fontSize: 15, color: "white",}}
          onPress = { ()=> {
            Linking.openURL(data.channelLink)
          }}
          >{data.channelName}</Text>
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

  const renderItem = ({item}) => (
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
