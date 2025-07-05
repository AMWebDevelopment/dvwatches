import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const FormulaireVente = () => {
  const form = useRef();
  const [buttonState, setButtonState] = useState('idle'); // idle | sending | sent

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonState('sending');

    emailjs
      .sendForm('service_r5fvidq', 'template_htru1v3', form.current, {
        publicKey: 'EshAIxgBHMmJOnmmA',
      })
      .then(
        () => {
          setButtonState('sent');
          setTimeout(() => {
            setButtonState('idle');
            form.current.reset();
          }, 2000);
        },
        (error) => {
          setButtonState('idle');
          console.log('FAILED...', error.text);
        },
      );
  };

  let buttonText = 'Envoyer';
  let buttonClass = 'w-full bg-[#A88B65] text-black text-lg py-4 mt-4 hover:bg-[#8c7352] transition-colors';
  let buttonDisabled = false;

  if (buttonState === 'sending') {
    buttonText = 'Envoi...';
    buttonClass = 'w-full bg-gray-300 text-gray-500 text-lg py-4 mt-4 cursor-not-allowed';
    buttonDisabled = true;
  } else if (buttonState === 'sent') {
    buttonText = 'Envoyé !';
    buttonClass = 'w-full bg-[#A88B65] text-white text-lg py-4 mt-4';
    buttonDisabled = true;
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
      <h2 className="text-3xl font-semibold mb-2 text-left">Vendez-nous votre montre</h2>
      <p className="mb-6 text-left text-lg text-gray-700">Nos équipes vous recontacteront au plus vite.</p>

      <div className="flex flex-col gap-2">
        <label htmlFor="nom" className="text-base font-medium text-gray-900">Nom</label>
        <input
          id="nom"
          type="text"
          name="nom"
          placeholder="Entrez votre nom"
          className="border border-gray-400 rounded-none px-4 py-3 bg-white placeholder-gray-400 focus:outline-none focus:border-black"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base font-medium text-gray-900">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Entrez votre email"
          className="border border-gray-400 rounded-none px-4 py-3 bg-white placeholder-gray-400 focus:outline-none focus:border-black"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="reference" className="text-base font-medium text-gray-900">Référence</label>
        <input
          id="reference"
          type="text"
          name="reference"
          placeholder="Quel est la référence de votre montre ?"
          className="border border-gray-400 rounded-none px-4 py-3 bg-white placeholder-gray-400 focus:outline-none focus:border-black"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="descriptif" className="text-base font-medium text-gray-900">Descriptif</label>
        <textarea
          id="descriptif"
          name="descriptif"
          placeholder=""
          rows={4}
          className="border border-gray-400 rounded-none px-4 py-3 bg-white placeholder-gray-400 focus:outline-none focus:border-black resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className={buttonClass}
        disabled={buttonDisabled}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default FormulaireVente;