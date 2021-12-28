import styled from 'styled-components';

const Task = (props) => {
  return (
    <>
      <TaskWrapper>
        <ID>{props.task.id}人目：{props.task.user}</ID>
      </TaskWrapper>
      <Description>
        <div>
          <NameText>{props.task.name}</NameText>
          <DescriptionText>{props.task.description}</DescriptionText>
        </div>
        <DateText>{props.task.createdAt}</DateText>
      </Description>
    </>
  );
}

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`

const ID = styled.p`
  font-size: 15px;
  text-align: center;
`

const NameText = styled.text`
  font-size: 17px;
`

const Description = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  border-radius: 10px;
  background: -webkit-repeating-linear-gradient(-45deg, #ebf7ce, #ebf7ce 3px,#f6fde5 3px, #f6fde5 7px);
  background: repeating-linear-gradient(-45deg, #ebf7ce, #ebf7ce 3px,#f6fde5 3px, #f6fde5 7px);

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-right: 15px solid #ebf7ce;
  }
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
  margin-top: 5px;
  padding: 0;
`

export default Task;