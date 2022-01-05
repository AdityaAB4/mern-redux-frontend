import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  console.log(state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              todoApp
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography variant="subtitle2" className={classes.root}>
                Logged in as {auth.name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signin">
                  SignIn
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signup">
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
