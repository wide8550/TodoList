import axios from 'axios';

import { refreshTodosDisplay } from '../src/refreshTodosDisplay';

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
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createTodo = async (input) => {
  await axios
    .post('http://localhost:3000/todos', input)
    .then((res) => {
      console.log(res.data);
      // return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log({ title, deadline, contacts, content });
  refreshTodosDisplay();
};

export const editTodo = async (id, data) => {
  await axios
    .patch(`http://localhost:3000/todos/${id}`, data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  refreshTodosDisplay();
};

export const deleteTodo = async (id) => {
  await axios
    .delete(`http://localhost:3000/todos/${id}`)
    .then((res) => console.log('delete !', res.data))
    .catch((err) => console.log(err));

  // refresh display
  refreshTodosDisplay();
};
