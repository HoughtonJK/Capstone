import axios from 'axios';

export const getTodos = async () => {
  const { data } = await axios.get(`/api/todos`)
             .catch(error => console.log(error));
  return data;
}

export const deleteTodo = async (id) => {
  await axios.delete(`/api/todos/${id}`)
             .catch(error => console.log(error));
} 

export const getTodo = async (id) => {
  const { data } = await axios.get(`/api/todos/${id}`)
             .catch(error => console.log(error));
  return data;
}

export const addTodo = async (newTodo) => {
  const { data } = await axios.post(`/api/todos`, newTodo)
             .catch(error => console.log(error));
  return data;
}

export const updateTodo = async (id, updatedTodo) => {
  const { data } = await axios.put(`/api/todos/${id}`, updatedTodo)
             .catch(error => console.log(error));
  return data;
}


