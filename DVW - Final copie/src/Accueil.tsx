import './framer/styles.css';

import NavFramerComponent from './framer/nav';
import HeroFramerComponent from './framer/hero';
import IntroFramerComponent from './framer/intro';
import ServicesFramerComponent from './framer/services';
import FondateurFramerComponent from './framer/fondateur';
import TemignageFramerComponent from './framer/temignage';
import FaqFramerComponent from './framer/faq';
import FooterFramerComponent from './framer/footer';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavFramerComponent.Responsive className="!w-full"/>
      <HeroFramerComponent.Responsive className="!w-full"
        texte={
          'Bienvenue chez Da Vinci Watches, votre référence  en montres de prestige.                Découvrez des pièces d’exception, rigoureusement sélectionnées et certifiées avec soin.'
        }
        titre={'L’art du temps au cœur de Paris'}
        bouton={'Explorez nos références'}
      />
      <IntroFramerComponent.Responsive className="!w-full"
        texte={
          'Da Vinci Watches est spécialisé dans l’achat, la vente et la restauration de montres de prestige, neuves ou d’occasion.Nous sélectionnons des garde-temps rares et iconiques issus des plus grandes maisons horlogères, pour les amateurs passionnés comme pour les collectionneurs experts.'
        }
        titre={'L’excellence horlogère au service des passionnés'}
      />
      <ServicesFramerComponent.Responsive className="!w-full"
        texte={
          'Chez Da Vinci Watches, notre expertise ne s’arrête pas à l’achat ou à la vente.Nous vous accompagnons à chaque étape de votre parcours horloger : expertise, entretien, livraison sécurisée… Chaque service est pensé pour répondre à vos plus hautes attentes. Faites le choix d’un accompagnement haut de gamme, à la hauteur de vos garde-temps.'
        }
        titre={'Nos Services sur Mesure'}
      />
      <FondateurFramerComponent.Responsive className="!w-full"
        text={
          'Après avoir travaillé pendant plus de 10 ans au sein des plus belles manufactures horlogères telles que Vacheron Constantin & Ulysse Nardin, Rémy Delassaussé, passionné d’horlogerie, met en avant son amour et ses connaissances pour proposer à la vente les garde-temps emblématiques des plus belles marques horlogères. Rémy a fait de sa passion son métier et est donc à même de pouvoir vous conseiller comme il se doit dans votre future acquisition.'
        }
        titre={'Rémy Delassaussé'}
        boutton={'Explorez nos références '}
      />
      <TemignageFramerComponent.Responsive className="!w-full"
        avis={
          'Serious and formal seller. Perfect communication from beginning to end of the purchase. I am sure that I will repeat again with Da Vinci watches. Thank you!'
        }
        client={'-Javier M.'}
      />
      <FaqFramerComponent.Responsive className="!w-full"
        reponseUn={
          'Oui. Chaque montre est rigoureusement authentifiée par nos horlogers experts avant d’être mise en vente. Un certificat d’authenticité est délivré pour chaque pièce.'
        }
        questionUn={'Toutes les montres sont-elles authentifiées ?'}
        reponseSix={
          'Oui, sous conditions. Nos experts évalueront l’authenticité et l’état de la montre. La présence des papiers et de la boîte reste un atout pour maximiser la valeur.'
        }
        questionSix={'Rachetez-vous les montres sans boîte ni papiers ?'}
        reponseCinq={
          'Oui. Nous assurons des livraisons sécurisées en France et en Europe sous 24h à 48h, via des transporteurs spécialisés et assurés, avec suivi complet.'
        }
        reponseDeux={
          'Absolument. Nos montres bénéficient d’une garantie commerciale allant de 12 à 24 mois, selon le modèle et son état. Les détails sont précisés lors de l’achat.'
        }
        questionCinq={'Expédiez-vous à l’international ?'}
        questionDeux={'Proposez-vous une garantie sur les montres vendues ?'}
        reponseTrois={
          'Oui. Nous proposons un service d’estimation gratuit, en boutique ou à distance via photos et références. Un rendez-vous peut être nécessaire pour une évaluation précise.'
        }
        questionTrois={'Puis-je faire estimer ma montre gratuitement ?'}
        reponseQuatre={
          'Oui. Si un modèle n’est pas disponible en stock, nous proposons un service de sourcing personnalisé pour trouver la pièce exacte que vous recherchez.'
        }
        questionQuatre={'Est-il possible de rechercher un modèle spécifique ?'}
      />
      <FooterFramerComponent.Responsive className="!w-full"
        email={'remy@davinciwatches.fr'}
        adresse={'17-19, Rue Jean Mermoz, 75008 Paris'}
        telephone={'+33 07 77 77 88 88'}
      />
    </div>
  );
}
