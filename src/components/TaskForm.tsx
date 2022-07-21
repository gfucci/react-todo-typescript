//CSS
import styles from './TaskForm.module.css'

//Hooks
import React, { useState } from 'react'

type Props = {
    btnText: string
}

const TaskForm = ({ btnText } : Props) => {

    const [title, setTitle] = useState("")
    const [dificult, setDificult] = useState("")

  return (
    <div>
        <h2>O que você vai fazer?</h2>
        <form>
            <label>
                <span>Título:</span>
                <input 
                    type="text" 
                    placeholder='Título da tarefa'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                <span>Dificuldade:</span>
                <input 
                    type="text" 
                    placeholder='Dificuldade da tarefa'
                    value={dificult}
                    onChange={(e) => setDificult(e.target.value)}
                />
            </label>
            <input type="submit" value={btnText} />
        </form>
    </div>
  )
}

export default TaskForm