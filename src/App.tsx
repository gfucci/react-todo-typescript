//CSS
import styles from './App.module.css'

//Components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'


const App = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <TaskForm btnText={"Cadastrar"} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App