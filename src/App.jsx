import './App.css'
import Card from './Card';

function App() {
  const item = {
    nome: 'Rick Sanchez',
    foto: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  return (
    <>
      <Card info={item} />
    </>
  )
}

export default App
