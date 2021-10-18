import React from 'react';
import logo from './logo.svg';
import './App.css';
import QrScanner from 'qr-scanner';

function App() {


  const onClick = () => {
    const videoElement = document.querySelector('video');
    console.log(videoElement)
    if(videoElement != null){
      const qrScanner = new QrScanner(videoElement, result => console.log('decoded qr code:', result));
      console.log(qrScanner)
      qrScanner.start();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <video id="qr-video"></video>
        <button onClick={onClick}>toto</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
