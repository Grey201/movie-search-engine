import './NavItem.css';

export function NavItem({ children }) {
  return (
    <li className="item">
      <a className="link" href="#">
        {children}
      </a>
    </li>
  );
}
