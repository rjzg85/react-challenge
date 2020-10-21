import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  blockContainer: {
    backgroundColor: "#ddd",
    textAlign: "left",
    padding: "5px",
    marginTop: "5px",
  },
  title: {
    color: "blue",
    fontSize: "10px",
  },
  body: {
    fontSize: "12px",
  },
}));

const Block = ({ block: { id, attributes } }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.blockContainer}>
      <Grid item lg={12} xs={12} md={12}>
        <Typography className={classes.title}>
          {id.toString().padStart(3, "0")}
        </Typography>
        <Typography className={classes.body}>{attributes.data}</Typography>
      </Grid>
    </Grid>
  );
};

Block.propTypes = {
  block: PropTypes.object.isRequired,
};

export default Block;
