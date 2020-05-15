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

// const useStyles = makeStyles<Theme>((theme) => ({
//   addedTodayNonZero: {
//     backgroundColor: theme.palette.success.main,
//     paddingLeft: 50,
//     paddingRight: 50,
//     borderRadius: 5,
//   },
// }));

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: Function;
}

const Home: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
  const theme = useTheme();
  // const styles = useStyles();

  const [isLoading] = useState(false);

  const [questionsInfo] = useState<QuestionsInfo>(questions);

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
          {isLoading ? (
            <Backdrop open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <>
              <Grid style={{ marginLeft: 30 }}>
                Name the Film or TV Show that used these number plates.
              </Grid>
              <Grid
                style={{ margin: "0 30px" }}
                item
                container
                direction="column"
                spacing={3}
                justify="space-evenly"
                alignItems="center"
              >
                {questionsInfo.map((question, index) => (
                  <Grid
                    item
                    container
                    key={index}
                    spacing={2}
                    justify="flex-start"
                    // alignItems="center"
                  >
                    <Grid item>{question.questionNumber}</Grid>
                    <Grid item>
                      {/* <img
                      src={`images/${question.imageFileName}.png`}
                      alt={question.imageFileName}
                    ></img> */}

                      <SimpleSlide
                        imageFileName={question.imageFileName}
                      ></SimpleSlide>
                    </Grid>
                  </Grid>
                ))}
                {/* <pre>{JSON.stringify(questionsInfo)}}</pre> */}
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Home;
