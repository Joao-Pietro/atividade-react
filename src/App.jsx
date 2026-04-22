import './app.css'
import CartaoPerfil from './components/CartaoPerfil'
import Contador from './components/Contador'
import ListaCompras from './components/ListaCompras'


function App() {

  return (
    <>
      <div className="Container">
        <CartaoPerfil 
          nome="Danillo" 
          idade="16" 
          profissao="Programador Analista de Dados"
          foto="https://i.pravatar.cc/150?img=1"
        />
        <CartaoPerfil 
          nome="Sarah" 
          idade="24" 
          profissao="Engenheira de IA"
          foto="https://i.pravatar.cc/150?img=5"
        />
        <CartaoPerfil 
          nome="Carlos" 
          idade="43" 
          profissao="Full-Stack"
          foto="https://i.pravatar.cc/150?img=8"
        />
        <Contador/>
        <ListaCompras/>
      </div>
    </>
  )
}

export default App