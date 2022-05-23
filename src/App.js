import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="Container">
      <NavBar />
      <ItemListContainer greeting={"Aquí se mostrarán los productos"} />
    </div>
  );
}

export default App;
