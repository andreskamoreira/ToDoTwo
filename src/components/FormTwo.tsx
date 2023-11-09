import style from './FormTwo.module.css'

export default function FormTwo () {

    return (
        <div className={style.geral}>
            <div>
                <h1>Pendentes</h1>
            </div>
            <div className={style.info}>
                <input type="text" />
            </div>
        </div>
    )
};