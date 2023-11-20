import { TodoInterface } from '../App'
import style from './Pendentes.module.css'

interface PendentesInterface {
  todos:Array <TodoInterface>
}

export default function Pendentes ({todos} : PendentesInterface) {

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