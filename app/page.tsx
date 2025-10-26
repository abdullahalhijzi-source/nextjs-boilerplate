'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const SERVER_URL =
  'https://www.roblox.com/share?code=ead2d64ae6093347a624bfcd8d53aa47&type=Server';

const BRAINROTS = [
  { id: 'spaghetti', name: 'Spaghetti Tualetti', img: '/Spaghettitualetti.png', time: '30 min' },
  { id: 'meowl', name: 'Meowl', img: '/Clear-background-clear-meowl-image.png', time: '30 min' },
  { id: 'dragon', name: 'Dragon Cannelloni', img: '/Dragoncanneloni.png', time: '30 min' },
  { id: 'grande', name: 'La Grande Combinasion', img: '/Carti.png', time: '15 min' },
  { id: 'strawberry', name: 'Strawberry Elephant', img: '/Strawberryelephant.png', time: '50 min' },
  { id: 'mobilis', name: 'Los Mobilis', img: '/Losmobil.png', time: '15 min' },
  { id: 'esok', name: 'Esok Sekolah', img: '/Esok-Sekolah2.png', time: '20 min' },
  { id: 'garama', name: 'Garama & Madundung', img: '/Garamadundung.png', time: '30 min' },
  { id: 'sixtyseven', name: '67', img: '/67.png', time: '15 min' },
];

export default function Page() {
  const [selectedId, setSelectedId] = useState<string>(BRAINROTS[0].id);

  const handleGo = () => {
    window.open(SERVER_URL, '_blank');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-2">🔥 MOREIRA METHOD 🔥</h1>
      <p className="text-gray-400 mb-8">BETA PHASE</p>
      <h2 className="text-xl mb-4">Choose A Brainrot:</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {BRAINROTS.map((b) => (
          <button
            key={b.id}
            onClick={() => setSelectedId(b.id)}
            className={`flex flex-col items-center bg-neutral-900 p-4 rounded-xl border ${
              selectedId === b.id
                ? 'border-red-500 shadow-[0_0_10px_red]'
                : 'border-neutral-800'
            }`}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden bg-neutral-800 flex items-center justify-center">
              <Image src={b.img} alt={b.name} width={112} height={112} />
            </div>
            <p className="mt-3 font-semibold text-center">{b.name}</p>
            <p className="text-sm text-gray-400 mt-1 text-center">{b.time}</p>
          </button>
        ))}
      </div>

      <button
        onClick={handleGo}
        className="mt-10 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition"
      >
        Go to Server
      </button>

      <p className="text-gray-500 mt-10 text-sm">
        Tip: edit <code>app/page.tsx</code> to change images or the server link.
      </p>
    </main>
  );
}
