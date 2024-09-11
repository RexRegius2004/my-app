import './App.css';
import Greeting from './Greeting';

function App() {
  return (
   <div className="ProfileCard">
    <style>

    </style>
    <Greeting name=" Name: Reginald Andrew Misuela"/>
    <Greeting Age="Age: 20" />
    <Greeting Description="About me:  Dungeon Master"/>
    <Greeting Location=" Location: San Mateo, Rizal"/>

    <div className='ProfileCard2'>
    <Greeting name=" Name: Josef Escarcha"/>
    <Greeting Age="Age: 22" />
    <Greeting Description="About me: <3"/>
    <Greeting Location=" Location: Marikina"/>

    <div className='ProfileCard3'>
    <Greeting name=" Name: Rex Regius"/>
    <Greeting Age="Age: 21" />
    <Greeting Description="About me: Fictional"/>
    <Greeting Location=" Location: Far Far Away"/>
    </div>
    </div>
   </div>
  )
}

export default App;
