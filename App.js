import React from "react";
import { ThemeProvider } from "emotion-theming";
import AppNavigator from "./src/Navigator";

const DefaultTheme = {
  primary: "blue",
  card: "#ffffff",
  text: "#000000",
  backgroundColor: "#ebeff5"
};

const DarkTheme = {
  primary: "blue",
  card: "#222b45",
  text: "#ffffff",
  backgroundColor: "#101426"
};

class App extends React.Component {
  state = {
    theme: DefaultTheme
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
