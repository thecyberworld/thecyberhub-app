import React from "react";
import { StatusBar } from "react-native";

import MainContainer from "./navigation/MainContainer";

const App = () => {
    return (
        <>
            <StatusBar />
            <MainContainer />
        </>
    );
};

export default App;
