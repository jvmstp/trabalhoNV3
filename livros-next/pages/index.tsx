import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Menu.module.css';

export default function Home() {
  return (
    <div className={styles.container} style={{ backgroundColor: 'white' }}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Loja de livros com Next.js" />
        <link rel="icon" href="imagem logo url" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title} style={{ color: 'black' }}>
          Página Inicial
        </h1>
      </main>
    </div>
  );
}
