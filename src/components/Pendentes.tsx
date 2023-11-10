import style from './Pendentes.module.css'

export default function FormTwo () {

    return (
        <div className={style.geral}>
            <div>
                <h1>Pendentes</h1>
            </div>
            <div className={style.todo}>
                <section className={style.card}>
                    <input type="checkbox" id="scales" name="scales" />
                    <p>Concluir desafios Jorge</p>
                </section>
                <section className={style.card}>
                    <input type="checkbox" id="scales" name="scales" />
                    <p>Fazer o README do meu projeto</p>
                </section>
                <section className={style.card}>
                    <input type="checkbox" id="scales" name="scales" /> 
                    <p>Anotar meus aprendizados</p>
                </section>
            </div>
        </div>
    )
};