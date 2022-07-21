//CSS
import styles from './App.module.css'

//Components
import Footer from './components/Footer'
import Header from './components/Header'


const App = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>

      </main>
      <Footer />
    </div>
  )
}

export default App