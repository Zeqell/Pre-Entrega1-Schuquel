import './App.css'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import Navbar from './components/navbar/navbar'



function App() {
  const greeting="Bienvenidos a JJE"
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App;
