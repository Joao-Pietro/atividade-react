function Apresentacao(props){
    return (
        <div>
            <h3>
                {props.nome}
            </h3>
            <p>
                {props.idade}
            </p>
        </div>
    )
}

export default Apresentacao