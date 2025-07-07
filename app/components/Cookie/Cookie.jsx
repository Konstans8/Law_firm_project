"use client";
import styles from './Cookie.module.scss'
import { useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className={styles.cookie}>
      <div className={styles.descr}>
        Szanowni Państwo, nasz serwis stosuje pliki cookies. Możecie określić warunki przechowywania lub dostępu do plików cookies w przeglądarce.
        <a href="https://sulejowek.marianie.pl/polityka-prywatnosci/" className={styles.link}> Dowiedz się więcej.{" "}</a>
        <p className={styles.accept}>Prosimy o wyrażenie zgody.</p>
      </div>
      <button onClick={() => setAccepted(true)} className={styles.btn}>Akceptuję</button>
    </div>
  );
}
