//CSS
import { useState } from 'react'

//Components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

//Hooks
import styles from './App.module.css'

//interfaces
import { ITask } from './interfaces/Task'

const App = () => {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
            btnText={"Cadastrar"} 
            taskList={taskList} 
            setTaskList={setTaskList} 
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
            taskList={taskList}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App