'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const SERVER_URL = 'https://www.roblox.com/share?code=8f925a6a800a814584d19c30846d7a59&type=Server';

const BRAINROTS = [
  { id: 'spaghetti', name: 'Spaghetti Tualetti', img: '/images/spaghetti-tualetti.png' },
  { id: 'meowl', name: 'Meowl', img: '/images/meowl.png' },
  { id: 'dragon', name: 'Dragon Cannelloni', img: '/images/dragon-cannelloni.png' },
  { id: 'grande', name: 'La Grande Combinasion', img: '/images/la-grande-combinasion.png' },
  { id: 'strawberry', name: 'Strawberry Elephant', img: '/images/strawberry-elephant.png' },
  { id: 'mobilis', name: 'Los Mobilis', img: '/images/los-mobilis.png' },
  { id: 'esok', name: 'Esok Sekolah', img: '/images/esok-sekolah.png' },
  { id: 'garama', name: 'Garama & Madundung', img: '/images/garama-madundung.png' },
];

export default function Page() {
  const [selectedId, setSelectedId] = useState<string>(BRAINROTS[0].id);

  function handleGo() {
    const url = new URL(SERVER_URL);
    url.searchParams.set('brainrot', selectedId);
    window.open(url.toString(), '_blank');
  }

  function handleCopy() {
    const link = `${SERVER_URL}?brainrot=${encodeURIComponent(selectedId)}`;
    navigator.clipboard.writeText(link)
      .then(() => alert('Link copied to clipboard.'))
      .catch(() => alert('Could not copy — please copy manually: ' + link));
  }

  return (
    <>
      <div className="page">
        <header className="header">
          <div className="brand">
            <div className="box">▢</div>
            <h1 className="title"><span className="neon">MOREIRA METHOD</span></h1>
            <div className="box">▢</div>
          </div>
          <div className="beta">BETA PHASE</div>
        </header>

        <main className="main">
          <h2 className="choose">Choose A Brainrot:</h2>

          <section className="grid">
            {BRAINROTS.map(b => (
              <button
                key={b.id}
                className={`card ${selectedId === b.id ? 'card-selected' : ''}`}
                onClick={() => setSelectedId(b.id)}
              >
                <div className="circle">
                  <Image src={b.img} alt={b.name} width={120} height={120} style={{ objectFit: 'cover' }} />
                </div>
                <div className="name">{b.name}</div>
              </button>
            ))}
          </section>

          <div className="cta">
            <button className="go-btn" onClick={handleGo}>Go to Server</button>
            <button className="copy-btn" onClick={handleCopy}>Copy Link</button>
          </div>
        </main>

        <footer className="footer">
          Tip: edit <code>app/page.tsx</code> to change images or the server link.
        </footer>
      </div>

      <style jsx>{`
        :root {
          --bg: #040305;
          --card: #0f1724;
          --muted: #9ca3af;
          --accent: #ff1e1e;
        }
        .page {
          min-height: 100vh;
          background: var(--bg);
          color: #fff;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 36px 20px;
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .header { text-align: center; margin-bottom: 24px; }
        .brand { display:flex; align-items:center; gap:12px; justify-content:center; }
        .box { color: var(--accent); font-weight:700; opacity:0.9; }
        .title { margin:0; font-size: 34px; letter-spacing:2px; }
        .neon { color: var(--accent); text-shadow: 0 6px 24px rgba(255,30,30,0.55), 0 0 8px rgba(255,30,30,0.45); font-weight:800; }
        .beta { color: var(--muted); font-size:13px; margin-top:8px; }

        .main { width:100%; max-width:960px; }
        .choose { text-align:center; color:var(--muted); margin:24px 0; font-size:18px; }
        .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); gap:18px; }

        .card { background: var(--card); padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.03); display:flex; flex-direction:column; align-items:center; gap:12px; cursor:pointer; transition: transform .12s ease, box-shadow .12s ease; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.6); }
        .card-selected { border-color: rgba(255,20,20,0.85); box-shadow: 0 0 0 6px rgba(255,20,20,0.08), 0 18px 40px rgba(0,0,0,0.7); }

        .circle { width:120px; height:120px; border-radius:999px; overflow:hidden; background:rgba(255,255,255,0.03); display:flex; align-items:center; justify-content:center; }
        .name { font-weight:700; margin-top:8px; font-size:16px; text-align:center; color:#fff; }

        .cta { display:flex; justify-content:center; gap:12px; margin-top:28px; }
        .go-btn { background: var(--accent); color:#fff; padding:14px 34px; font-size:18px; font-weight:800; border:none; border-radius:36px; cursor:pointer; transition: transform .12s ease, box-shadow .12s ease; box-shadow:0 12px 30px rgba(224,18,18,0.36); }
        .go-btn:hover { transform: translateY(-3px); box-shadow:0 18px 46px rgba(224,18,18,0.46); }
        .copy-btn { background:transparent; color:#fff; border:1px solid rgba(255,255,255,0.08); padding:10px 18px; border-radius:10px; cursor:pointer; }

        .footer { margin-top:36px; color:var(--muted); font-size:13px; text-align:center; }
        code { background:#07101b; padding:4px 8px; border-radius:6px; }

        @media (max-width:580px) {
          .title { font-size:22px; }
          .circle { width:100px; height:100px; }
        }
      `}</style>
    </>
  );
}
