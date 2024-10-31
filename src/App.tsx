import './App.css'
import Calculatrice from './Pages/Calculatrice';
import Convertisseur from './Pages/Convertisseur';
import { useState } from 'react';
import Choix from './Pages/Choix';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
{
  label: "Calculatrice",
  index: 0,
  Component: Calculatrice
},
{
  label: "Convertisseur",
  index: 1,
  Component: Convertisseur
}
];

function App() {

  

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index); //  On initialise la constante de la tab sélectionnée 

  return (
    
      <div className='App'>
        <h1> Bienvenue ! </h1>
        <Choix selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} /> {/* On appelle la page Choix ici */}
      </div>
  )
}

export default App
