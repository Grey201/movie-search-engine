import { NavItem } from '../../components/NavItem/NavItem';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <img src="/bookmark-icon.svg" alt="Логотип" />
      <nav className="navMenu">
        <ul className="items">
          <NavItem>Поиск фильмов</NavItem>
          <NavItem>
            Мои фильмы <span className="count">1</span>
          </NavItem>
          <NavItem>
            Войти <img src="/exit-icon.svg" alt=" Иконка выход" />
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}
