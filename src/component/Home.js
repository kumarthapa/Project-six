import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "./context/Authcontext";
import Cardbox from "./Cardbox";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "500px",
    margin: "100px auto",
    padding: "10px",
    backgroundColor: "gainsboro",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  cardbox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
    
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      [theme.breakpoints.down("sm")]: {
        width: "15ch",
      },
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const { onChangehandler, onclickhandler, onclearhandler, newinput ,input} =
    useAuth();

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.Inputfield}
          id="outlined-basic"
          label="Title..."
          variant="outlined"
          name="title"
          value={input.title}
          onChange={onChangehandler("title")}
        />
        <TextField
          className={classes.Inputfield}
          id="outlined-basic"
          label="write some text..."
          variant="outlined"
          name="text"
          value={input.text}
          onChange={onChangehandler("text")}
        />
        <Button variant="contained" color="primary" onClick={onclickhandler}>
          ADD
        </Button>
        <Button variant="contained" color="secondary" onClick={onclearhandler}>
          CLEAR
        </Button>
      </form>
      <hr />
      <div className={classes.cardbox}>
        {newinput.map((data, index) => {
          return <Cardbox title={data.title} text={data.text} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
