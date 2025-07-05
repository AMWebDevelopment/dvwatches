import React, { useRef, useState, useEffect } from 'react';
import instagramLogo from './assets/instagram.png'; 
import tiktokLogo from './assets/tiktok.png';
import whatsappLogo from './assets/whatsapp.png';

export default function SocialBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fermer la bulle si on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  function toggleButtons(e?: React.MouseEvent | React.KeyboardEvent) {
    e?.preventDefault();
    setIsOpen((open) => !open);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleButtons(e);
    }
  }

  return (
    <div
      id="social-bubble-container"
      ref={containerRef}
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}
    >
      <div
        id="social-bubble"
        tabIndex={0}
        onClick={toggleButtons}
        onKeyDown={handleKeyDown}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#B1B58F',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: 32,
          boxShadow: '0 2px 8px rgba(177, 181, 143, 1)',
          transition: 'background 0.2s',
        }}
        aria-label="Ouvrir les réseaux sociaux"
      >
        +
      </div>
      <div
        id="social-buttons"
        className={isOpen ? 'show' : ''}
        style={{
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'absolute',
          bottom: 70,
          right: 0,
          gap: 12,
        }}
      >
        <a
          href="https://www.tiktok.com/@da.vinci.watches"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#FFFFFF',
            color: '#B1B58F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgb(255, 255, 255)',
          }}
         aria-label="Tiktok"
        >
          <img
            src={tiktokLogo}
            alt="Tiktok"
            style={{ width: 48, height: 48, }}
          />
        </a>
        <a
          href="https://www.instagram.com/davinciwatchesparis/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#FFFFFF',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(255, 255, 255, 0.15)',
            overflow: 'hidden',
            padding: 0,
          }}
          aria-label="Instagram"
        >
          <img
            src={instagramLogo}
            alt="Instagram"
            style={{ width: 48, height: 48, }}
          />
        </a>
        <a
          href="https://wa.me/+33777778888"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#FFFFFF',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(255, 255, 255, 0.15)',
          }}
         aria-label="whatsapp"
        >
          <img
            src={whatsappLogo}
            alt="whatsapp"
            style={{ width: 48, height: 48, }}
          />
        </a>
      </div>
    </div>
  );
}