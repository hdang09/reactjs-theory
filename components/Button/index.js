import clsx from 'clsx'
import styles from './Button.module.scss'

console.log(clsx)

export default function Button() {
    return <button className={styles.btn}>Click me!</button>
}