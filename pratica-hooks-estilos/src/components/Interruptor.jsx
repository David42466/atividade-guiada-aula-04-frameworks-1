import { useToggle } from '../hooks/useToggle';

export default function Interruptor() {
  const [ligado, toggleLuz] = useToggle(false);

  return (
    <>
      <p>
        A luz está: {ligado ? 'Ligada' : 'Desligada'}
      </p>

      <button onClick={toggleLuz}>
        Alternar Luz
      </button>
    </>
  );
}