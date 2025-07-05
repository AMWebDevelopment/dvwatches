import './framer/styles.css';

import NavFramerComponent from './framer/nav';
import intromenntionsFramerComponent from './framer/intromentions';
import MentionsFramerComponent from './framer/mentions';
import FooterFramerComponent from './framer/footer';
import SocialBubble from './SocialBubble';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavFramerComponent.Responsive className="!w-full" />
      <intromenntionsFramerComponent.Responsive className="!w-full" />
      <MentionsFramerComponent.Responsive className="!w-full" />
      <FooterFramerComponent.Responsive className="!w-full" />
      <SocialBubble />
    </div>
  );
}
