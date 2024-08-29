import Japfood from "./components/Japfood";
import Japfoodmenu from "./components/Japfoodmenu";
import Japfoodhero from "./components/Japfoodhero";
import Japfoodaboutus from "./components/Japfoodaboutus";

function App() {
  return (
    <>
    <Japfood />
    <Japfoodmenu home="Home" about= "About Us" menu="Our Menu" contact="Contact Us"/>
    <Japfoodhero />
    <Japfoodaboutus />
    </>
  );
}

export default App;