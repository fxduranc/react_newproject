import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="Container">
      <NavBar />
      <ItemListContainer greeting={"Todo para tu Oufit"} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
