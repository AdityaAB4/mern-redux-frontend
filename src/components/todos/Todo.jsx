import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import moment from "moment";

import { checkTodo, deleteTodo } from "../../store/actions/todoActions";

const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  greyStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  redColor: {
    color: "#f44336",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Todo = ({ todo, setTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleUpdateClick = () => {
    setTodo(todo);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={classes.todoStyle}>
      <div>
        {todo.isComplete ? (
          <Typography variant="subtitle2" className={classes.checked}>
            {todo.name}
          </Typography>
        ) : (
          <Typography variant="subtitle2">{todo.name}</Typography>
        )}

        <Typography className={classes.greyStyle} variant="subtitle2">
          Author: {todo.author}
        </Typography>

        <Typography className={classes.greyStyle} variant="subtitle2">
          Added: {moment(todo.date).fromNow()}
        </Typography>
      </div>
      <ButtonGroup size="small" aria-label="outlined secondary button group">
        <Button onClick={() => handleCheck(todo._id)}>
          {todo.isComplete ? (
            <CheckCircle className={classes.isComplete} />
          ) : (
            <CheckCircle color="action" />
          )}
        </Button>
        <Button onClick={() => handleUpdateClick()}>
          <Create color="secondary" />
        </Button>
        <Button onClick={() => handleDelete(todo._id)}>
          <Delete className={classes.redColor} />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Todo;
