import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // height: 180,
      // margin: 30,
    },
    wrapper: {
      // width: 100 + theme.spacing(2),
    },
    paper: {
      zIndex: 1,
      position: "relative",
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  })
);

interface SimpleFadeProps {
  imageFileName: string;
  direction?: "left" | "right" | "up" | "down";
}

const SimpleFade: React.FC<SimpleFadeProps> = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label={checked ? "Hide Number Plate" : "Show Number Plate"}
        />
        <Fade in={checked} timeout={1000} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            {/* <svg className={classes.svg}>
              <polygon
                points="0,100 50,00, 100,100"
                className={classes.polygon}
              />
            </svg> */}
            <img
              src={`${process.env.PUBLIC_URL}/images/${props.imageFileName}.png`}
              alt={props.imageFileName}
            ></img>
          </Paper>
        </Fade>
      </div>
    </div>
  );
};

export default SimpleFade;
