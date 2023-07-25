import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [string, setString] = useState("");

  const sounds = [
    {id: 'Q', key: 81, display: 'heater1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {id: 'W', key: 87, display: 'heater2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {id: 'E', key: 69, display: 'heater3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {id: 'A', key: 65, display: 'heater4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {id: 'S', key: 83, display: 'clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {id: 'D', key: 68, display: 'openHH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {id: 'Z', key: 90, display: 'kickNHat', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {id: 'X', key: 88, display: 'kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {id: 'C', key: 67, display: 'closedHH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  ];


  useEffect(() => {

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }

  }, []);

  function handleKeyPress(e) {
    sounds.map((sound) => {
      if (e.key.toUpperCase() === sound.id) {
        playAudio(sound.id, sound.display);
      }
    })
  }


   function playAudio(id, newId) {
    let audio = document.getElementById(id);
    if (audio.id === id.toUpperCase()) {
      audio.play();
      return setString(newId);
    }
  }


  return (
    <div className="App">
     <div id="drum-machine">
      <div id="display">
      {string}
      </div>
      <div id="beats">
          {sounds.map((sound) => {
            {console.log(sound)}
            return <button key={sound.display} onClick={() => {playAudio(sound.id, sound.display)}} className="drum-pad" id={sound.display}>{sound.id}
            <audio controls key={sound.key} src={sound.src} className="clip" id={sound.id} hidden></audio>
            </button>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
