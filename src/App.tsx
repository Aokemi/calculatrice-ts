import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Choix selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} /> {/* On appelle la page Choix ici */}
      </div>
  )
}

export default App
