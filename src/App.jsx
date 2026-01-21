import './App.css';
import { Button } from './components/Button/Button';
import { P } from './components/P/P';
import { Title } from './components/Title/Title';

export default function App() {
  return (
    <>
      <Title tag={'h1'}>Заголовок</Title>
      <Button>Кнопка</Button>
      <P>Параграф</P>
    </>
  );
}
