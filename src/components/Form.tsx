import style from './Form.module.css'
import imgseta from '../assets/img/Enter.jpg'
import imgvector from '../assets/img/Vector.png'
import imgmenu from '../assets/img/Burger.png'


export default function Form () {
    return (
        <div className={style.geral}>
            <div className={style.text}>
                <img src={imgvector} />
                <h1>Minhas tarefas</h1>
            </div>
            <div className={style.info}>
                <input type="text" />
                <img src={imgseta} />
            </div>
            <div className={style.menu}>
                <button>
                <img src={imgmenu} />
                </button>
            </div>
        </div>
    )
};