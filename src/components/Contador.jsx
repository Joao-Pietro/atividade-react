import { useState } from "react"
import './Contador.css'

function Contador() {
    const [contagem, setContagem] = useState(0)

    const getMensagem = () => {
        if (contagem === 0) return "Comece a contar!"
        if (contagem > 0 && contagem < 10) return "Continue assim!"
        if (contagem >= 10) return "Você está indo muito bem! 🎉"
        if (contagem < 0) return "Ops, valor negativo!"
    }

    const getCorNumero = () => {
        if (contagem > 0) return 'positivo'
        if (contagem < 0) return 'negativo'
        return 'zero'
    }

    return(
        <div className="contador-container">
            <h2>Contador</h2>
            <p className={`numero ${getCorNumero()}`}>{contagem}</p>
            <p className="mensagem">{getMensagem()}</p>
            <div className="botoes">
                <button onClick={() => setContagem(contagem + 1)}>Incrementar (+1)</button>
                <button onClick={() => setContagem(contagem - 1)}>Decrementar (-1)</button>
                <button onClick={() => setContagem(contagem + 5)}>Incrementar +5</button>
                <button onClick={() => setContagem(0)} className="reset">Resetar</button>
            </div>
        </div>
    )
}

export default Contador