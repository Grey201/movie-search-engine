import styles from './Input.module.css';

export function Input({ icon, placeholder, alt }) {
  return (
    <div className={styles['input-wrapper']}>
      {icon && <img className={styles['icon']} src={icon} alt={alt} />}
      <input className={styles['input']} type="text" placeholder={placeholder} />
    </div>
  );
}
