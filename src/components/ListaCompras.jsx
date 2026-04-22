import { useState } from "react"
import './ListaCompras.css'

function ListaCompras() {
    const [itens, setItens] = useState([])
    const [novoItem, setNovoItem] = useState("")

    const adicionarItem = () => {
        if (novoItem.trim() === "") return
        
        const item = {
            id: Date.now(),
            nome: novoItem.trim(),
            comprado: false
        }
        setItens([...itens, item])
        setNovoItem("")
    }

    const toggleComprado = (id) => {
        setItens(itens.map(item => 
            item.id === id ? { ...item, comprado: !item.comprado } : item
        ))
    }

    const removerItem = (id) => {
        setItens(itens.filter(item => item.id !== id))
    }

    const totalItens = itens.length
    const itensComprados = itens.filter(item => item.comprado).length

    return (
        <div className="lista-compras-container">
            <h2>Lista de Compras</h2>
            
            <div className="input-group">
                <input 
                    type="text" 
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                    placeholder="Digite um item..."
                    onKeyPress={(e) => e.key === 'Enter' && adicionarItem()}
                />
                <button onClick={adicionarItem} disabled={novoItem.trim() === ""}>
                    Adicionar
                </button>
            </div>

            <ul className="lista-itens">
                {itens.map(item => (
                    <li key={item.id} className={item.comprado ? "comprado" : ""}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={item.comprado}
                                onChange={() => toggleComprado(item.id)}
                            />
                            <span className="nome-item">{item.nome}</span>
                        </label>
                        <button 
                            className="btn-remover"
                            onClick={() => removerItem(item.id)}
                            title="Remover"
                        >
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>

            {itens.length === 0 && (
                <p className="mensagem-vazia">Nenhum item na lista</p>
            )}

            <div className="contador">
                <span>Total: {totalItens}</span>
                <span>Comprados: {itensComprados}</span>
            </div>
        </div>
    )
}

export default ListaCompras