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
      setInputUser('')
      setInputName('')
      setInputDescription('')
      setIsAddTask(true)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  return (
    <>
      <p>サボったので進捗が止まってしまいました。むしろ進捗が出ないので諦めてサボりました。そんな人はここで自己申告をしてください。</p>
      <SubTitle>いつサボったの？</SubTitle>
      <Hr/>
      <FormWrapper>
        <Label>
          <p>お名前</p>
          <Input type="text" name="user" value={inputUser} onChange={getUser}/>
        </Label>
        <Label>
          <p>なにしてたとき</p>
          <Input type="text" name="name" value={inputName} onChange={getName}/>
        </Label>
        <Label>
          <p>なんでサボったの？</p>
          <Textarea name="description" value={inputDescription} onChange={getDescription}/>
        </Label>
        <ButtonWrapper>
          <SubmitButton type="button" onClick={addTaskData} value="申告する" />
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
}

const Hr = styled.hr`
  border-width: 2px 0 0 0;
  border-style: dashed;
  border-color: #22ac38;
`

const SubTitle = styled.h3`
  margin: 0;
`

const FormWrapper = styled.form`
  padding: 0.2em 0.5em;
  margin: 2em 0;
  background: #dfeeb9;
  box-shadow: 0px 0px 0px 10px #dfeeb9;
  border: dashed 2px white;
`

const Label = styled.label`
  display: block;
  margin: 0;
  padding: 0;
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
    box-shadow: 0 0 0 2px #22ac38 inset;
}
`

const Textarea = styled.textarea`
  height: 60px;
  display: block;
  width: 96%;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #22ac38 inset;
}
`

const ButtonWrapper = styled.div`
  text-align:center;
  margin-bottom: 10px;
`

const SubmitButton = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: #FFF;
  border-radius: 10px;
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