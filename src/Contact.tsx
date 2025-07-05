import './framer/styles.css';

import NavFramerComponent from './framer/nav';
import HerocontactFramerComponent from './framer/herocontact';
import InfoscontactFramerComponent from './framer/infoscontact';
import FormulairecontactFramerComponent from './framer/Formulairecontact';
import FooterFramerComponent from './framer/footer';
import SocialBubble from './SocialBubble';
import { ContactUs } from './formulaireContact';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavFramerComponent.Responsive 
      className="!w-full"/>
      <HerocontactFramerComponent.Responsive 
      className="!w-full"/>
      <InfoscontactFramerComponent.Responsive 
      className="!w-full"/>
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <FormulairecontactFramerComponent.Responsive />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-end">
        <div className="mr-16 w-full max-w-xl bg-white shadow-lg p-10">
          <ContactUs />
        </div>
      </div>
    </div>
      <FooterFramerComponent.Responsive 
      className="!w-full"/>
        <SocialBubble />
    </div>
  );
}
