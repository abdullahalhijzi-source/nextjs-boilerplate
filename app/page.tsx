'use client';

import React from 'react';
import Image from 'next/image';

const SERVER_URL = 'https://www.roblox.com/share?code=8f925a6a800a814584d19c30846d7a59&type=Server';

// List of "brainrots" — update names/images as you like
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

export default function Home() {
  function openServerWith(brainrotId: string) {
    try {
      // add query so you can detect which brainrot user clicked
      const url = new URL(SERVER_URL);
      url.searchParams.set('brainrot', brainrotId);
      window.open(url.toString(), '_blank');
    } catch (e) {
      // fallback for special URLs that might not parse with URL()
      window.open(`${SERVER_URL}?brainrot=${encodeURIComponent(brainrotId)}`, '_blank');
    }
  }

  async function copyLink(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert('Link copied to clipboard.');
    } catch {
      alert('Could not copy — please copy manually: ' + text);
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>MOREIRA METHOD <span style={styles.beta}>— BETA PHASE</span></h1>
          <p style={styles.subtitle}>Choose a Brainrot and jump into the server — your selection will be passed along.</p>
        </div>

        <div style={styles.headerButtons}>
          <button style={styles.btnLight} onClick={() => copyLink(SERVER_URL)}>Copy Server Link</button>
          <a href={SERVER_URL} target="_blank" rel="noopener noreferrer" style={styles.btnDark}>Go to Server</a>
        </div>
      </header>

      <main style={styles.gridWrap}>
        <div style={styles.grid}>
          {BRAINROTS.map((b) => (
            <article key={b.id} style={styles.card}>
              <div style={styles.cardTop}>
                <div style={styles.imgWrap}>
                  <Image src={b.img} alt={b.name} width={120} height={120} style={{ borderRadius: 12 }} />
                </div>
                <div>
                  <h3 style={styles.cardTitle}>{b.name}</h3>
                </div>
              </div>

              <div style={styles.cardActions}>
                <button
                  style={styles.btnOutline}
                  onClick={() => {
                    openServerWith(b.id);
                    copyLink(`${SERVER_URL}?brainrot=${encodeURIComponent(b.id)}`);
                  }}
                >
                  Enter & Copy Tag
                </button>

                <button
                  style={styles.btnSolid}
                  onClick={() => copyLink(`${SERVER_URL}?brainrot=${encodeURIComponent(b.id)}`)}
                >
                  Copy Link
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer style={styles.footer}>
        Tip: Edit <code style={styles.code}>app/page.tsx</code> to change images or the server URL.
      </footer>
    </div>
  );
}

/* Inline styles so you don't need Tailwind — works out of the box */
const styles: { [k: string]: React.CSSProperties } = {
  page: { minHeight: '100vh', background: '#0b0b0b', color: '#fff', padding: 28, fontFamily: 'Inter, system-ui, Arial' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto 28px' },
  title: { fontSize: 26, margin: 0, letterSpacing: 0.6 },
  beta: { fontSize: 12, opacity: 0.8, marginLeft: 8, fontWeight: 600 },
  subtitle: { marginTop: 6, color: '#9ca3af', fontSize: 13 },
  headerButtons: { display: 'flex', gap: 10, alignItems: 'center' },
  btnLight: { background: 'transparent', color: '#fff', border: '1px solid #374151', padding: '8px 12px', borderRadius: 8, cursor: 'pointer' },
  btnDark: { background: '#111827', color: '#fff', padding: '10px 14px', borderRadius: 10, textDecoration: 'none', display: 'inline-block' },

  gridWrap: { maxWidth: 1100, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 },
  card: { background: '#0f1724', padding: 14, borderRadius: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 160, boxShadow: '0 6px 20px rgba(2,6,23,0.6)' },
  cardTop: { display: 'flex', gap: 12, alignItems: 'center' },
  imgWrap: { width: 84, height: 84, borderRadius: 12, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1220' },
  cardTitle: { margin: 0, fontSize: 16 },
  cardActions: { marginTop: 12, display: 'flex', gap: 8 },
  btnOutline: { flex: 1, padding: '8px 10px', borderRadius: 10, border: '1px solid #374151', background: 'transparent', color: '#fff', cursor: 'pointer' },
  btnSolid: { padding: '8px 10px', borderRadius: 10, background: '#111827', color: '#fff', cursor: 'pointer' },
  footer: { marginTop: 28, textAlign: 'center', color: '#9ca3af' },
  code: { background: '#0b1220', padding: '2px 6px', borderRadius: 6, fontSize: 12 }
};
