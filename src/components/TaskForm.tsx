//CSS
import styles from './TaskForm.module.css'

//Hooks
import React, { ChangeEvent, useState, useEffect } from 'react'

//interfaces
import { ITask } from '../interfaces/Task'

interface Props {
    btnText: string
}

const TaskForm = ({ btnText } : Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const handleAddTask = () => {

    }

  return (
    <div>   
        <form onSubmit={handleAddTask} className={styles.form}>
            <label className={styles.label_container}>
                <span>Título:</span>
                <input 
                    type="text" 
                    placeholder='Título da tarefa'
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
            </label>
            <label className={styles.label_container}>
                <span>Dificuldade:</span>
                <input 
                    type="text" 
                    placeholder='Dificuldade da tarefa'
                    value={difficulty}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDifficulty(parseInt(e.target.value))}
                />
            </label>
            <input type="submit" value={btnText} />
        </form>
    </div>
  )
}

export default TaskForm