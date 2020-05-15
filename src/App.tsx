import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { blue, green, amber, blueGrey, red, cyan, indigo, lightBlue, grey, teal } from "@material-ui/core/colors";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Home from "./components/Home";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        main: "#0b5994",
      },
      secondary: {
        main: "#1d83c6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route
            path="/"
            exact
            render={() => (
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            )}
          />

          {/* <Route path="/" render={() => <div>404</div>} /> */}
          <Route
            path="*"
            render={() => (
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
