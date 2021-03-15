import axios from 'axios';

import { getInputForm } from '../src/getInputForm';

import { displayTodos } from '../src/displayTodos';

export const getTodos = () => {
  return axios
    .get('http://localhost:3000/todos ')
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getTodo = (id) => {
  return axios
    .get(`http://localhost:3000/todos/${id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createTodo = () => {
  const input = getInputForm();
  console.log(input);
  axios
    .post('http://localhost:3000/todos', input)
    .then((res) => {
      console.log(res.data);
      // return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log({ title, deadline, contacts, content });
  getTodos().then((data) => {
    displayTodos(data);
  });
};

export const editTodo = (id, data) => {
  console.log(data);
  axios
    .patch(`http://localhost:3000/todos/${id}`, data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  // refresh display
  getTodos().then((data) => {
    displayTodos(data);
  });
};

export const deleteTodo = (id) => {
  axios
    .delete(`http://localhost:3000/todos/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  // refresh display
  getTodos().then((data) => {
    displayTodos(data);
  });
};
