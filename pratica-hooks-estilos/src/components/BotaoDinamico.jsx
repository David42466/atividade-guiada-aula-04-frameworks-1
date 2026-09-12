import { useState } from 'react';

export default function BotaoDinamico() {
  const [clicado, setClicado] = useState(false);

  const estiloBotao = {
    backgroundColor: clicado ? '#10B981' : '#3B82F6',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <>
      <button
        style={estiloBotao}
        onClick={() => setClicado(!clicado)}
      >
        {clicado ? 'Ativado!' : 'Clique Aqui'}
      </button>
    </>
  );
}