import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import "./App.css";
import Env from "./firebase/index.tsx";
import Task from "./components/Task.tsx";
import AddTask from "./components/AddTask.tsx";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksData()
  }, [])

  const getTasksData = () => {
    Env.instance.firestore.collection("tasks")
      .get()
      .then((snapShot) => {
        let tasks = [];
        snapShot.forEach(doc => {
          tasks.push({
            id: doc.data().id,
            user: doc.data().user,
            name: doc.data().name,
            description: doc.data().description,
            createdAt: doc.data().createdAt
          });
        });
        setTasks(tasks);
    });
  }

  return (
    <Container>
      <PageTitle>申告な問題が発生しました</PageTitle>
      <AddTask tasks={tasks} getTasksData={getTasksData}/>
      <h3>サボったリスト</h3>
      <hr/>
      {tasks.sort((a, b) => b.id - a.id).map(task => {
        return (
          <Task task={task}/>
        );
      })}
    </Container>
  );
}

// styled-components

const Container = styled.div`
  width: 980px;
  margin: auto;
`

const PageTitle = styled.h1`
  padding: 1.65rem 2rem;
  color: #22ac38;
  background-color: transparent;
  background-image: linear-gradient(45deg, #dfeeb9 25%, transparent 25%, transparent 75%, #dfeeb9 75%, #dfeeb9),
    linear-gradient(-45deg, #dfeeb9 25%, transparent 25%, transparent 75%, #dfeeb9 75%, #dfeeb9);
  background-size: 24px 24px;
`

export default App;