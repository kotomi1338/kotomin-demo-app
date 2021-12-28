import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Env from "../firebase/index.tsx";

const AddTask = (props) => {
  const [inputUser, setInputUser] = useState('')
  const [inputName, setInputName] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [isAddTask, setIsAddTask] = useState(false)

  useEffect(() => {
    props.getTasksData()
  }, [isAddTask])

  const getUser = (e) => {
    setInputUser(e.target.value)
  }

  const getName = (e) => {
    setInputName(e.target.value)
  }

  const getDescription = (e) => {
    setInputDescription(e.target.value)
  }

  const addTaskData = () => {
    setIsAddTask(false)
    if (inputName === '' || inputUser === '' || inputDescription === '') {
      console.log('りたーん')
      return
    }

    Env.instance.firestore.collection("tasks").add({
      id: props.tasks.length + 1,
      user: inputUser,
      name: inputName,
      description: inputDescription,
      createdAt: new Date().toLocaleString()
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      setIsAddTask(true)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  return (
    <>
    <p>サボったので進捗が止まってしまいました。むしろ進捗が出ないので諦めてサボりました。そんな人はここで自己申告をしてください。</p>
    <h3>いつサボったの？</h3>
    <hr/>
      <form>
        <Label>
          <p>お名前</p>
          <Input type="text" name="user" onChange={getUser}/>
        </Label>
        <Label>
          <p>何してたとき</p>
          <Input type="text" name="name" onChange={getName}/>
        </Label>
        <Label>
          <p>なんでサボったの？</p>
          <Textarea name="description" onChange={getDescription}/>
        </Label>
        <SubmitButton type="button" onClick={addTaskData} value="申告する" />
      </form>
    </>
  );
}

const Label = styled.label`
  display: block;
`

const Input = styled.input`
    height: 2.4em;
    width: 150px;
    padding: 0 16px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 0 1px #ccc inset;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
`

const Textarea = styled.textarea`
  height: 60px;
  display: block;
  width: 100%;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
`

const SubmitButton = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: #FFF;
  background-color: #22ac38;
  border-bottom: 5px solid #2681379b;
  padding: 8px 24px;
  font-size: 17px;
  font-weight: 700;
  margin-top: 10px;


  &:hover {
    margin-top: 13px;
    color: #FFF;
    background: #22ac38;
    border-bottom: 2px solid #2681379b;
  }
`

export default AddTask;