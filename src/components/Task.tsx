import styled from 'styled-components';

const Task = (props) => {
  return (
    <>
      <TaskWrapper>
        <ID>{props.task.id}人目：{props.task.user}</ID>
        <TaskItem>
          <NameText>{props.task.name}</NameText>
        </TaskItem>
      </TaskWrapper>
      <Description>
        <DescriptionText>理由：{props.task.description}</DescriptionText>
        <DateText>登録日時：{props.task.createdAt}</DateText>
      </Description>
    </>
  );
}

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ID = styled.p`
  font-size: 18px;
  text-align: center;
`

const TaskItem = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`

const NameText = styled.text`
  font-size: 20px;
`

const Description = styled.div`
  padding: 0.5em 1em;
  margin: 0 10px;
  background: -webkit-repeating-linear-gradient(-45deg, #ebf7ce, #ebf7ce 3px,#f6fde5 3px, #f6fde5 7px);
  background: repeating-linear-gradient(-45deg, #ebf7ce, #ebf7ce 3px,#f6fde5 3px, #f6fde5 7px);
`

const DescriptionText = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 0;
`

const DateText = styled.p`
  color: #414141;
  text-align: right;
  font-size: 12px;
  margin: 0;
  padding: 0;
`

export default Task;