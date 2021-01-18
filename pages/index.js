import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CopyButton from "../components/CopyButton";
import texts from './../helpers/texts'
import {copyToClipboard} from './../helpers/copy'
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
          <p className={styles.analysis} id="analysis-text">
              {this.state.analysis}
          </p>
          </div>
          
  
          <div className={styles.description}>
          <p  onClick={this.onClick}>Gerar aleatório</p>

          <p onClick={() => copyToClipboard('analysis-text')}>Copiar</p>
          </div>

          <div className={styles.expressionModes}>
              <p className={styles.mode} onClick={() => this.generateSpecific('sadness')}>Tristeza</p>
              <p className={styles.mode} onClick={() => this.generateSpecific('fear')}>Medo</p>
              <p className={styles.mode} onClick={() => this.generateSpecific('happiness')}>Felicidade</p>
              <p className={styles.mode} onClick={() => this.generateSpecific('rage')}>Raiva</p>
              <p className={styles.mode} onClick={() => this.generateSpecific('scorn')}>Nojo</p>
          </div>
  
        </main>
        
        <footer className={styles.footer}>
          <p className={styles.textFooter}><a href="https://github.com/josemiguelq/vocefoimetaforado" target="_blank">Source Github</a></p>
          <p className={styles.textFooter}><a href="https://www.youtube.com/c/Metaforando">Canal Metaforando</a></p>
          <p className={styles.textFooter}><a href="https://hotm.art/fU7IeT">Curso</a></p>          
        </footer>
      </div>
    )
  }
}


export default Home;
