import styles from './NavItem.module.css';

export function NavItem({ children }) {
  return (
    <li className={styles['item']}>
      <a className={styles['link']} href="#">
        {children}
      </a>
    </li>
  );
}
