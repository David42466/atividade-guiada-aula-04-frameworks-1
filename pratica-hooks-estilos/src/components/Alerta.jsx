import styles from './Alerta.module.css';

export default function Alerta({ type, message }) {
  const tipoClasse =
    type === 'sucesso' ? styles.sucesso : styles.erro;

  return (
    <>
      <div className={`${styles.alertaCard} ${tipoClasse}`}>
        {message}
      </div>
    </>
  );
}