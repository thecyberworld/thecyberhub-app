import { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import Categories from "./Categories";
import { CategoriesButtonData } from "./Categories/CategoriesButtonData";
import Colors from "../../../styles/colors";
import GoBackButton from "../GoBackButton";

const Quiz = () => {
    const [categoryToShow, setCategoryToShow] = useState("CBQ");
    const width = Dimensions.get("window").width;
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#181818",
            }}
        >
            <GoBackButton />
            <View style={{ flex: 1, marginTop: 20 }}>
                <Carousel
                    data={CategoriesButtonData}
                    width={width}
                    height={50}
                    mode="parallax"
                    onScrollBegin={() => setCategoryToShow("")}
                    onScrollEnd={(index) => setCategoryToShow(CategoriesButtonData[index].type)}
                    renderItem={({ item: { value } }) => (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                backgroundColor: "white",
                                borderBottomColor: Colors.primary,
                                borderBottomWidth: 5,
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 26, color: "black", fontWeight: "700" }}>
                                {value}
                            </Text>
                        </View>
                    )}
                />
                {categoryToShow && <Categories category={categoryToShow} />}
            </View>
        </View>
    );
};
export default Quiz;
