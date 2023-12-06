import React,{useState} from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './styles/App.css';
import lstEncuestas from './data/encuestas.json';
import Inicio from './components/Inicio';
import Encuesta from './components/Encuesta';
import NuevaEncuesta from './components/CrearEncuesta';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
function App() {
  const [encuestas,setEncuestas] = useState(lstEncuestas);
  const agregarEncuesta =(nuevaEncuesta)=>{
    nuevaEncuesta.id = encuestas.length + 1;
    setEncuestas([...encuestas,nuevaEncuesta]);
  }
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Inicio encuestas={encuestas}/>}/>
          <Route path='/encuesta/:id' element={<Encuesta encuestas={encuestas}/>}/>
          <Route path='/encuesta/crear' element={<NuevaEncuesta agregarEncuesta={agregarEncuesta}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
