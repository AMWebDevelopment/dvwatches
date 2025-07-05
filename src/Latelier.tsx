import './framer/styles.css';

import NavFramerComponent from './framer/nav';
import HeroatelierFramerComponent from './framer/heroatelier';
import EquipementFramerComponent from './framer/equipement';
import ServicesAtelierFramerComponent from './framer/services-atelier';
import FaqFramerComponent from './framer/faq';
import FooterFramerComponent from './framer/footer';
import SocialBubble from './SocialBubble';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavFramerComponent.Responsive 
      className="!w-full"/>
      <HeroatelierFramerComponent.Responsive 
      className="!w-full"/>
      <EquipementFramerComponent.Responsive 
      className="!w-full"/>
      <ServicesAtelierFramerComponent.Responsive 
      className="!w-full"/>
      <FaqFramerComponent.Responsive 
      className="!w-full"/>
      <FooterFramerComponent.Responsive 
      className="!w-full"/>
      <SocialBubble />
    </div>
  );
}