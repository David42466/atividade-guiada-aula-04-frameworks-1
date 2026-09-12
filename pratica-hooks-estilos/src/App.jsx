import { useState, useEffect } from 'react';
import BotaoDinamico from './components/BotaoDinamico.jsx';
import Alerta from './components/Alerta.jsx';
import CardProduto from './components/CardProduto.jsx';
import Interruptor from './components/Interruptor.jsx';
import CardProdutoMUI from './components/CardProdutoMUI.jsx';

function AtividadeUseEffect() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    console.log('EFEITO EXECUTADO: O contador mudou para', count);
    document.title = `Cliques: ${count}`;

    if (count > 0) {
      setMensagem('Contador atualizado com sucesso!');
      const timer = setTimeout(() => {
        setMensagem('');
      }, 2000);

      return () => {
        console.log('LIMPANDO O TIMER ANTERIOR');
        clearTimeout(timer);
      };
    }
  }, [count]);

  return (
    <>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
      {mensagem && (
        <p style={{color: 'green', marginTop: '10px'}}>
          {mensagem}
        </p>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      <h1>Atividade 1: Botão com Estilo Dinâmico</h1>
      <BotaoDinamico />

      <h1>Atividade 2: Alertas com CSS Modules</h1>
      <Alerta type="sucesso" message="Operação realizada com sucesso!" />
      <Alerta type="erro" message="Falha ao processar a requisição." />

      <h1>Atividade 3: Styled Components</h1>
      <CardProduto nome="Café Especial" preco="45,00" />

      <h1>Atividade 4: useEffect em Ação</h1>
      <AtividadeUseEffect />

      <h1>Atividade 5: Hook Personalizado</h1>
      <Interruptor />

      <h1>Atividade 6: Desafio com Material-UI</h1>
      <CardProdutoMUI
        imagem="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400"
        nome="Xícara de Café"
        descricao="Uma xícara de café de alta qualidade para começar bem o seu dia."
        preco="25,00"
      />
    </>
  );
}