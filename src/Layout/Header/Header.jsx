import { NavItem } from '../../components/NavItem/NavItem';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles['header']}>
      <img src="/bookmark-icon.svg" alt="Логотип" />
      <nav className={styles['navMenu']}>
        <ul className={styles['items']}>
          <NavItem>Поиск фильмов</NavItem>
          <NavItem>
            Мои фильмы <span className={styles['count']}>1</span>
          </NavItem>
          <NavItem>
            Войти <img src="/exit-icon.svg" alt=" Иконка выход" />
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}
