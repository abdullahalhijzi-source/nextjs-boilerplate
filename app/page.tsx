'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const SERVER_URL = 'https://www.roblox.com/share?code=8f925a6a800a814584d19c30846d7a59&type=Server';

const BRAINROTS = [
  { id: 'spaghetti', name: 'Spaghetti Tualetti', src: '/Spaghettitualetti.png' },
  { id: 'meowl', name: 'Meowl', src: '/Meowl.png' },
  { id: 'dragon', name: 'Dragon Cannelloni', src: '/Dragon.png' },
  { id: 'grande', name: 'La Grande Combinasion', src: '/LaGrandeCombinasion.png' },
  { id: 'straw', name: 'Strawberry Elephant', src: '/StrawberryElephant.png' },
  { id: 'mobilis', name: 'Los Mobilis', src: '/LosMobilis.png' },
  { id: 'esok', name: 'Esok Sekolah', src: '/EsokSekolah.png' },
  { id: 'garama', name: 'Garama & Madundung', src: '/GaramaMadundung.png' },
];

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);

  function openServer(brainrotId: string) {
    try {
      const url = new URL(SERVER_URL);
      url.searchParams.set('brainrot', brainrotId);
      window.open(url.toString(), '_blank');
    } catch {
      window.open(`${SERVER_URL}?brainrot=${encodeURIComponent(brainrotId)}`, '_blank');
    }
  }

  async function copyLink(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      alert('Link copied to clipboard.');
    } catch {
      alert('Could not copy automatically. Please copy manually:\n' + link);
    }
  }

  function onEnterClick() {
    const id = selected ?? BRAINROTS[0].id;
    openServer(id);
    copyLink(`${SERVER_URL}?brainrot=${encodeURIComponent(id)}`);
  }

  return (
    <>
      <div className="page">
        <header className="header">
          <div className="brand">
            <div className="glow">▢</div>
            <h1 className="title"><span className="neon">MOREIRA METHOD</span></h1>
            <div className="glow">▢</div>
          </div>
          <div className="beta">BETA PHASE</div>
        </header>

        <main className="main">
          <h2 className="choose">Choose A Brainrot:</h2>

          <section className="grid">
            {BRAINROTS.map((b) => {
              const isSelected = selected === b.id;
              return (
                <button
                  key={b.id}
                  className={`card ${isSelected ? 'card-selected' : ''}`}
                  onClick={() => setSelected(b.id)}
                >
                  <div className="circle">
                    <Image src={b.src} alt={b.name} width={120} height={120} style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="name">{b.name}</div>
                </button>
              );
            })}
          </section>

          <div className="cta-wrap">
            <button className="go-btn" onClick={onEnterClick}>Go to Server</button>
          </div>
        </main>

        <footer className="footer">Tip: edit <code>app/page.tsx</code> to change images or the server link.</footer>
      </div>

      <style jsx>{`
        :root {
          --bg: #040305;
          --muted: #9ca3af;
          --card: #0f1724;
          --accent: #ff1e1e;
        }
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 50% 10%, rgba(255,0,0,0.02), rgba(0,0,0,0.95)), var(--bg);
          color: #fff;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 36px 20px;
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        /* Header / neon title */
        .header { text-align:center; margin: 6px 0 18px; }
        .brand { display:flex; align-items:center; gap:12px; justify-content:center; }
        .glow { color: #ff3b3b; font-weight:700; opacity:0.9; text-shadow: 0 0 6px rgba(255,59,59,0.6); }
        .title { margin:0; font-size: 34px; letter-spacing:2px; }
        .neon { color:#ff3b3b; text-shadow: 0 6px 24px rgba(255,30,30,0.55), 0 0 8px rgba(255,30,30,0.45); font-weight:800; }
        .beta { color: var(--muted); margin-top:8px; font-size:13px; }

        .main { width: 100%; max-width: 980px; margin-top: 18px; }
        .choose { text-align:center; color:var(--muted); margin: 18px 0; font-size:18px; }

        .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:18px; padding: 6px; }

        .card {
          background: #0b0d10;
          border-radius: 14px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,0.03);
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:12px;
          cursor:pointer;
          transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.6);
        }
        .card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.7); }
        .card-selected {
          border-color: rgba(255,20,20,0.85);
          box-shadow: 0 0 0 6px rgba(255,20,20,0.08), 0 18px 40px rgba(0,0,0,0.7);
        }

        .circle { width:120px; height:120px; border-radius:999px; overflow:hidden; display:flex; align-items:center; justify-content:center; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.03), transparent 30%); }
        .name { font-weight:700; margin-top:6px; text-align:center; font-size:16px; color:#fff; }

        .cta-wrap { display:flex; justify-content:center; margin-top:28px; }
        .go-btn {
          background: linear-gradient(180deg, #ff2b2b, #e01212);
          border: none;
          color: white;
          padding: 16px 40px;
          border-radius: 36px;
          font-weight: 800;
          font-size: 18px;
          box-shadow: 0 12px 30px rgba(224,18,18,0.36), inset 0 -4px 12px rgba(0,0,0,0.2);
          cursor:pointer;
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .go-btn:hover { transform: translateY(-3px); box-shadow: 0 18px 46px rgba(224,18,18,0.46); }

        .footer { margin-top: 36px; color: var(--muted); font-size:13px; }

        code { background:#0b0f13; padding:4px 8px; border-radius:6px; }

        @media (max-width:580px) {
          .title { font-size: 22px; }
          .circle { width:100px; height:100px; }
        }
      `}</style>
    </>
  );
}
