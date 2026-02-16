import './Input.css';

export function Input({ icon, placeholder, alt }) {
  return (
    <div className="input-wrapper">
      {icon && <img className="icon" src={icon} alt={alt} />}
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  );
}
