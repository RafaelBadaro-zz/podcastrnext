import { Header } from '../components/Header';
import '../styles/global.scss'

import styles from '../styles/app.module.scss';
import { Player } from '../components/Player';
import { PlayerContext, PlayerContextProvider } from '../contexts/PlayerContext';
import { useState } from 'react';
import { stat } from 'node:fs';

// Sempre é carregado/recarregado quando ocorre uma mudança de rota
function MyApp({ Component, pageProps }) {

  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp
