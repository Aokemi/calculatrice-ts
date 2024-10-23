import { FC } from "react";

// L'interface pour les props des tabs
interface TabsProps {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number; // Je sélectionne l'index (calculatrice ou convertisseur)
  onClick: (index: number) => void; // Méthode onClick() obligatoire
};

const Choix: FC<TabsProps> = ({
  tabs = [],
  selectedTab = 0,
  onClick,
}) => {

// Panneau de configuration --> Je crée une constante Panel qui vérifie si mon tableau d'objet tabs existe, je recherche une tab particulière et je vérifie que l'index corresponde bien à la tab sélectionnée
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div>
      <div>
        {/*Pour chaque tab, je veux que tout le travail ci-dessous soit fait */}
        {tabs.map((tab) => (
          <button
            className={selectedTab === tab.index ? "active" : ""} // Si l'index est le bon, le bouton change, sinon rien
            onClick={() => onClick(tab.index)} 
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index} // On vérifie si c'est le bon index de tab
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <Panel.Component index={selectedTab} />} {/* On fait le travail de la sélection dans le panneau de configuration en appelant Panel */}
      </div>
    </div>
  );
};
export default Choix;
