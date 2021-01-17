import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CopyButton from "../components/CopyButton";
import hello from "./api/hello";

function texto() {
    console.log(hello)
    return 'asdas';
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Você foi metaforado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          {/*<select className={styles.select}>*/}
          {/*    <option>Tristeza</option>*/}
          {/*    <option>Felicidade</option>*/}
          {/*</select>*/}
        <p className={styles.code}>
            {texto()}
            <CopyButton/>
        </p>

        <p className={styles.description}>
            <a> Gerar aleatório</a>
        </p>
        <div className={styles.expressionModes}>
            <p className={styles.mode}>Tristeza</p>
            <p className={styles.mode}>Felicidade</p>
            <p className={styles.mode}>Raiva</p>
            <p className={styles.mode}>Nojo</p>
        </div>

      </main>

      <footer className={styles.footer}>
        <p><a href="https://github.com/josemiguelq/vocefoimetaforado" target="_blank">Github</a></p>
      </footer>
    </div>
  )
}
