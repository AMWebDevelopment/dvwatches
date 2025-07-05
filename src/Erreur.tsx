import './framer/styles.css';
import NavFramerComponent from './framer/nav';
import ErreurFramerComponent from './framer/erreur';
import FooterFramerComponent from './framer/footer';
import SocialBubble from './SocialBubble';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavFramerComponent.Responsive className="!w-full" />
      <ErreurFramerComponent.Responsive className="!w-full" />
      <FooterFramerComponent.Responsive className="!w-full" />
      <SocialBubble />
    </div>
  );
}
