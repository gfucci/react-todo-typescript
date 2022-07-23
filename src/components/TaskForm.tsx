//CSS
import styles from './TaskForm.module.css'

//Hooks
import React, { ChangeEvent, useState, useEffect, FormEvent } from 'react'

//interfaces
import { ITask } from '../interfaces/Task'

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
}

const TaskForm = ({ btnText, taskList, setTaskList, task } : Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    useEffect(() => {

        if (task) {
            setTitle(task.title)
            setId(task.id)
            setDifficulty(task.difficulty)
        }
        
    }, [task])

    const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const id = Math.floor(Math.random() * 1000) 

        const newTask: ITask = { id, title, difficulty }

        setTaskList!([...taskList, newTask])
        setTitle("")
        setDifficulty(0)
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