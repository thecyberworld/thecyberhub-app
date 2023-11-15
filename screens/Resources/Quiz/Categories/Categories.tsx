import { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";

import MapingQuizData from "./CategoriesData";
import RenderProgressIndicator from "../RenderProgressIndicator";

const Categories = ({ category }: { category: string }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [scoreList, setScoreList] = useState(0);
    const questions = MapingQuizData[category as keyof typeof MapingQuizData];

    const handleAnswerButtonClick = (isCorrect, length) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleResetButton = (score) => {
        setScoreList(scoreList + score);
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
    };

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                {showScore ? (
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreText}>
                            You scored {score} out of {questions.length}
                        </Text>
                        <Pressable
                            style={({ pressed }) => [styles.resetButton, pressed && styles.btnPressed]}
                            onPress={() => handleResetButton(score)}
                        >
                            <Text style={styles.resetButtonText}>Start again</Text>
                        </Pressable>
                    </View>
                ) : (
                    <View style={styles.quizContainer}>
                        <View>
                            <View>
                                <RenderProgressIndicator questionsArray={questions} currentQuestion={currentQuestion} />
                                <Text style={styles.questionCountText}>Question {currentQuestion + 1}</Text>
                            </View>
                            <Text style={styles.questionText}>{questions[currentQuestion].questionText}</Text>
                        </View>
                        <View style={styles.answerContainer}>
                            {questions[currentQuestion].answerOptions.map((answerOption, i) => (
                                <Pressable
                                    style={({ pressed }) => [styles.answerButton, pressed && styles.btnPressed]}
                                    key={i}
                                    onPress={() => handleAnswerButtonClick(answerOption.isCorrect, questions.length)}
                                >
                                    <Text style={styles.answerButtonText}>{answerOption.answerText}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};
export default Categories;

const styles = StyleSheet.create({
    mainContainer: {
        minHeight: 400,
        backgroundColor: "#090909",
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 10,
        elevation: 3,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 30,
    },
    quizContainer: { paddingHorizontal: 30 },
    scoreContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    scoreText: {
        color: "white",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 24,
    },
    resetButton: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1c1d",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#545454",
        paddingVertical: 10,
        marginTop: 15,
    },
    btnPressed: {
        opacity: 0.7,
        backgroundColor: "#222",
        transform: [{ scale: 0.98 }],
    },
    resetButtonText: {
        textAlign: "center",
        fontSize: 16,
        color: "white",
    },
    questionCountText: {
        fontSize: 20,
        color: "white",
        fontWeight: "700",
    },
    questionText: {
        color: "#cecac3",
        fontSize: 19,
        marginTop: 10,
        marginBottom: 20,
    },
    answerContainer: {
        justifyContent: "space-between",
    },
    answerButton: {
        backgroundColor: "#101010",
        borderRadius: 5,
        padding: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: "#232323",
        borderBottomWidth: 2,
    },
    answerButtonText: {
        textAlign: "left",
        fontSize: 15,
        color: "#cecac3",
    },
});
