import React, { useState } from "react";
import {
  Paper,
  Grid,
  ThemeProvider,
  // Button,
  Backdrop,
  CircularProgress,
  // Chip,
  useTheme,
  Switch,
  TextField,
  // Theme,
} from "@material-ui/core";
import Header from "./Header";
// import { blue } from "@material-ui/core/colors";
// import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
// import { Link } from "react-router-dom";
import questions from "../models/Question";
// import { makeStyles } from "@material-ui/styles";
import { QuestionsInfo } from "../models/Question";
import SimpleSlide from "./SimpleSlide";
import SimpleFade from "./SimpleFade";

// const useStyles = makeStyles<Theme>((theme) => ({
//   addedTodayNonZero: {
//     backgroundColor: theme.palette.success.main,
//     paddingLeft: 50,
//     paddingRight: 50,
//     borderRadius: 5,
//   },
// }));

type DirectionOptions = "left" | "right" | "up" | "down";

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: Function;
}

const Home: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
  const theme = useTheme();
  // const styles = useStyles();

  const [password, setPassword] = useState("");
  // const [isActive, setIsActive] = useState(password === "withnail");
  const [isLoading] = useState(false);

  const [questionsInfo] = useState<QuestionsInfo>(questions);

  const isActive = password === "ecumenical";

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} square style={{ height: "100vh" }}>
        <Grid container direction="column" justify="center" spacing={4}>
          <Grid item>
            <Header
              title="What's My Number?"
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </Grid>
          <Grid item>
            {/* <Switch
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
            /> */}
            <TextField
              type="password"
              placeholder="magic word?"
              style={{ marginLeft: 10 }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          {isLoading ? (
            <Backdrop open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            isActive && (
              <>
                <Grid style={{ marginLeft: 30 }}>
                  Name the Film or TV Show that used these number plates.
                </Grid>
                <Grid
                  style={{ margin: "0 10px 0 0" }}
                  item
                  container
                  direction="column"
                  spacing={3}
                  justify="space-evenly"
                  alignItems="center"
                >
                  {questionsInfo.map((question, index) => {
                    const directionNumber = index % 4;

                    let directionText: DirectionOptions = "left";

                    if (directionNumber === 0) {
                      directionText = "left";
                    }

                    if (directionNumber === 1) {
                      directionText = "right";
                    }

                    if (directionNumber === 2) {
                      directionText = "down"; // don't use up
                    }

                    if (directionNumber === 3) {
                      directionText = "down";
                    }

                    return (
                      <Grid
                        item
                        container
                        key={index}
                        spacing={2}
                        justify="flex-start"
                        // alignItems="center"
                      >
                        <Grid item>Q{question.questionNumber}</Grid>
                        <Grid item>
                          {/* <img
                      src={`images/${question.imageFileName}.png`}
                      alt={question.imageFileName}
                    ></img> */}

                          {index % 3 !== 0 ? (
                            <SimpleSlide
                              imageFileName={question.imageFileName}
                              direction={directionText}
                            ></SimpleSlide>
                          ) : (
                            <SimpleFade
                              imageFileName={question.imageFileName}
                              direction={directionText}
                            ></SimpleFade>
                          )}
                        </Grid>
                      </Grid>
                    );
                  })}
                  {/* <pre>{JSON.stringify(questionsInfo)}}</pre> */}
                </Grid>
              </>
            )
          )}
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Home;
