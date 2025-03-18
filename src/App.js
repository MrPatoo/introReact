import logo from './logo.svg';
import './App.css';
import Boton from './componentes/boton1';
import Alert from './componentes/alert';
import BotonVerde from './componentes/botonVerde';
import MuchosBotones from './componentes/muchosBotones';
import Carousel from './componentes/carousel';
import BreadCrumb from './componentes/breadcrumb';
import DropDown from './componentes/dropDown';
import ListGroup from './componentes/listGroup';
import NumberedList from './componentes/numberedList';
import ColorList from './componentes/colorList';
import CheckBox from './componentes/checkBox';
import Card from './componentes/card';
import DropDownColor from './componentes/dropDownColor';
import Spinner from './componentes/spinner';
import ColorSpinner from './componentes/colorSpinner';
import ButtonSpinner from './componentes/buttonSpinner';
import Accordion from './componentes/accordion';
import AlertIcon from './componentes/alertIcon';
import Badges from './componentes/badges';
import LilButton from './componentes/lilButton';
import Nav from './componentes/navbar';

function App() {
  return (
    
    <>
    <h1>Hola mundo, este es mi primer ejemplo usando React.</h1>
    
    <Boton 
     nombre={"Boton 1"}
     color={"rojo"}
     />
 <br></br>
     <Boton
     nombre={"Boton 2"}
     />
    <br>
    </br>
 
 <Alert />
 
 <BotonVerde/>
 <br></br>
 <MuchosBotones/>
 
 <Carousel/>
 <br></br>
 <BreadCrumb/>
 <br></br>
 <DropDown/>
 <br></br>
 <ListGroup/>
 <br></br>
 <NumberedList/>
 <br></br>
 <ColorList/>
 <br></br>
 <CheckBox/>
 <br></br>
 <Card/>
 <br></br>
 <DropDownColor/>
 <br></br>
 <br></br>
 <Spinner/>
 <br></br>
 <ColorSpinner/>
 
 <br></br>
 <ButtonSpinner/>
 
 <br></br>
 <Accordion/>
 
 <br></br>
 <AlertIcon/>
 <br></br>
 <Badges/>
 <br></br>
 <LilButton/>
 <br></br>
 <Nav/>
 <br></br> 
    </>
   );
}

export default App;
