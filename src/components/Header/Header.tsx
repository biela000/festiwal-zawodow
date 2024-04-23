import Logo from '../Logo/Logo.tsx';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo src='/zsl.png' alt='ZSŁ' />
            <Logo src='/malopolska_zawodowa.png' alt='Małopolska Zawodowa' />
        </header>
    );
};