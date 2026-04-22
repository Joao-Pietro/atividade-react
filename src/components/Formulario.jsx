import React, { useState } from 'react';

function MultiplaFuncao() {
  const [contador, setContador] = useState(0);

  // Funções de manipulação
  const incrementar = () => setContador(prev => prev + 1);
  const decrementar = () => setContador(prev => prev - 1);
  const incrementar5 = () => setContador(prev => prev + 5);
  const resetar = () => setContador(0);

  // Lógica de Mensagem
  const obterMensagem = () => {
    if (contador === 0) return "Comece a contar!";
    if (contador > 0 && contador < 10) return "Continue assim!";
    if (contador >= 10) return "Você está indo muito bem! 🎉";
    if (contador < 0) return "Ops, valor negativo!";
  };

  // Lógica de Cor
  const obterCor = () => {
    if (contador > 0) return 'green';
    if (contador < 0) return 'red';
    return 'gray';
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Contador Inteligente</h1>
      
      <h2 style={{ fontSize: '3rem', color: obterCor(), margin: '10px 0' }}>
        {contador}
      </h2>

      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        {obterMensagem()}
      </p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={incrementar} style={btnStyle}>+1</button>
        <button onClick={decrementar} style={btnStyle}>-1</button>
        <button onClick={incrementar5} style={btnStyle}>+5</button>
        <button onClick={resetar} style={{ ...btnStyle, backgroundColor: '#666' }}>Resetar</button>
      </div>
    </div>
  );
}

export default MultiplaFuncao