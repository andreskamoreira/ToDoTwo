import './App.css'
import Form from './components/Form'
import Pendentes from './components/Pendentes'
import Conclud from './components/Conclud'
import { useState } from 'react'


export interface TodoInterface {
  id: number,
  text: string,
  isCompleted: boolean
};

function App() {
  const [todos, setTodos] = useState<Array<TodoInterface>>([
    {
      id: 1,
      text: "Concluir desafios Jorge",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer README do meu projeto",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Anotar meus aprendizados",
      isCompleted: false,
    }
  ]);

  const addTodo = (text: string) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  return (
    <>
      <Form addTodo={addTodo}/>
      <Pendentes todos={todos}/>
      <Conclud /> 
    </>
  )
}

export default App
