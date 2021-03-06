import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { signUp } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "10px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
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
        <Typography variant="h5">SignUp</Typography>
        <TextField
          margin="dense"
          id="enter-name"
          label="Name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          margin="dense"
          id="enter-email"
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          margin="normal"
          id="enter-password"
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          margin="normal"
          variant="contained"
          color="secondary"
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;
