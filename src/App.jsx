import './App.css';
import { Button } from './components/Button/Button';
import { P } from './components/P/P';
import { Title } from './components/Title/Title';
import { Header } from './Layout/Header/Header';
import { Input } from './components/Input/input';

const propInput = { icon: '/search-icon.svg', alt: 'Иконка поиска', placeholder: 'Введите название' };

export default function App() {
  const onClick = () => console.log('Кнопка');
  return (
    <>
      <Header />
      <div className="wrapper">
        <Input {...propInput} />
        <Title tag={'h1'}>Заголовок</Title>
        <Button onClick={onClick}>Кнопка</Button>
        <P>Параграф</P>
      </div>
    </>
  );
}
