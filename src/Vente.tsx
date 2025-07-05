import './framer/styles.css';

import NavFramerComponent from './framer/nav';
import HeroVenteFramerComponent from './framer/herovente';
import PresentationventeFramerComponent from './framer/presentationvente';
import FormulaireventeFramerComponent from './framer/formulairevente';
import FooterFramerComponent from './framer/footer';
import SocialBubble from './SocialBubble';
import { FormulaireVente } from './FormulaireVente';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavFramerComponent.Responsive 
      className="!w-full"/>
      <HeroVenteFramerComponent.Responsive 
      className="!w-full"/>
      <PresentationventeFramerComponent.Responsive 
      className="!w-full"/>
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <FormulaireventeFramerComponent />
      </div>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="ml-16 w-full max-w-xl bg-white shadow-lg p-10">
        <FormulaireVente />
        </div>
      </div>
      <FooterFramerComponent.Responsive 
      className="!w-full"/>
     <SocialBubble />
    </div>
     </div>
  );
}