import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CopyButton from "../components/CopyButton";
import texts from './../helpers/texts'
import { render } from 'react-dom';
import {generate, random} from './../helpers/generateText'
import React from 'react'


function texto() {
    console.log(random());
    return 'asdas';
}

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      analysis: generate()
    }
  }

  onClick = () => {
    this.setState({ analysis: generate() })
  }

  generateSpecific = (key) => {
    this.setState({ analysis: generate(key) })
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Você foi metaforado</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1 className={styles.title}>
            Você foi metaforado
          </h1>
        <main className={styles.main}>
          

          <div>
          <p className={styles.analysis}>
              {this.state.analysis}
          </p>
          </div>
          
  
          <div className={styles.description}>
          <p  onClick={this.onClick}>Gerar aleatório</p>

          <p onClick={this.onClick}>
              <a>Copiar</a>
          </p>
          </div>

          <div className={styles.expressionModes}>
              <p className={styles.mode} onClick={() => this.generateSpecific('fear')}>Tristeza</p>
              <p className={styles.mode} onClick={() => this.generateSpecific('fear')}>Medo</p>
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
}


export default Home;
