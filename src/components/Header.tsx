//CSS
import styles from "./Header.module.css";

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
        <h1>React + TypeScript</h1>
        <p>To Do List</p>
    </header>
  )
}

export default Header