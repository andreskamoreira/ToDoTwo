import style from './Form.module.css'
import imgseta from '../assets/img/Enter.jpg'
import imgvector from '../assets/img/Vector.png'


export default function Form () {
    return (
        <div className={style.geral}>
            <div className={style.text}>
                <img src={imgvector} alt="" />
                <h1>Minhas tarefas</h1>
            </div>
            <div className={style.info}>
                <input type="text" />
                <img src={imgseta} alt="" />
            </div>
        </div>
    )
};