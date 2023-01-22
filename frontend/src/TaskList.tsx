import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Task from "./Task";
import Typography from "@mui/material/Typography";
import axios from "axios";

export const TaskList = (isManager: boolean) => {
  const [task, setTask] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newUser, setNewUser] = useState("");

  let result = task;

  useEffect(() =>
    axios.get("http://localhost:3000/task").then((response) => {
      setTask(response.data);
    })
  );

  const handleTitleChange = (event: any) => {
    setNewTitle(event.target.value);
  };

  const handleDescChange = (event: any) => {
    setNewDesc(event.target.value);
  };

  const handleUserChange = (event: any) => {
    setNewUser(event.target.value);
  };

  return <Task result={result} />;
};
