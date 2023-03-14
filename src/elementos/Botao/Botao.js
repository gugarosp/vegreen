import "./Botao.scss"

const Botao = (props) => {
    return (
        <button className={`botao botao-${props.cor} botao-${props.tamanho} botao-${props.tipo}`}>
            Botão<br />
        </button>
    )
}

export default Botao;