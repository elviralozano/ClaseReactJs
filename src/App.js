import { Nav } from "./componentes/Nav/Nav";
import { ItemList } from "./ItemsList.js/itemList";
import './App.scss';

function App() {
  return (
    <>
      <Nav/>
      <ItemList greeting="En proceso"/>
    </>
  );
}

export default App;
