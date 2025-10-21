'use client';

import React from 'react';
import Image from 'next/image';

const SERVER_URL = 'https://www.roblox.com/share?code=8f925a6a800a814584d19c30846d7a59&type=Server';

// Brainrot cards (first uses your uploaded Spaghettitualetti.png)
const BRAINROTS = [
  { id: 'spaghetti', name: 'Spaghetti Tualetti', img: '/Spaghettitualetti.png' },
  { id: 'meowl', name: 'Meowl', img: '/placeholder.png' },
  { id: 'dragon', name: 'Dragon Cannelloni', img: '/placeholder.png' },
  { id: 'grande', name: 'La Grande Combinasion', img: '/placeholder.png' },
  { id: 'straw', name: 'Strawberry Elephant', img: '/placeholder.png' },
  { id: 'mobilis', name: 'Los Mobilis', img: '/placeholder.png' },
  { id: 'esok', name: 'Esok Sekolah', img: '/placeholder.png' },
  { id: 'garama', name: 'Garama & Madundung', img: '/placeholder.png' },
];

export default function Page() {
  function openServer(brainrotId: string) {
    // try building a url with query param; fallback if URL fails
    try {
      const url = new URL(SERVER_URL);
      url.searchParams.set('brainrot', brainrotId);
      window.open(url.toString(), '_blank');
    } catch {
      window.open(`${SERVER_URL}?brainrot=${encodeURIComponent(brainrotId)}`, '_blank');
    }
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      void alert('Copied to clipboard.');
    } catch {
      void alert('Could not copy automatically. Please copy manually:\n' + text);
    }
  }

  return (
    <>
      <div className="page">
        <header className="header">
          <div className="brand">
            <h1 className="title">MOREIRA METHOD <span className="beta">— BETA PHASE</span></h1>
            <p className="subtitle">Choose a Brainrot — your selection will be passed to the server.</p>
          </div>

          <div className="actions">
            <button className="btn btn-outline" onClick={() => copyToClipboard(SERVER_URL)}>Copy Server Link</button>
            <a className="btn btn-primary" href={SERVER_URL} target="_blank" rel="noreferrer">Go to Server</a>
          </div>
        </header>

        <main className="container">
          <section className="grid">
            {BRAINROTS.map(b => (
              <article className="card" key={b.id}>
                <div className="card-top">
                  <div className="img-wrap">
                    <Image src={b.img} alt={b.name} width={120} height={120} style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="card-info">
                    <h3>{b.name}</h3>
                    <p className="tagline">click to join or copy link</p>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn btn-outline small"
                    onClick={() => {
                      openServer(b.id);
                      copyToClipboard(`${SERVER_URL}?brainrot=${encodeURIComponent(b.id)}`);
                    }}
                  >
                    Enter & Copy Tag
                  </button>

                  <button
                    className="btn btn-primary small"
                    onClick={() => copyToClipboard(`${SERVER_URL}?brainrot=${encodeURIComponent(b.id)}`)}
                  >
                    Copy Link
                  </button>
                </div>
              </article>
            ))}
          </section>
        </main>

        <footer className="footer">Tip: edit <code>app/page.tsx</code> to change images or the server link.</footer>
      </div>

      {/* Styles (component-local) */}
      <style jsx>{`
        :root {
          --bg: #060609;
          --card: #0f1724;
          --muted: #9ca3af;
          --accent: #111827;
        }
        .page {
          min-height: 100vh;
          background: linear-gradient(180deg, #050508 0%, #0b0b0d 100%);
          color: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 32px;
        }
        .header {
          max-width: 1100px;
          margin: 0 auto 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .title { font-size: 26px; margin: 0; letter-spacing: 0.6px; }
        .beta { font-size: 12px; opacity: .8; margin-left: 8px; font-weight: 600; }
        .subtitle { margin-top: 6px; color: var(--muted); font-size: 13px; }
        .actions { display:flex; gap:10px; align-items:center; }
        .btn { border-radius: 10px; padding: 10px 14px; cursor: pointer; font-weight: 600; text-decoration: none; display:inline-flex; align-items:center; justify-content:center; }
        .btn-primary { background: var(--accent); color: #fff; border: 1px solid rgba(255,255,255,0.04); }
        .btn-outline { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.08); }
        .container { max-width: 1100px; margin: 0 auto; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; }
        .card { background: var(--card); padding: 14px; border-radius: 14px; display:flex; flex-direction:column; justify-content:space-between; min-height:160px; box-shadow: 0 8px 24px rgba(2,6,23,0.6); transition: transform .14s ease, box-shadow .14s ease; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2,6,23,0.8); }
        .card-top { display:flex; gap:12px; align-items:center; }
        .img-wrap { width:84px; height:84px; border-radius:12px; overflow:hidden; background:#07101b; display:flex; align-items:center; justify-content:center; }
        .card-info h3 { margin:0; font-size:16px; }
        .tagline { margin:6px 0 0; color: var(--muted); font-size:13px; }
        .card-actions { margin-top:12px; display:flex; gap:8px; }
        .small { padding:8px 10px; font-size:13px; }
        .footer { margin-top:28px; text-align:center; color:var(--muted); }
        code { background:#07101b; padding:4px 8px; border-radius:6px; font-size:13px; }
        @media (max-width:580px) {
          .header { flex-direction: column; align-items: flex-start; gap:16px; }
        }
      `}</style>
    </>
  );
}
