import { View, StyleSheet } from "react-native";

export default function RenderProgressIndicator({ questionsArray, currentQuestion }) {
    return (
        <View style={styles.quizProgressIndicator}>
            {questionsArray.map((_, index) => {
                return (
                    <View
                        key={index + "key"}
                        style={[
                            styles.indicatorDot,
                            {
                                backgroundColor:
                                    currentQuestion === index || currentQuestion > index
                                        ? "white"
                                        : "rgba(62, 62, 62, 0.76)",
                            },
                        ]}
                    ></View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    quizProgressIndicator: {
        height: 20,
        marginTop: 5,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    indicatorDot: {
        borderRadius: 50,
        height: 7,
        width: 7,
        borderWidth: 1,
    },
});
