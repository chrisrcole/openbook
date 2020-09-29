import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CreatePost from "./CreatePost";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  post: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: `${theme.spacing(1)}px auto`,
  },
  writePost: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  writePostIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid container spacing={3} style={{ padding: 4 }}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <CreatePost />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Grid container spacing={3} style={{ padding: 4 }}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Post />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Grid>
    </div>
  );
};
