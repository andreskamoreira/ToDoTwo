import style from './Pendentes.module.css'
import { useState } from 'react'

interface TodoInterface {
  id: number,
  text: string,
  isCompleted: boolean
}

export default function Pendentes () {
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
  
    return (
        <div className={style.geral}>
            <div>
                <h1>Pendentes</h1>
            </div>
            <div className={style.todo}>
                {todos.map((todo) => 
                    <section className={style.card} key={todo.id}>
                        <input type="checkbox" className={style.scales} name="scales" />
                        <p>{todo.text}</p>
                    </section>
                )}
            </div>
        </div>
    )
};