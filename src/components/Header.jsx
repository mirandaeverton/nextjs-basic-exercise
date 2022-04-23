import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(props) {
    return (
        <header className={styles.header}>
            <h1>{props.title}</h1>
            <Link href="/">
                Voltar
            </Link>
        </header>
    )
}