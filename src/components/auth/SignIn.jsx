import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { signIn } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "20px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  space: {
    marginTop: "30px",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography margin="dense" variant="h5">
          SignIn
        </Typography>
        <TextField
          margin="dense"
          id="enter-email"
          label="Email"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          margin="normal"
          id="enter-password"
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          margin="normal"
          className={classes.spacing}
          variant="contained"
          color="secondary"
          type="submit"
        >
          SignIn
        </Button>
      </form>
    </>
  );
};

export default SignIn;
