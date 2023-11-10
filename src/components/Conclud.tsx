import style from './Conclud.module.css'


export default function Conclud () {
    return ( 
        <div className={style.geral}>
        <div>
            <h1>Concluídas</h1>
        </div>
        <div className={style.todo}>
                <section className={style.card}>
                    <p>Reading</p>
                </section>
        </div>
    </div>
    )
};