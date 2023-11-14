import style from './Form.module.css'
import imgseta from '../assets/img/Enter.jpg'
import imgvector from '../assets/img/Vector.png'
import imgmenu from '../assets/img/Burger.png'
import { useState } from 'react'


export default function Form () {
    const [value, setValue] = useState<string>("");

    function handleInput (e: string) {
        setValue(e)
    }

    function handleSubmit (){
        console.log(value)
    }
    
    return (
        <div className={style.geral}>
            <div className={style.text}>
                <img src={imgvector} />
                <h1>Minhas tarefas</h1>
            </div>
            <div className={style.info}>
                <input type="text" onChange={(e) => handleInput(e.target.value)}/>
                <button onClick={handleSubmit}>        
                    <img src={imgseta} />
                </button>
            </div>
            <div className={style.menu}>
                <button>
                <img src={imgmenu} />
                </button>
            </div>
        </div>
    )
};