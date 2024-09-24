import React from 'react';
import styles from './UnderConstruction.module.css'; // Importando o CSS module

const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Página em Construção</h1>
        <p className={styles.message}>Desculpe pelo inconveniente. Estamos trabalhando para melhorar o site.</p>
        <div className={styles.constructionIcon}>🔨</div>
      </div>
    </div>
  );
};

export default UnderConstruction;
