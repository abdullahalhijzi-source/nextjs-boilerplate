'use client';

import React from "react";

const SERVER_URL = "https://www.roblox.com/share?code=8f925a6a800a814584d19c30846d7a59&type=Server"; // replace this

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Moreira Method Clone</h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Welcome to your custom Next.js site! Click below to join the private server.
      </p>
      <a
        href={SERVER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-300 transition-all"
      >
        Join Private Server
      </a>
    </main>
  );
}
