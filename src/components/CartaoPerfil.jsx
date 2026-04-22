import './CartaoPerfil.css'

function CartaoPerfil(props) {
    return (
        <div className="cartao-perfil">
            <img src={props.foto} alt={props.nome} className="cartao-foto" />
            <div className="cartao-info">
                <h3 className="cartao-nome">{props.nome}</h3>
                <p className="cartao-detalhes">
                    <span className="cartao-idade">Idade: {props.idade} anos</span>
                    <span className="cartao-profissao">Profissão: {props.profissao}</span>
                </p>
            </div>
        </div>
    )
}

export default CartaoPerfil