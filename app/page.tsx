'use client';

import { useRef } from 'react';

export default function Page () {
  const successAudioRef = useRef<HTMLAudioElement>(null);
  const failureAudioRef = useRef<HTMLAudioElement>(null);

  const handleCorrect = () => {
    successAudioRef.current?.play();
  };

  const handleIncorrect = () => {
    failureAudioRef.current?.play();
  };

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: '2rem',
      }}
    >
      <h1>👦 こども英単語クイズ</h1>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleCorrect} style={{ marginRight: '1rem' }}>
          正解！
        </button>
        <button onClick={handleIncorrect}>不正解！</button>
      </div>
      <audio ref={successAudioRef} src="/sounds/success.mp3" />
      <audio ref={failureAudioRef} src="/sounds/failure.mp3" />
    </main>
  );
}
