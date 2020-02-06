import React from "react";
import { ThemeProvider } from "emotion-theming";
import AppNavigator from "./Navigation";

const DefaultTheme = {
    primary: "tomato",
    card: "#ffffff",
    text: "#000000",
    backgroundColor: "#ebeff5"
};

const DarkTheme = {
    primary: "#2874f0",
    card: "#222b45",
    text: "#ffffff",
    backgroundColor: "#101426"
};

class App extends React.Component {
    state = {
        theme: DarkTheme
    };

    render() {
        const { theme } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <AppNavigator />
            </ThemeProvider>
        );
    }
}

export default App;
