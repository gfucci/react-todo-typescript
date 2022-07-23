//CSS
import styles from './TaskList.module.css'

//Interface
import { ITask } from '../interfaces/Task'

//components
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

interface Props {
  taskList: ITask[],
  handleDelete(id: number): void
}

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList &&
        taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id} className={styles.tasks}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <BsFillPencilFill />
                <BsFillTrashFill 
                  onClick={() => {handleDelete(task.id)}}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Não existe tarefas cadastradas.</p>
        )
      }
    </>
  )
}

export default TaskList