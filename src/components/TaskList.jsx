import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const List = styled.ul`
  padding: 0;
`;
const Item = styled.li`
  list-style: none;
  margin: 10px auto;
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 8px;
  transition-duration: 0.3s;

  &:hover {
    background: darkred;
    transition-duration: 0.3s;
  } 
`;

export default class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Brush teeth" },
    { id: 2, text: "Make up bed" },
    { id: 3, text: "Eat breakfast" },
  ];

  handleDelete = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <Container>
        <h2>Task List</h2>

        <List>
          {TaskList.tasks.map((task) => (
            <Item key={task.id}>
              {task.text}
              <Button onClick={() => this.handleDelete(task.id)}>Delete</Button>
            </Item>
          ))}
        </List>
      </Container>
    );
  }
}
