import Japfood from "./components/Japfood";
import Japfoodmenu from "./components/Japfoodmenu";
import Japfoodhero from "./components/Japfoodhero";
import Japfoodaboutus from "./components/Japfoodaboutus";
import Displaymsg from "./components/Displaymsg";
import Alert from "./components/Alert";
import Numberbox from "./components/Numberbox";
import Tickleme from "./components/Tickleme";
import Numberboxupdate from "./components/Numberboxupdate";
import Counter from "./components/Counter";
import Counterplusplus from "./components/Counterplusplus";
import Dice from "./components/Dice";
import Conditionalrendering from "./components/Conditionalrendering";
import Coloureddice from "./components/Coloureddice";
import Surveryform from "./components/Surveyform";
import Contactusform from "./components/Contactusform";
import Randomuser from "./Randomuser";

function App() {
  return (
    <>
    <Japfood />
    <Japfoodmenu home="Home" about= "About Us" menu="Our Menu" contact="Contact Us"/>
    <Japfoodhero />
    <Japfoodaboutus />
    <Displaymsg whatever_message="Sushi is Oishii!!!"/>
    <Alert message="DANGER DANGER WILL ROBINSON!!!"/>
    <Numberbox initialValue={15}/>
    <Tickleme />
    <Numberboxupdate initialValue={20}/>
    <Counter initialValue={25}/>
    <Counterplusplus initialValue={5}/>
    <Dice />
    <Conditionalrendering />
    <Coloureddice />
    <br></br>
    <Surveryform />
    <br></br>
    <br></br>
    <Contactusform />
    <br></br>
    <Randomuser />
    </>
  );
}

export default App;