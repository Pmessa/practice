
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layout/MainLayout";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {


  return (
    <MainLayout title ="Nuestros Productos">
      <ItemListContainer greeting = 'Bienvenido a nuestra App Vegan!'/>
    </MainLayout>

  )
}

export default App
